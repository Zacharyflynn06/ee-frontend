import React, {useState, useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux';
import style from './User.module.css'
import { loginUser, userSelector, clearState } from './userSlice';
import { useHistory } from 'react-router-dom';
// import toast from 'react-hot-toast';

const Login = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector)

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(loginUser(userData))
    }

    const handleChange = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }



    useEffect(() => {
        if (isError) {
            // toast.error(errorMessage)
            dispatch(clearState())
        }

        if (isSuccess) {
            dispatch(clearState())
            history.push('/dashboard')
        }
    }, [isError, isSuccess])

    return (
        <div className={style.formContainer}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <h4>Email:</h4>
                <input 
                    type="text" 
                    name="email" 
                    value={userData.email}
                    onChange={handleChange}
                />

                <h4>Password:</h4>
                <input 
                    type="password" 
                    name="password" 
                    value={userData.password}
                    onChange={handleChange}
                />

                <br />
                <input type="submit" value="Log In" />

            </form>



        </div>
    )
}

export default Login