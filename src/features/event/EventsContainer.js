import React from 'react';
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'
import Loading from '../loading/Loading'
import { selectEvents, selectStatus } from './EventSlice';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';

const EventContainer = () => {

    const events = useSelector(selectEvents)
    const status = useSelector(selectStatus)

    if (status === 'loading') {
        return (
            <Loading />
        )
    } else{
        
        return (
            <div className={style.eventsContainer}>
                <NavBar></NavBar>
                
                <h1>Events</h1>
                <div className={style.eventsTable}>
                    {events.map(event => 
    
                        <EventCard
                            event={event}
                            key={event.id}
                        />
                    )}
                </div>
            </div>     
        );
    }

}
 
export default EventContainer;