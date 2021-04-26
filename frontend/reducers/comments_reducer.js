import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from '../actions/comment_actions';

const commentsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENT:
            debugger
            return Object.assign({}, state, {[action.comment.comment.id]: action.comment.comment});

        case RECEIVE_ALL_COMMENTS:
            return action.comments

        case REMOVE_COMMENT:
            delete newState[action.stepId];
            return newState;

        default:
            return state;
    }
}

export default commentsReducer;