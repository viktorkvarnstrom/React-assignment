import React, { Component } from 'react'
import http from 'axios'
import { withRouter} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            dayofbirth: '',
            email: '',
            password: '',
            addressline: '',
            zipcode: '',
            city: '',
            country: 'Sweden',
            termsaccept: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    

    handleSubmit = e => {
        e.preventDefault()

        http
            .post('http://localhost:3001/api/users/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/login'))
            .catch(error => console.log(error))

    }

    render() {
        if(sessionStorage.getItem("user") !== null) return <Redirect to='/profile' />
        const { firstname, lastname, dayofbirth, email, password, addressline, zipcode, city, country, termsaccept } = this.state

        return (
                <form noValidate onSubmit={this.handleSubmit} className="mb-5">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" placeholder="First Name" value={firstname} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" placeholder="Last Name" value={lastname} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="dayofbirth">Day of birth</label>
                            <input type="text" className="form-control" id="dayofbirth" placeholder="Day Of Birth" value={dayofbirth} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="addressline">Address</label>
                        <input type="text" className="form-control" id="addressline" placeholder="1234 Main St" value={addressline} onChange={this.handleChange} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label htmlFor="zipcode">Zip</label>
                            <input type="text" className="form-control" id="zipcode" value={zipcode} onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" value={city} onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="country">Country</label>
                            <select id="country" className="form-control" value={country} onChange={this.handleChange}>
                                <option value="Sweden">Sweden</option>
                                <option value="Norway">Norway</option>
                                <option value="Finnland">Finnland</option>
                                <option value="Denmark">Denmark</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="termsaccept" value={termsaccept} onChange={this.handleChange} />
                            <label className="form-check-label" htmlFor="termsaccept">
                                I accept the user terms and agreement.
                        </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-secondary">Sign Up</button>
                </form>
        )
    }
}

export default withRouter(RegistrationForm)