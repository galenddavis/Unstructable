import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveAllProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
})

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
})

const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
})

const receiveProjectErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
})

export const removeProjectErrors = () => ({
    type: REMOVE_ERRORS
})

export const requestProjects = () => dispatch => {
    debugger
    return ProjectAPIUtil.fetchProjects().then(
        projects => dispatch(receiveAllProjects(projects)),
        errors => dispatch(receiveProjectErrors(errors.responseJSON))
    )
}

export const requestProject = projectId => dispatch => (
    ProjectAPIUtil.fetchProject(projectId).then(
        project => dispatch(receiveProject(project)),
        errors => dispatch(receiveProjectErrors(errors.responseJSON))
    )
)

export const createProject = project => dispatch => {
    debugger
    return ProjectAPIUtil.createProject(project).then(
        project => dispatch(receiveProject(project)),
        errors => dispatch(receiveProjectErrors(errors.responseJSON))
    )
}

export const updateProject = project => dispatch => (
    ProjectAPIUtil.updateProject(project).then(
        project => dispatch(receiveProject(project)),
        errors => dispatch(receiveProjectErrors(errors.responseJSON))
    )
)

export const deleteProject = projectId => dispatch => (
    ProjectAPIUtil.deleteProject(projectId).then(
        () => dispatch(removeProject(projectId)),
        errors => dispatch(receiveProjectErrors(errors.responseJSON))
    )
)