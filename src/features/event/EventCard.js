import style from "./Events.module.css";
// import { NavLink } from "react-router-dom";

const EventCard = (props) => {
  // debugger;
  const { datetime, offers, venue } = props.event;

  const dateObj = new Date(datetime).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={style.eventCard}>
      <div className={style.eventDescription}>
        {/* <NavLink to={`/tour/events/${id}`} exact> */}
        <div className={style.eventDateCell}>{dateObj}</div>
        <div className={style.eventVenueCell}>
          <div className={style.eventVenueName}>{venue.name}</div>
          <div className={style.eventVenueLocation}>{venue.location}</div>
        </div>
        {/* </NavLink> */}
      </div>
      <a
        className={style.eventLink}
        target="_blank"
        rel="noreferrer"
        href={offers[0].url}
      >
        Tickets
      </a>
    </div>
  );
};

export default EventCard;
