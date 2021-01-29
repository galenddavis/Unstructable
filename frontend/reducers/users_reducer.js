import { RECEIVE_CURRENT_USER } from '../actions/session_actions'



const usersReducer = (state = {}, action) => {
    // #debugger
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        default:
            // #debugger
            return state;
    }
}

export default usersReducer;