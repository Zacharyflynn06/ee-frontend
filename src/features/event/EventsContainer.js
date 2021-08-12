import React from 'react';
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'

const EventContainer = () => {
    return (
        <div className={style.eventsContainer}>
            <NavBar></NavBar>
            
            <h1>Events</h1>
        </div>     
    );
}
 
export default EventContainer;