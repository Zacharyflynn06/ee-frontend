import React, {useEffect} from 'react'
import NavBar from '../navbar/NavBar';
import { clearState, eventSelector, selectEvents } from './EventSlice';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../loading/Loading';
import { NavLink } from 'react-router-dom';
import style from './Events.module.css'



const ShowEvent = () => {

    const {isSuccess, isError, isFetching} = useSelector(eventSelector)
    const dispatch = useDispatch()

    const params = useParams()
    const eventId = params.id
    const events = useSelector(selectEvents)
    const event = events.find(event => event.id === eventId)


    if (isFetching) {
        return (
            <Loading />
            )
    } else {
        
        return ( 
            <div class={style.eventsContainer}>
                <NavBar />
                <div className={style.showEventCard}>
                    <div >
                        {event.attributes.date}
                    </div>
                    <div>
                        {event.attributes.venue_name}
                    </div>
                    <div>
                        {event.attributes.city},{event.attributes.state}

                    </div>

                    <NavLink
                        to={`/events/${eventId}/edit`}
                    >
                        <input type="button" value="Edit" />
                    </NavLink>

                </div>
            </div>
        );

    }
}
 
export default ShowEvent;