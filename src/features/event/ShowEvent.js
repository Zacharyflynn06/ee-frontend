import React from 'react'
import { eventSelector } from './EventSlice';
import { userSelector } from '../User/userSlice';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import Loading from '../loading/Loading';
import { NavLink } from 'react-router-dom';
import style from './Events.module.css'



const ShowEvent = () => {

    const {isFetching, isSuccess} = useSelector(eventSelector)
    const {admin} = useSelector(userSelector)
    const params = useParams()
    const events = useSelector(eventSelector).events
    const eventId = params.id

    const checkAdmin = () => {
        if (admin) {
            return (
                <div>
                    <NavLink
                        to={`/events/${eventId}/edit`}
                    >
                    <input type="button" value="Edit Event"/>  
                    </NavLink>

                </div>
            )
        }    
    }
    
    if (isFetching) {
        return (
            <Loading />
            )
        } else if(isSuccess){
            
        const event = events.find(event => event.id === eventId)
        const {ticket_link, name, date, venue_name, description, city, state, lineup} = event.attributes

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