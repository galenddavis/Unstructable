import { 
    RECEIVE_ALL_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT
 } from '../actions/project_actions';


const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return Object.assign({}, oldstate, action.projects);
        case RECEIVE_PROJECT: 
            debugger
            newState[action.project.id] = action.project;
            return newState;
        case REMOVE_PROJECT:
            delete[newState[action.projectId]];
            return newState;
        default:
            return oldState;
    }
}

export default projectsReducer;