import { RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_STEP:
            return Object.assign({}, state, {[action.step.id]: action.step});
        case REMOVE_STEP:
            delete newState[action.stepId];
            return newState;
        default:
            return oldState;
    }
}

export default stepsReducer;