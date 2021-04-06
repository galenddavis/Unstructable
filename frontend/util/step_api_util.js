
export const fetchAllSteps = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}/steps`,
        method: 'GET'
    })
}

export const fetchStep = (stepId) => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/steps/${stepId}`
    })
)

export const createStep = (step, projectId) => (
    $.ajax({
        method: 'POST',
        url: `/api/projects/${projectId}/steps`,
        data: {step}
    })
)

export const updateStep = (step, projectId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${projectId}/steps/${step.id}`,
        data: {step}
    })
)

export const deleteStep = (step, projectId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}/steps/${step.id}`
    })
)