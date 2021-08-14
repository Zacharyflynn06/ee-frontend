import React from 'react'
import NavBar from '../navbar/NavBar';
import { selectEvents , selectStatus } from './EventSlice';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import { NavLink } from 'react-router-dom';
import style from './Events.module.css'


const ShowEvent = () => {

    const status = useSelector(selectStatus)
    

    const params = useParams()
    const eventId = params.id
    const events = useSelector(selectEvents)
    const event = events.find(event => event.id === eventId)

    if (status === "loading") {
        return (
            <Loading />
        )
    } else {
        
        return ( 
            <div class={style.eventsContainer}>
                <NavBar />
                <div>
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
        );

    }
}
 
export default ShowEvent;