import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

class Temp extends Component {
    state = {}

    render() {
        if(this.props.token === null) { return <Redirect to="/login" /> }
        return (
            <div>
                {this.props.user.firstname}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Temp)