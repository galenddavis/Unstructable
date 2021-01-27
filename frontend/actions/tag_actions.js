import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG'
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
})

const receiveTagErrors = errors => ({
    type: RECEIVE_TAG_ERRORS,
    errors
})

export const removeTagErrors = () => ({
    type: REMOVE_ERRORS
})

export const createTag = tag => dispatch => (
    TagAPIUtil.createTag(tag).then(
        tag => dispatch(receiveTag(tag)),
        errors => dispatch(receiveTagErrors(errors))
    )
)