import React, { Component } from 'react'

class LoginForm extends Component {

    render() {
        return(
            <form onSubmit={ this.props.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="email">E-postadress</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ange e-postadress" value={this.props.email} onChange={this.props.handleChange} />
                    <small id="emailHelp" className="form-text text-muted">Vi kommer aldrig dela med oss av dina uppgifter.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Lösenord</label>
                    <input type="password" className="form-control" id="password" placeholder="Lösenord" value={this.props.password} onChange={this.props.handleChange}  />
                </div>
                <button type="submit" className="btn btn-primary">Logga in</button>
            </form>  
        )
    }
}

export default LoginForm