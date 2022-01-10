import style from "./Events.module.css";
import Loading from "../loading/Loading";
import { eventSelector } from "./EventSlice";
// import { userSelector } from "../User/userSlice";
import { useSelector } from "react-redux";
import EventCard from "./EventCard";
// import { NavLink } from "react-router-dom";
const EventContainer = () => {
  // const { admin } = useSelector(userSelector);
  const { status, events } = useSelector(eventSelector);

  if (status === "loading") {
    return <Loading />;
  } else {
    // const checkAdmin = () => {
    //   if (admin) {
    //     return (
    //       <div>
    //         <NavLink to={"/tour/events/new"}>
    //           <input type="button" value="Add Event" />
    //         </NavLink>
    //       </div>
    //     );
    //   }
    // };
    if (events.length >= 1) {
      return (
        <div className={style.eventsContainer}>
          <h1>Tour Dates</h1>
          <img
            className={style.image}
            src={process.env.PUBLIC_URL + "images/tourDates.png"}
            alt="press-shot"
          />
          <div className={style.eventsTable}>
            {events.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>

          {/* {checkAdmin()} */}
        </div>
      );
    } else {
      return (
        <div className={style.eventsContainer}>
          <h1>Tour Dates</h1>
          <div className={style.noEvents}>
            Check back soon for more tour dates!
          </div>
        </div>
      );
    }
  }
};

export default EventContainer;
