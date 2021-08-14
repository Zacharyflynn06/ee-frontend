import React, {useState, useEffect} from 'react'
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, selectEvents } from './EventSlice'
import { useHistory, useParams } from 'react-router-dom';

const EventForm = () => {
    
    const history = useHistory()
    const params = useParams
    const dispatch = useDispatch()

    const eventId = params.id
    const events = useSelector(selectEvents)
    const event = events.find(event => event.id === eventId)

    const [eventData, setEventData] = useState({
        date: "",
        venue_name: "",
        city: "",
        state: "",
        ticket_link: ""
    })

    useEffect(() => {
        if (event) {
            setEventData({
                name: event.attributes.date || "",
                description: event.attributes.venue_name || "",
                city: event.attributes.city || "",
                state: event.attributes.city || "",
                ticket_link: event.attributes.ticket_link || "",
            })
        }
    }, [event])
    
    const handleSubmit = (e) => {
        
        e.preventDefault()
        const formData = new FormData(e.target)
        if(event) {
            dispatch(updateEvent(formData))
            history.push(`/events/${event.id}`)
        } else {
            dispatch(addEvent(formData))
            history.push("/events")
        }
    } 

    const handleChange = (e) => {
        setEventData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
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