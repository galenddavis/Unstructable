
export const fetchStep = (stepId) => (
    $.ajax({
        method: 'GET',
        url: `/api/steps/${stepId}`
    })
)

export const createStep = (step) => (
    $.ajax({
        method: 'POST',
        url: '/api/steps',
        data: {step}
    })
)

export const updateStep = (step) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${step.id}`,
        data: {step}
    })
)

export const deleteStep = (stepId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/steps/${stepId}`
    })
)