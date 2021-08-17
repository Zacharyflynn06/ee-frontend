import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, userSelector } from './userSlice'
// import { useHistory } from 'react-router'
import NavBar from '../navbar/NavBar'
import style from './User.module.css'
import { useHistory } from 'react-router-dom'
import { clearState } from './userSlice'

const Dashboard = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { isFetching, isError, isSuccess } = useSelector(userSelector);


    const {currentUser} = useSelector(userSelector)
    
    const handleLogout = (event) => {
        event.preventDefault()
        dispatch(logoutUser())

    }

    // useEffect(() => {
    //     dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
    // }, []);

    // useEffect(() => {
    //     if (isError) {
    //       dispatch(clearState());
    //       history.push('/dashboard');
    //     }

    //     if (isSuccess) {
    //         localStorage.removeItem('token');
    //         history.push('/login');
    //     }
    //   }, [isError]);

      
    return(
        <div className={style.formContainer}>
            <NavBar></NavBar>
            <h1>Dashboard</h1>
            <h2>Welcome Back {currentUser.attributes.first_name} {currentUser.attributes.last_name}</h2>
            
            <form onSubmit={handleLogout}>
                <input type="submit" value="Logout" />
            </form>

        </div>

    )
}

export default Dashboard

