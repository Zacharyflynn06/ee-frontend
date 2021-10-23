// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logoutUser, userSelector } from './userSlice'
// import style from './User.module.css'


// const Dashboard = () => {
//     const dispatch = useDispatch()
//     const {currentUser} = useSelector(userSelector)

    
//     const handleLogout = (event) => {
//         event.preventDefault()
//         dispatch(logoutUser())
//     }

//     return(
//         <div className={style.formContainer}>
//             <h1>Dashboard</h1>
//             <h2>Welcome Back {currentUser.attributes.first_name} {currentUser.attributes.last_name}</h2>
            
//             <form onSubmit={handleLogout}>
//                 <input type="submit" value="Logout" />
//             </form>

//         </div>

//     )
// }

// export default Dashboard

