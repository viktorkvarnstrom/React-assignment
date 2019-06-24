import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../store/actions/authActions'


class Navigation extends Component {

    logout = e => {
        this.props.logout()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Assignment
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarNav" className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/profile" activeClassName="active" className="nav-link">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/errands" activeClassName="active" className="nav-link">Errands</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/errandform" activeClassName="active" className="nav-link">Errand form</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/login" activeClassName="active" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/register" activeClassName="active" className="nav-link">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={this.logout}><i className="fas fa-sign-out-alt" /></NavLink>
                    </li>
                </ul>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)