import React from 'react';
import {NavLink} from 'react-router-dom'

import style from './NavBar.module.css'
import { useSelector } from 'react-redux';
import { userSelector } from '../User/userSlice';


const NavBar = (props) => {

    const { loggedIn } = useSelector(userSelector)

    return (
        <div className={style.navContainer}>
            <div>
                <NavLink
                    to="/"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                    onClick={props.toggleMenu}
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

            <div>
                {loggedIn ? (
                    <>
                        <NavLink
                            exact
                            to='/dashboard'
                            className={style.navLink}
                            activeClassName={style.active}
                        >
                        Dashboard
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            exact
                            to='/signup'
                            className={style.navLink}
                            activeClassName={style.active}
                        
                        >
                        Sign Up
                        </NavLink>
                        <NavLink
                            exact
                            to='/login'
                            className={style.navLink}
                            activeClassName={style.active}
                        >
                        Log In
                        </NavLink>
                    </>

                )}
            </div>
            
        </div>
    )
}

export default NavBar