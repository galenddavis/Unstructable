

export const fetchProjects = () => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: '/api/projects'
        })
    )
}

export const fetchProject = (projectId) => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: `/api/projects/${projectId}`,
            data: {projectId}
        })
    )
}

export const createProject = (project) => (
    $.ajax({
        method: 'POST',
        url: '/api/projects',
        data: {project}
    })
)

export const updateProject = (project) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${project.id}`,
        data: {project}
    })
)

export const deleteProject = (projectId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}`
    })
)

