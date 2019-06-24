import React, { Component } from 'react'
import http from 'axios'
import { Redirect } from 'react-router-dom'

class Errands extends Component {
    constructor(props) {
        super(props)

        this.state = {
           customers: [] 
        }
    }
    
    componentDidMount() {
        http.get('http://localhost:3001/api/customers/all').then(res => this.setState({ customers: res.data }))
    }


    render() {
        if (sessionStorage.getItem('token') === null) { return <Redirect to="/login" /> }
        const customerList = this.state.customers.map( customer => (
            <tr key={customer._id}>
                <th scope="row">{customer._id}</th>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.address}</td>
            </tr>
        ))

        return (
            <div className="container mt-5">
                <h5><i className="fas fa-list mr-3"></i>Errand list</h5>

                <table className="table table-sm mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Cutomer id</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        { customerList }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Errands








/* import React, { Component } from 'react'
import ErrandForm from '../forms/ErrandForm';

class Errands extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 mb-5">
                <h1 className="mb-4">Errands Form</h1>
                    <ErrandForm />
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default Errands */