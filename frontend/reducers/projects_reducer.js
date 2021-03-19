import { 
    RECEIVE_ALL_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT
 } from '../actions/project_actions';


 const _NULL_STATE = {
     projects: []
 }

const projectsReducer = (state = _NULL_STATE, action) => {
    Object.freeze(state);
    // const newState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            debugger
            return action.projects
            // return Object.assign({}, state, {projects: action.data});
        case RECEIVE_PROJECT: 
            newState[action.project.id] = action.project;
            return newState;
        case REMOVE_PROJECT:
            delete[newState[action.projectId]];
            return newState;
        default:
            return state;
    }
}

export default projectsReducer;