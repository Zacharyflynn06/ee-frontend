import React from 'react';
import style from './Events.module.css'
import Loading from '../loading/Loading'
import { eventSelector } from './EventSlice';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';

const EventContainer = () => {

    const {events, isFetching, isSuccess, clearState } = useSelector(eventSelector)
    if (isFetching) {

        return (
            <Loading />
        )

    } else if (isSuccess){
        
        return (
            <div className={style.eventsContainer}>
                
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