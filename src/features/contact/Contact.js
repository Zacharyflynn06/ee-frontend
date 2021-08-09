import React from 'react';

import style from './Contact.module.css'

const Contact = (props) => {
    return (
        <div className={style.contactContainer}>
            <h1>Contact Page</h1>
            <h2>Booking</h2>
            <h3>Jordan Carriere</h3>
            <h3>jordan@alpine-partners.net</h3>

            <h2>Management</h2>
            <h3>Tynan Conroy</h3>
            <h3>Mind Warp Management</h3>

        </div>
    )
}

export default Contact