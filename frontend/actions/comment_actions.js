import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
}) 

export const requestComments = projectId => dispatch => {
    
    return CommentAPIUtil.fetchAllComments(projectId).then(
        comments => dispatch(receiveAllComments(comments))
    )
}

export const createComment = comment => dispatch => {
    
    return CommentAPIUtil.createComment(comment).then(
        comment => dispatch(receiveComment(comment))
    )
}

export const updateComment = comment => dispatch => (
    CommentAPIUtil.updateComment(comment).then(
        comment => dispatch(receiveComment(comment))
    )
)
export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(
        () => dispatch(removeComment(comment))
    )
)