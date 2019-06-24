import actions from './actiontypes'
import http from 'axios'

const apiurl = 'http://localhost:3001/api'

export const login = (credentials) => dispatch => {

    fetch(apiurl + '/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(res => {

        if(res.success) {
            dispatch({
                type: actions.LOGIN_SUCCESS,
                user: res.currentUser
            })

            sessionStorage.setItem("token", res.token)
            sessionStorage.setItem("user", JSON.stringify(res.currentUser))

        } else {
            dispatch({
                type: actions.LOGIN_ERROR
            })            
        }
    })
    .catch(() => {
        dispatch({
            type: actions.LOGIN_FATAL_ERROR
        })       
    })
}

export const logout = () => dispatch => {

    dispatch({
        type: actions.LOGOUT_SUCCESS
    })

    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")  

/*     
    http.post(apiurl + '/users/logout', userData, {
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + userData.token
        }
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            dispatch({
                type: actions.LOGOUT_SUCCESS
            })

            sessionStorage.removeItem("token")
            sessionStorage.removeItem("user")

        } else {
            dispatch({
                type: actions.LOGOUT_ERROR
            })            
        }
    })
    .catch(() => {
        dispatch({
            type: actions.LOGOUT_ERROR
        })       
    }) 
*/
}

