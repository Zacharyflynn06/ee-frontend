import {NavLink} from 'react-router-dom'

import style from './NavBar.module.css'
import { useSelector } from 'react-redux';
import { userSelector } from '../User/userSlice';
import { useLocation } from 'react-router';

const NavBar = (props) => {
    const location = useLocation()

    const { loggedIn } = useSelector(userSelector)

    const handleToggle = () => {
        if(location.pathname === '/') {
        
        } else {
            props.toggleMenu()
        }
    }

    return (
        <div className={style.navContainer}>
            <div>
                <NavLink
                    to="/"
                    exact
                    className={style.navLink}
                    activeClassName={style.active}
                    onClick={handleToggle}
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
                onClick={handleToggle}
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
                    onClick={handleToggle}
                    
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
                    onClick={handleToggle}
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
                    onClick={handleToggle}
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
                    onClick={handleToggle}
                >
                    Contact
                </NavLink>
            </div>

            
            {loggedIn ? (
                    <>
                        <NavLink
                            exact
                            to='/dashboard'
                            className={style.navLink}
                            activeClassName={style.active}
                            onClick={handleToggle}
                        >
                        Dashboard
                        </NavLink>
                    </>
                ) : (
                    <>
                    <div>
                        <NavLink
                            exact
                            to='/signup'
                            className={style.navLink}
                            activeClassName={style.active}
                            onClick={handleToggle}
                        
                        >
                        Sign Up
                        </NavLink>
                    </div>

                    <div>
                        <NavLink
                            exact
                            to='/login'
                            className={style.navLink}
                            activeClassName={style.active}
                            onClick={handleToggle}
                        >
                        Log In
                        </NavLink>
                    </div>
                </>
                )}
            
            
        </div>
    )
}

export default NavBar