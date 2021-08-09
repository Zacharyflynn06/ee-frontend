import React from 'react'
import style from './Users.module.css'

const Login = (props) => {
    return (
        <div className={style.formContainer}>
            <h1>Login</h1>
            <form >
                <h4>Email:</h4>
                <input type="text" name="email"/>
                <h4>Password:</h4>
                <input type="password" name="password"/>
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    )
}

export default Login