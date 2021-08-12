import React from 'react';
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'

import { selectEvents } from './EventSlice';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';

const EventContainer = () => {

    const events = useSelector(selectEvents)
    return (
        <div className={style.eventsContainer}>
            <NavBar></NavBar>
            
            <h1>Events</h1>
            <div>
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
 
export default EventContainer;