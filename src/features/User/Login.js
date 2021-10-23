// import React, {useState, useEffect}from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import style from './User.module.css'
// import { loginUser, userSelector, clearLoginUserStatus } from './userSlice';
// import { useHistory } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const Login = () => {

//     const dispatch = useDispatch();
//     const history = useHistory();

//     const { loginUserStatus, message, loggedIn } = useSelector(userSelector)

//     const [userData, setUserData] = useState({
//         email: '',
//         password: ''
//     })

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         dispatch(loginUser(userData))
//     }

//     const handleChange = (event) => {
//         setUserData((prevState) => ({
//             ...prevState,
//             [event.target.name]: event.target.value
//         }))
//     }

//     useEffect(() => {
//         if (loginUserStatus === "rejected") {
//             toast.error(message)
//             dispatch(clearLoginUserStatus())
//         }

//         if (loginUserStatus === "complete") {
//             dispatch(clearLoginUserStatus())
//             toast.success('Logged In')
//             history.push('/dashboard')
//         }
//     }, [loginUserStatus, loggedIn, dispatch, history, message])

//     return (
//         <div className={style.formContainer}>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit} className={style.userForm}>

//                 <h4>Email:</h4>
//                 <input 
//                     type="text" 
//                     name="email" 
//                     value={userData.email}
//                     onChange={handleChange}
//                 />

//                 <h4>Password:</h4>
//                 <input 
//                     type="password" 
//                     name="password" 
//                     value={userData.password}
//                     onChange={handleChange}
//                 />

//                 <br />
//                 <input className={style.button} type="submit" value="Log In" />

//             </form>



//         </div>
//     )
// }

// export default Login