import React, {useState} from 'react'
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'


const EventForm = () => {



    return ( 
        <div className={style.eventsContainer}>
            <NavBar />
            <h1>Event Form</h1>
            <form className={style.eventForm}>
                <input type="text" name="date" id="" placeholder="date" />
                <input type="text" name="venue_name" id="" placeholder="Venue Name" />
                <input type="text" name="city" id="" placeholder="City" />
                <input type="text" name="state" id="" placeholder="State" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default EventForm;