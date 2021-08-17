import React from 'react';
import style from './Events.module.css'
import Loading from '../loading/Loading'
import { eventSelector } from './EventSlice';
import { userSelector } from '../User/userSlice';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import { NavLink } from 'react-router-dom';

const EventContainer = () => {
    const {admin} = useSelector(userSelector)
    const {events, isFetching, isSuccess } = useSelector(eventSelector)
    
    const checkAdmin = () => {
        if (admin) {
            return (
                <div>
                    <NavLink
                        to={'/events/new'}
                    >
                    <input type="button" value="Add Event"/>  
                    </NavLink>

                </div>
            )
        }    
    }
    
    
    if (isFetching) {

        return (
            <Loading />
        )

    } else if (isSuccess){
        
        return (
            <div className={style.eventsContainer}>
                
                <h1>Upcoming Events</h1>
                <div className={style.eventsTable}>
                    {events.map(event => 
    
                        <EventCard
                            event={event}
                            key={event.id}
                        />
                    )}
                </div>
                {checkAdmin()}
            </div>     
        );
    }

}
 
export default EventContainer;