import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _NULL_STATE = {
     id: null
};
// Do I need this, or can I just pass and empty state in args

const sessionReducer = (state = _NULL_STATE, action) => {
    // #
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // #
            const newUser = Object.assign({}, state, {id: action.currentUser.id});
            return newUser;
        case LOGOUT_CURRENT_USER:
            return _NULL_STATE; 
        default:
            // #
            return state;
    }
}

export default sessionReducer;