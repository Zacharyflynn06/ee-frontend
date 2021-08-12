import React from 'react'
import style from './Events.module.css'

const EventCard = (props) => {
    return ( 
        <div className={style.eventCard}>
            <div className={style.eventDescription}>
                <div className={style.eventDateCell}>
                    {props.event.attributes.date}
                </div>
                <div className={style.eventVenueCell}>
                    <div className={style.eventVenueName}>
                        {props.event.attributes.venue_name}
                    </div>
                    <div className={style.eventVenueLocation}>
                        {props.event.attributes.city}, {props.event.attributes.state}
                    </div>
                </div>
            </div>
            <div className={style.eventLink}>
                <input type="button" value="Ticket Link" />
            </div>
        </div>
    );
}
 
export default EventCard;