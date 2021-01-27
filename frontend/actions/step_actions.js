import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_STEP = 'RECEIVE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'
export const RECEIVE_STEP_ERRORS = 'RECEIVE_STEP_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

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

export const requestStep = stepId => dispatch => (
    StepAPIUtil.fetchStep(stepId).then(
        step => dispatch(receiveStep(step)),
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const createStep = step => dispatch => (
    StepAPIUtil.createStep(step).then(
        step => dispatch(receiveStep(step)),
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const updateStep = step => dispatch => (
    StepAPIUtil.updateStep(step).then(
        step => dispatch(receiveStep(step)),
        errors => dispatch(receiveStepErrors(errors))
    )
)

export const deleteStep = stepId => dispatch => (
    StepAPIUtil.deleteStep(stepId).then(
        () => dispatch(removeStep(stepId)),
        errors => dispatch(receiveStepErrors(errors))
    )
)
