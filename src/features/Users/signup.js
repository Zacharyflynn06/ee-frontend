import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { usersSelector, signupUser } from "./usersSlice"

import style from "./Users.module.css"

const Signup = (props) => {

    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',

    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(signupUser(userData))
    }

    const handleChange = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }


    return (
        <div className={style.formContainer}>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                <h4>First Name:</h4>
                <input 
                    type="text" 
                    name="first_name" 
                    value={userData.first_name} 
                    onChange={handleChange} 
                />
                <h4>Last Name:</h4>
                <input 
                    type="text" 
                    name="last_name" 
                    value={userData.last_name} 
                    onChange={handleChange} 
                />
                <h4>Username:</h4>
                <input 
                    type="text" 
                    name="username" 
                    value={userData.username} 
                    onChange={handleChange} 
                />
                <h4>Email:</h4>
                <input 
                    type="text" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleChange} 
                />
                <h4>Password:</h4>
                <input 
                    type="text" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleChange} 
                />
                <br />
                <input type="submit" value="Submit" />

            </form>

        </div>
    )

}

export default Signup