import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS'
export const RECEIVE_STEP = 'RECEIVE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'
export const RECEIVE_STEP_ERRORS = 'RECEIVE_STEP_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveAllSteps = (steps) => ({
    type: RECEIVE_ALL_STEPS,
    steps
});

const receiveStep = step => ({
    type: RECEIVE_STEP,
    step
})

const removeStep = stepId => ({
    type: REMOVE_STEP,
    stepId
})

const receiveStepErrors = errors => ({
    type: RECEIVE_STEP_ERRORS,
    errors
})

export const removeStepErrors = () => ({
    type: REMOVE_ERRORS
})

export const requestAllSteps = projectId => dispatch (
    StepAPIUtil.fetchAllSteps(projectId).then(
        steps => dispatch(receiveAllSteps(steps)),
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const requestStep = stepId => dispatch => (
    StepAPIUtil.fetchStep(stepId).then(
        step => dispatch(receiveStep(step)),
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const createStep = (step, projectId) => dispatch => (
    StepAPIUtil.createStep(step, projectId).then(
        step => dispatch(receiveStep(step)), //should be receiveAll Steps to send back to the form? 
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const updateStep = (step, projectId) => dispatch => (
    StepAPIUtil.updateStep(step, projectId).then(
        step => dispatch(receiveStep(step)),
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const deleteStep = (stepId, projectId) => dispatch => (
    StepAPIUtil.deleteStep(stepId, projectId).then(
        () => dispatch(removeStep(stepId)),
        errors => dispatch(receiveStepErrors(errors))
    )
)
