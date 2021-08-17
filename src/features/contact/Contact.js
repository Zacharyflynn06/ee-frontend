import React from 'react';

import style from './Contact.module.css'

const Contact = () => {
    return (
        <div className={style.contactContainer}>
            <h1>Contact Page</h1>
            <div className={style.contactWrapper}>
                <div className={style.contactTitle}>
                    Booking 
                </div>
                <div>
                    Jordan Carriere
                </div>
                <div>
                    jordan@alpine-partners.net
                </div>
            </div>
            <div className={style.contactWrapper}>
                <div className={style.contactTitle}>
                    Management
                </div>
                <div>
                    Tynan Conroy
                </div>
                <div>
                    Mind Warp Management
                </div>

            </div>

        </div>
    )
}

export default Contact