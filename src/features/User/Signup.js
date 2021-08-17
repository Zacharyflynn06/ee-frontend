import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { userSelector, signupUser, clearState } from "./userSlice"
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import style from "./User.module.css"

const Signup = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();

    const { isSuccess, isError, errorMessage } = useSelector(userSelector);

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        return () => {
          dispatch(clearState());
        };
      }, [dispatch]);

    useEffect(() => {
    if (isSuccess) {
        toast.success('Successfully Signed Up')
        dispatch(clearState());
        history.push('/dashboard');
    }

    if (isError) {
        debugger
        toast.error(errorMessage);
        dispatch(clearState());
    }
    });


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
                <input type="submit" value="Sign Up" />

            </form>

        </div>
    )

}

export default Signup