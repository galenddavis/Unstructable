
export const fetchAllSteps = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}/steps`,
        method: 'GET'
    })
}

export const fetchStep = (stepId, projectId) => {
    debugger 
    return $.ajax({
        method: 'GET',
        url: `/api/projects/${projectId}/steps/${stepId}`
    })
}

export const createStep = (step) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `/api/projects/${step.project_id}/steps`,
        data: {step}
    })
}

export const updateStep = (step) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${step.project_id}/steps/${step.id}`,
        data: {step}
    })
)

export const deleteStep = (step) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${step.project_id}/steps/${step.id}`
    })
)