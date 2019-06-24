import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

class Profile extends Component {
    state = {}

    render() {
        if (sessionStorage.getItem('token') === null) { return <Redirect to="/login" /> }
        return (
            <div>
                <div className="container mt-5">
                    <div>
                        <div className="row profilecard" style={{ marginLeft: '20px' }}>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="panel panel-default plain profile-panel">
                                    <div className="panel-body">
                                        <div className="col-lg-8 col-md-8 col-sm-12">
                                            <div className="user-name">
                                                <span className="label label-success"><strong>Welcome - </strong>{this.props.user.firstname} {this.props.user.lastname}</span>
                                            </div>
                                            <div className="user-information">
                                                <p>Creating awesome snippet for bootdey, bootdey is a gellery of free bootstrap snippets</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-footer white-content">
                                        <ul className="profile-info">
                                            <li><strong>Name: - </strong>{this.props.user.firstname} {this.props.user.lastname}</li>
                                            <li><strong>Email: - </strong>{this.props.user.email}</li>
                                            <li><strong>Day of birth: - </strong>{this.props.user.dayofbirth}</li>
                                            <li><strong>Address: - </strong>{this.props.user.addressline}</li>
                                            <li><strong>Zipcode: - </strong>{this.props.user.zipcode}</li>
                                            <li><strong>City: - </strong>{this.props.user.city}</li>
                                            <li><strong>Country: - </strong> {this.props.user.country}</li>

                                            <li><i className="fas fa-briefcase"></i>  - Web developer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profileimg">
                    <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?cs=srgb&dl=code-coding-macro-879109.jpg&fm=jpg" />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)






//{this.props.user.firstname}


























/* import React, { Component } from 'react'
import http from 'axios'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: localStorage.getItem('USER_ID'),
            currentUser: {}
        }
    }

    render() {
        const { currentUser } = this.state
        return (
            <div className="container mt-5">
                <div>
                    <div className="row" style={{ marginLeft: '20px' }}>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-default plain profile-panel">
                                <div className="panel-body">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <div className="user-name">
                                            <span className="label label-success">{currentUser.firstname} {currentUser.lastname}</span>
                                        </div>
                                        <div className="user-information">
                                            <p>Creating awesome snippet for bootdey, bootdey is a gellery of free bootstrap snippets</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer white-content">
                                    <ul className="profile-info">
                                        <li><i className="fas fa-phone"></i>{currentUser.firstname}</li>
                                        <li><i className="fas fa-address-book"></i>{currentUser.lastname}</li>
                                        <li><i className="fas fa-envelope"></i>{currentUser.email}</li>
                                        <li><i className="fas fa-briefcase"></i> Web developer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let getToken = localStorage.getItem('ACCESS_TOKEN')
        http.get('http://localhost:3001/api/users/' + this.state.id, { headers: { 'Authorization': 'Bearer ${getToken}' } } )
        //http.get('http://localhost:3001/api/users/' + this.state.id)
            .then(user => this.setState({ currentUser : user.data }))
            .catch(error => console.log(error))
            let token = localStorage.getItem('ACCESS_TOKEN')
    }


}

export default Profile */







/* import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div>
                    <div className="row" style={{ marginLeft: '20px' }}>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-default plain profile-panel">
                                <div className="panel-body">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <div className="user-name">
                                            <span className="label label-success">Viktor Kvarnström</span>
                                        </div>
                                        <div className="user-information">
                                            <p>Creating awesome snippet for bootdey, bootdey is a gellery of free bootstrap snippets</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer white-content">
                                    <ul className="profile-info">
                                        <li><i className="fas fa-phone"></i>      +46 767154235</li>
                                        <li><i className="fas fa-address-book"></i>  Viktor Kvarnström</li>
                                        <li><i className="fas fa-envelope"></i>    vskvarnstrom@gmail.com</li>
                                        <li><i className="fas fa-briefcase"></i>       Web developer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Profile */