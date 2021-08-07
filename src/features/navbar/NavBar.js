import React from 'react';
import {NavLink} from 'react-router-dom'

const link = {
    width: "5em",
    padding: "2em",
    margin: "1em",
    color: "black",
    textDecoration: "none"
}

const NavBar = (props) => {
    return (
        <>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    color: "blue"
                }}
            >
                Home
            </NavLink>
            
            <NavLink
                to="/store"
                exact
                style={link}
                activeStyle={{
                    color: "blue"
                }}
            >
                Store
            </NavLink>

            <NavLink
                to="/events"
                exact
                style={link}
                activeStyle={{
                    color: "blue"
                }}
            >
                Events
            </NavLink>

            <NavLink
                to="/about"
                exact
                style={link}
                activeStyle={{
                    color: "blue"
                }}
            >
                About
            </NavLink>

            <NavLink
                to="/music"
                exact
                style={link}
                activeStyle={{
                    color: "blue"
                }}
            >
                Music
            </NavLink>

            <NavLink
                to="/contact"
                exact
                style={link}
                activeStyle={{
                    color: "blue"
                }}
            >
                Contact
            </NavLink>
        </>
    )
}

export default NavBar