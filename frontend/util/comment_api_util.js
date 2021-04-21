
export const createComment = (comment) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/projects/${comment.project_id}/comments`,
        data: { comment }
    })
}

export const updateComment = (comment) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${comment.project_id}/comments/${comment.id}`,
        data: { comment }
    })
)

export const deleteComment = (comment) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${comment.project_id}/comments/${comment.id}`
    })
)