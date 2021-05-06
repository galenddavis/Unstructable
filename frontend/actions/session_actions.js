import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})

// .then(paramSuccess, paramFail)

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(
        currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(
        () => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
)