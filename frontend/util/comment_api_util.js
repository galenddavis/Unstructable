
export const createComment = (comment, projectId) => (
    $.ajax({
        method: 'POST',
        url: `/api/project/${projectId}/comments`,
        data: { comment }
    })
)

export const updateComment = (comment, projectId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/project/${projectId}/comments/${comment.id}`,
        data: { comment }
    })
)

export const deleteComment = (comment, projectId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/project/${projectId}/comments/${comment.id}`
    })
)