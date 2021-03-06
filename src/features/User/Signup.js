import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    userSelector, 
    signupUser, 
    clearSignupUserStatus, } from "./userSlice"
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import style from "./User.module.css"

const Signup = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();

    const { signupUserStatus, loggedIn, message } = useSelector(userSelector);

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
   
        if (signupUserStatus === "rejected") {
            debugger
            toast.error(message)
            dispatch(clearSignupUserStatus())
        }
        if (signupUserStatus === "complete") {
            toast.success('Successfully Signed Up')
            dispatch(clearSignupUserStatus())
            history.push('/dashboard')
        }
        if (loggedIn) {
            history.push('/dashboard')
        }

    }, [signupUserStatus, dispatch, message, history, loggedIn]);


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
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className={style.userForm}>
                <div className={style.userFormNameCell}>
                    <h4>First Name</h4>
                    <input 
                        type="text" 
                        name="first_name" 
                        value={userData.first_name} 
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <h4>Last Name</h4>

                    <input 
                        type="text" 
                        name="last_name" 
                        value={userData.last_name} 
                        onChange={handleChange} 
                        placeholder="Last Name"
                    />
                </div>
                <div>
                <h4>Email</h4>

                    <input 
                        type="text" 
                        name="email" 
                        value={userData.email} 
                        onChange={handleChange} 
                        placeholder="Email"
                    />
                    
                </div>
                <h4>Password</h4>
                
                <input 
                    type="password" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleChange} 
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Sign Up" />

            </form>

        </div>
    )

}

export default Signup