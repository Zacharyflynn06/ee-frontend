import React from 'react'

const EventCard = (props) => {
    return ( 
        <div>
            <h1>{props.event.attributes.name}</h1>
        </div>
    );
}
 
export default EventCard;