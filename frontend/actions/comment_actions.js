import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    stepId
}) 

export const createComment = comment => dispatch (
    CommentAPIUtil.createComment(comment).then(
        comment => dispatch(recieveComment(comment))
    )
)

export const updateComment = comment => dispatch (
    CommentAPIUtil.updateComment(comment).then(
        comment => dispatch(receiveComment(comment))
    )
)
export const deleteComment = commentId => dispatch (
    CommentAPIUtil.deleteComment(commentId).then(
        () => dispatch(removeComment(comment))
    )
)