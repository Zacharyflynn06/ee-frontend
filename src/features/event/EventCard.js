import React from 'react'
import style from './Events.module.css'
import { NavLink } from 'react-router-dom';
const EventCard = (props) => {

    const {date, venue_name, city, state, ticket_link} = props.event.attributes
    
    return ( 
        <div className={style.eventCard}>
            
            <div className={style.eventDescription}>
                <div className={style.eventDateCell}>
                    <NavLink
                        to={`/events/${props.event.id}`}
                        exact
                    >{date}
                    </NavLink>
                </div>
                <div className={style.eventVenueCell}>
                    <div className={style.eventVenueName}>
                        {venue_name}
                    </div>
                    <div className={style.eventVenueLocation}>
                        {city}, {state}
                    </div>
                </div>
            </div>
            <div className={style.eventLink}>
                <a target="_blank" rel="noreferrer" href={ticket_link}>Tickets</a>
            </div>
        </div>
    );
}
 
export default EventCard;