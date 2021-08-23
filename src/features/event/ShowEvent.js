import React from 'react'
import { eventSelector } from './EventSlice';
import { userSelector } from '../User/userSlice';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import { NavLink } from 'react-router-dom';
import style from './Events.module.css'



const ShowEvent = () => {

    const {getEventsStatus, events} = useSelector(eventSelector)
    const {admin} = useSelector(userSelector)
    const params = useParams()
    const eventObj = events.find(event => event.id === params.id)

    const checkAdmin = () => {
        if (admin) {
            return (
                <div>
                    <NavLink
                        to={`/events/${params.id}/edit`}
                    >
                    <input type="button" value="Edit Event"/>  
                    </NavLink>

                </div>
            )
        }    
    }

    if(getEventsStatus === 'rejected' || !eventObj ) {

        return ( <Error />)

    } else if (getEventsStatus === 'loading') {

        return ( <Loading /> )

    } else if(getEventsStatus === 'complete'){
            
        const {
            ticket_link, 
            name, 
            date, 
            venue_name, 
            description, 
            city, 
            state, 
            lineup
        } = eventObj.attributes

        return ( 
            <div className={style.eventsContainer}>

                <div className={style.showEventContainer}>
                    <div className={style.showEventTitle}>
                        {name} - {date}
                    </div>
                    <div>
                        {venue_name}
                    </div>
                    <div>
                        Description: {description}
                    </div>
                    <div>
                        {city}, {state}
                    </div>
                    <div >
                       Lineup: {lineup}
                    </div>
                    <div className={style.eventLink}>
                        <a target="_blank" rel="noreferrer" href={ticket_link}>Tickets</a>
                    </div>
    
                    {checkAdmin()}

                </div>
            </div>
        );

    }
}
 
export default ShowEvent;