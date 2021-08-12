import React from 'react';
import {NavLink} from 'react-router-dom'

import style from './NavBar.module.css'



const NavBar = (props) => {
    return (
        <div className={style.navContainer}>
            <NavLink
                to="/"
                exact
                className={style.navLink}
                activeClassName={style.active}
            >
                Home
            </NavLink>
            
            <NavLink
                to="/shop"
                exact
                className={style.navLink}
                activeClassName={style.active}
            >
                Shop
            </NavLink>

            <NavLink
                to="/events"
                exact
                className={style.navLink}
                activeClassName={style.active}
                
            >
                Events
            </NavLink>

            <NavLink
                to="/about"
                exact
                className={style.navLink}
                activeClassName={style.active}
            >
                About
            </NavLink>

            <NavLink
                to="/music"
                exact
                className={style.navLink}
                activeClassName={style.active}
            >
                Music
            </NavLink>

            <NavLink
                to="/contact"
                exact
                className={style.navLink}
                activeClassName={style.active}
            >
                Contact
            </NavLink>
        </div>
    )
}

export default NavBar