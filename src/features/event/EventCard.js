import style from './Events.module.css'
import { NavLink } from 'react-router-dom';
const EventCard = (props) => {

    const {date, venue_name, city, state, ticket_link} = props.event.attributes
    
    return ( 
        <div className={style.eventCard}>
            {/* <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script><a class="bit-widget-initializer" data-artist-name="eminence ensemble" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="false" data-text-color="#000000" data-link-color="#00b4b3" data-background-color="rgba(0,0,0,0)" data-display-limit="" data-display-start-time="false" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(255, 255, 255, 0.5)"></a> */}
            <div className={style.eventDescription}>
                <div className={style.eventDateCell}>
                    <NavLink
                        to={`/tour/events/${props.event.id}`}
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