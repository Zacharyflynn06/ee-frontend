import React from 'react';
import {NavLink} from 'react-router-dom'

import style from './NavBar.module.css'



const NavBar = (props) => {


    // const toggleNavBar = () =>
    //     if(navBar().className === "closed"){
    //         navBar().className = "open"
    //     } else if(navBar().className === "open") {
    //         navBar().className = "closed"
    //     }
    // }



    return (
        <div className={style.navContainer}>
            <div>
                <NavLink
                    to="/"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                >
                    Home
                </NavLink>
            </div>
            <div>
            <NavLink
                to="/shop"
                exact
                className={style.navLink}
                activeClassName={style.active}
            >
                Shop
            </NavLink>
            </div>
            
            <div>
                <NavLink
                    to="/events"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                    
                >
                    Events
                </NavLink>
            </div>
            
            <div>

                <NavLink
                    to="/about"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                >
                    About
                </NavLink>
            </div>

            <div>

                <NavLink
                    to="/music"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                >
                    Music
                </NavLink>
            </div>

            <div>

                <NavLink
                    to="/contact"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                >
                    Contact
                </NavLink>
            </div>
            
        </div>
    )
}

export default NavBar