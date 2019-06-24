import React, { Component } from 'react'
import RegistrationForm from '../forms/RegistrationForm'

class Register extends Component {


    render() {
        return(
            <div className="container mt-5">
                <h1>Register</h1>
                <RegistrationForm />
            </div>   
        )
    }

}

export default Register