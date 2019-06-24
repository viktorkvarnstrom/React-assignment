import React, { Component } from 'react'
import http from 'axios'
import { Redirect } from 'react-router-dom'

class ErrandForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            address: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e) { this.setState({ [e.target.id] : e.target.value })}
    onSubmit(e) {
        e.preventDefault()

        http.post('http://localhost:3001/api/customers/', this.state)
        .then(() => {
            this.setState({ firstname: '' })
            this.setState({ lastname: '' })
            this.setState({ address: '' })
        })
    }


    render() {
        if (sessionStorage.getItem('token') === null) { return <Redirect to="/login" /> }
        const { firstname, lastname, address} = this.state
        return (
            <div className="container mt-5">
                <h5><i className="fas fa-id-card mr-3"></i> Create errand</h5>

                <form className="my-4" onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Firstname" value={firstname} onChange={this.onChange} />
                        </div>
                        <div className="form-group col-md-6">
                        <label for="lastname">Lastname:</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Lastname" value={lastname} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="address">Address:</label>
                        <input type="text" className="form-control" id="address" placeholder="Address" value={address} onChange={this.onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Skapa Kund</button>
                </form>

            </div>
        )
    }
}

export default ErrandForm









/* import React, { Component } from 'react'
import http from 'axios'
import { withRouter} from 'react-router-dom'

class ErrandForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            addressline: '',
            zipcode: '',
            city: '',
            country: ''
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
        const { firstname, lastname, email, password, addressline, zipcode, city, country, phonenumber } = this.state

        return (
                <form noValidate onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" placeholder="First Name" value={firstname} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" placeholder="Last Name" value={lastname} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="phonenumber">phonenumber</label>
                            <input type="phonenumber" className="form-control" id="phonenumber" placeholder="Phonenumber" value={phonenumber} onChange={this.handleChange} />
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

                    <button type="submit" className="btn btn-secondary">Register errand</button>
                </form>
        )
    }
}

export default withRouter(ErrandForm) */