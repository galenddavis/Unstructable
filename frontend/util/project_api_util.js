

export const fetchProjects = () => {
    
    return (
        $.ajax({
            method: 'GET',
            url: '/api/projects'
        })
    )
}

export const fetchProject = (projectId) => {
    
    return (
        $.ajax({
            method: 'GET',
            url: `/api/projects/${projectId}`,
            data: {projectId}
        })
    )
}

export const createProject = (project) => {
    
    return $.ajax({
        method: 'POST',
        url: `/api/users/${project.creator_id}/projects`,
        data: {project}
    })
}

export const updateProject = (project) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${project.creator_id}/projects/${project.id}`,
        data: {project}
    })
)

export const deleteProject = (projectId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/users/${project.creator_id}/projects/${projectId}`
    })
)

