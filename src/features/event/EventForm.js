import React, {useState, useEffect} from 'react'
import NavBar from '../navbar/NavBar';
import style from './Events.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, updateEvent, selectEvents, eventSelector, clearState } from './EventSlice'
import { useHistory, useParams } from 'react-router-dom';
import toast from 'react-hot-toast'

const EventForm = () => {
    
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()

    const eventId = params.id
    const events = useSelector(selectEvents)
    const eventObj = events.find(event => event.id === eventId)

    const { isSuccess, isError, errorMessage } = useSelector(eventSelector)

    const [eventData, setEventData] = useState({
        date: "",
        venue_name: "",
        city: "",
        state: "",
        ticket_link: ""
    })

    useEffect(() => {
        if (eventObj) {
            
            setEventData({
                date: eventObj.attributes.date || "",
                venue_name: eventObj.attributes.venue_name || "",
                city: eventObj.attributes.city || "",
                state: eventObj.attributes.state || "",
                ticket_link: eventObj.attributes.ticket_link || "",
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

    // clear state on initial render
    useEffect(() => {
        return () => {
          dispatch(clearState());
        };
      }, []);

    useEffect(() => {
        if (isError) {
            toast.isError(errorMessage)
            dispatch(clearState)

        }

        if (isSuccess) {
            toast.success('Successfully updated')
            dispatch(clearState())
            history.push('/events')
            
        }
    })

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
                <input type="submit" />
            </form>
        </div>
    );
}
 
export default EventForm;