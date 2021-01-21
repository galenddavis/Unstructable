import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

// I dont think I need to RECEIVE_CURRENT_USER because returning the 
// default state is going to do the same thing.  


const errorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, action.errors)
        case RECEIVE_CURRENT_USER:
            return [];    
        default:
            return state;
    }
}

export default errorsReducer;