import React, {useState, useEffect} from "react"
import { signupUser } from "./usersSlice"

const Signup = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }


    return (
        <div>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                <h4>Email:</h4>
                <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <h4>Password:</h4>
                <input 
                    type="text" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />
                <br />
                <input type="submit" value="Submit" />

            </form>

        </div>
    )

}

export default Signup