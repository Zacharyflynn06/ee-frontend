import style from "./Events.module.css";
// import { NavLink } from "react-router-dom";

const EventCard = (props) => {
  console.log(props);
  const { datetime, offers, venue } = props.event;
  const dateObj = new Date(datetime).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const isTicketLink = offers?.[0]?.url;
  return (
    <div className={style.eventCard}>
      <div className={style.eventDescription}>
        {/* <NavLink to={`/tour/events/${id}`} exact> */}
        <div className={style.eventDateCell}>
          {venue.location} - {dateObj}
        </div>
        <div className={style.eventVenueCell}>
          <div className={style.eventVenueName}>{venue.name}</div>
        </div>
        <div className={style.eventVenueLocation}></div>
        {/* </NavLink> */}
      </div>

      {isTicketLink ? (
        <a
          className={style.eventLink}
          target="_blank"
          rel="noreferrer"
          href={offers[0].url}
        >
          Tickets
        </a>
      ) : (
        <div className={style.eventLink}>Free</div>
      )}
    </div>
  );
};

export default EventCard;
