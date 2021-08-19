import React, {useState, useEffect} from 'react'
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { 
    addEvent, 
    updateEvent, 
    deleteEvent, 
    eventSelector,
    removeEvent,
    clearAddEventStatus,
    clearUpdateEventStatus,
    clearDeleteEventStatus
} from './EventSlice'
import { useHistory, useParams } from 'react-router-dom';
import toast from 'react-hot-toast'

const EventForm = () => {
    
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()
    const { addEventStatus, updateEventStatus, deleteEventStatus, events, message } = useSelector(eventSelector)

    const eventId = params.id
    const eventObj = events.find(event => event.id === eventId)


    const [eventData, setEventData] = useState({
        date: "",
        venue_name: "",
        city: "",
        state: "",
        ticket_link: "",
        name: "",
        description: "",
        lineup: ""
    })

    useEffect(() => {
        if (eventObj) {
            
            setEventData({
                date: eventObj.attributes.date || "",
                venue_name: eventObj.attributes.venue_name || "",
                city: eventObj.attributes.city || "",
                state: eventObj.attributes.state || "",
                ticket_link: eventObj.attributes.ticket_link || "",
                name: eventObj.attributes.name || "",
                description: eventObj.attributes.description || "",
                lineup: eventObj.attributes.lineup || "",
            })
        }
    }, [eventObj])
    
    const handleSubmit = (event) => {
        
        event.preventDefault()
        const formData = new FormData(event.target)
        if(eventObj) {
            dispatch(updateEvent({data: formData, id: eventObj.id}))
        } else {
            dispatch(addEvent(formData))
        }
    } 

    const handleChange = (event) => {
        setEventData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleDelete = () => {
        dispatch(deleteEvent(eventObj))
    }



    useEffect(() => {
        
        if (addEventStatus === "rejected" ) {
        
            toast.error('there was a problem! try again')
            dispatch(clearAddEventStatus())
        }

        if (addEventStatus === "complete") {
            
            toast.success('Successfully added new event')
            dispatch(clearAddEventStatus())
            history.push('/events')
        }

        if (updateEventStatus === "rejected") {
            toast.error('there was a problem! try again')
            dispatch(clearUpdateEventStatus())
        }

        if (updateEventStatus === "complete") {
            
            toast.success('Successfully updated event')
            dispatch(clearUpdateEventStatus())
            history.push('/events')
        }

        if (deleteEventStatus === "rejected") {
            toast.error('there was a problem! try again')
            dispatch(clearUpdateEventStatus())
        }

        if (deleteEventStatus === "complete") {
            toast.success('Successfully deleted event')
            dispatch(clearDeleteEventStatus())
            history.push('/events')
        }

    
    }, [addEventStatus, updateEventStatus, deleteEventStatus, dispatch, history])

    const conditionallyDisplaySubmit = () => {
        if(eventObj) {
            return "Update Event"
        } else {
            return "Add Event"
        }
    }

    const conditionallyDisplayDelete = () => {
        if (eventObj) {
            return(
                <input type="button" value="Delete Event" onClick={handleDelete} />
            )
        }
    }

    return ( 
        <div className={style.eventsContainer}>
            <h1>Event Form</h1>
            <form className={style.eventForm} onSubmit={handleSubmit}>
                <input type="text" name="date" placeholder="Date mon-day-year" value={eventData.date} onChange={handleChange}/>
                <input type="text" name="venue_name" placeholder="Venue Name" value={eventData.venue_name} onChange={handleChange}/>
                <input type="text" name="city" placeholder="City" value={eventData.city} onChange={handleChange}/>
                <input type="text" name="state" placeholder="State" value={eventData.state} onChange={handleChange}/>
                <input type="text" name="ticket_link" placeholder="ticket_link" value={eventData.ticket_link} onChange={handleChange}/>
                <input type="text" name="name" placeholder="name" value={eventData.name} onChange={handleChange}/>
                <textarea type="text" name="description" placeholder="description" value={eventData.description} onChange={handleChange}/>
                <input type="text" name="lineup" placeholder="lineup" value={eventData.lineup} onChange={handleChange}/>
                <input type="submit" value={conditionallyDisplaySubmit()}/>
            </form>
            {conditionallyDisplayDelete()}
        </div>
    );
}
 
export default EventForm;