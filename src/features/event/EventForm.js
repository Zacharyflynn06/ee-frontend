import React, {useState} from 'react'
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'
import { useDispatch } from 'react-redux';
import { addEvent } from './EventSlice'

const EventForm = () => {
    

    const dispatch = useDispatch()
    const [eventData, setEventData] = useState({
        date: "",
        venue_name: "",
        city: "",
        state: "",
        ticket_link: ""
    })
    
    const handleSubmit = (event) => {
        debugger
        event.preventDefault()
        const formData = new FormData(event.target)
        dispatch(addEvent(formData))
    } 

    const handleChange = (event) => {
        setEventData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return ( 
        <div className={style.eventsContainer}>
            <NavBar />
            <h1>Event Form</h1>
            <form className={style.eventForm} onSubmit={handleSubmit}>
                <input type="text" name="date" placeholder="Date mon-day-year" value={eventData.date} onChange={handleChange}/>
                <input type="text" name="venue_name" placeholder="Venue Name" value={eventData.venue_name} onChange={handleChange}/>
                <input type="text" name="city" placeholder="City" value={eventData.city} onChange={handleChange}/>
                <input type="text" name="state" placeholder="State" value={eventData.state} onChange={handleChange}/>
                <input type="text" name="ticket_link" placeholder="ticket_link" value={eventData.ticket_link} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default EventForm;