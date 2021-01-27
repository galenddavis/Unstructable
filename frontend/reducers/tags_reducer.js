import { RECEIVE_TAG } from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_TAG:
            newState[action.tag.id] = action.tag;
        default:
            return oldState;    
    }
}


export default tagsReducer;