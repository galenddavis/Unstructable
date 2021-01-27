import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';
import { RECEIVE_STEP_ERRORS } from '../actions/step_actions';
import { RECEIVE_TAG_ERRORS } from '../actions/tag_actions'

// I dont think I need to RECEIVE_CURRENT_USER because returning the 
// default state is going to do the same thing.  


const errorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, action.errors)
        case RECEIVE_PROJECT_ERRORS:
            return Object.assign({}, action.errors)
        case RECEIVE_STEP_ERRORS:
            return Object.assign({}, action.errors)
        case RECEIVE_TAG_ERRORS:
            return Object.assign({}, action.errors)
        case RECEIVE_CURRENT_USER:
            return []; 
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
}

export default errorsReducer;