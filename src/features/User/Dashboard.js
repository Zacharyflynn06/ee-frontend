import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, userSelector, fetchUserByToken, clearState } from './userSlice'
import { useHistory } from 'react-router'

import style from './User.module.css'

const Dashboard = () => {
    const history = useHistory()
    const dispatch = useDispatch()

const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logoutUser())
}


return(

    <div className={style.formContainer}>
        <form onSubmit={handleLogout}>
            <input type="submit" value="Logout" />
        </form>

    </div>

)
}


export default Dashboard