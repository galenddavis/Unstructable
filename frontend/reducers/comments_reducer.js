import { RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';

const commentsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]: action.comment});

        case REMOVE_COMMENT:
            delete newState[action.stepId];
            return newState;

        default:
            return oldState;
    }
}

export default commentsReducer;