import { RECEIVE_STEP, RECEIVE_ALL_STEPS, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_STEP:
            debugger
            return Object.assign({}, newState, {[action.step.id]: action.step});

        case RECEIVE_ALL_STEPS:
            debugger
            return action.steps

        case REMOVE_STEP:
            delete newState[action.stepId];
            return newState;

        default:
            return oldState;
    }
}

export default stepsReducer;