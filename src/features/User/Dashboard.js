import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, userSelector } from './userSlice'
// import { useHistory } from 'react-router'
import NavBar from '../navbar/NavBar'
import style from './User.module.css'
import { useHistory } from 'react-router-dom'
import { clearState } from './userSlice'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { isFetching, isError, isSuccess, message } = useSelector(userSelector);


    const {currentUser} = useSelector(userSelector)

    
    const handleLogout = (event) => {
        event.preventDefault()
        dispatch(logoutUser())
        toast.success('Logged Out')
        history.push('/')

    }

    return(
        <div className={style.formContainer}>
            <h1>Dashboard</h1>
            <h2>Welcome Back {currentUser.attributes.first_name} {currentUser.attributes.last_name}</h2>
            
            <form onSubmit={handleLogout}>
                <input type="submit" value="Logout" />
            </form>

        </div>

    )
}

export default Dashboard

