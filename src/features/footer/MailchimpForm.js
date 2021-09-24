import React, { useState } from 'react'

const MailchimpForm = ({ status, message, onValidated }) => {

    const [formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.email &&
        formData.firstName &&
        formData.lastName &&
        formData.email.indexOf("@") > -1 &&
        onValidated({
            MERGE0: formData.email,
            MERGE1: formData.firstName,
            MERGE2: formData.lastName,
        });

    }
    
    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <h3>Join our newsletter!</h3>
            <div>
                <input 
                type="text"
                name="firstName"
                onChange={handleChange} 
                value={formData.firstName}
                placeholder="First Name"
                />
            </div>
            <div>
                <input 
                type="text"
                name="lastName"
                onChange={handleChange} 
                value={formData.lastName}
                placeholder="Last Name"
                />
            </div>
            <div>
                <input 
                type="email"
                name="email"
                onChange={handleChange} 
                value={formData.email}
                placeholder="Email"
                />
            </div>
            <input 
                type="submit"
                value="Sign Up" 
            />

        </form>
     );
}
 
export default MailchimpForm;