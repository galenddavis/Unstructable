import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import stepsReducer from './steps_reducer';
import commentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    steps: stepsReducer,
    comments: commentsReducer
})

export default entitiesReducer;