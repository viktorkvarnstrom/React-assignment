import actions from '../actions/actiontypes'

const initialState = {
    authError: null,
    user: {}
}

const authReducer = ( state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN_ERROR:
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed',
            }

        case actions.LOGIN_FATAL_ERROR:
            console.log('login fatal error')
            return {
                ...state,
                authError: 'Login fatal failed'
            }

        case actions.LOGIN_SUCCESS:
            console.log('login success')
            return {
                ...state,
                authError: null,
                user: action.user

            }

        case actions.LOGOUT_ERROR:
            console.log('logout error')
            return {
                ...state,
                authError: 'Logout failed'
            }

        case actions.LOGOUT_SUCCESS:
            console.log('logout success')
            return {
                ...state,
                authError: null
            }

        default:
            return state
    }
}

export default authReducer