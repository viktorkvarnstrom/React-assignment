import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { Redirect } from 'react-router-dom'
import { login } from '../../store/actions/authActions'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        
        this.props.login(user)
        this.props.history.push('/profile')
    }


    render() {
        if(sessionStorage.getItem("user") !== null) return <Redirect to='/profile' />

        return(
            <div className="container my-5">
                <h1>Login</h1>
                <LoginForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    email={this.state.email}
                    password={this.state.password}
                />
            </div>   
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)