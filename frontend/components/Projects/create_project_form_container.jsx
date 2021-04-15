import { connect } from 'react-redux';
import { 
    removeProjectErrors, 
    createProject,  
    deleteProject 
    } from '../../actions/project_actions';
import { createStep, updateStep, deleteStep} from '../../actions/step_actions'
// import ProjectForm from './project_form'
import ProjectSplash from './project-splash'


const mSTP = (state) => {
    debugger
    return {
        errors: Object.values(state.errors),
        // formType: 'Create',
        currentUser: state.session.id
    }
}

const mDTP = dispatch => ({
    removeErrors: () => dispatch(removeProjectErrors()),
    createProject: (project) => dispatch(createProject(project)),
    deleteProject: () => dispatch(deleteProject(projectId)),
    createStep: (step) => dispatch(createStep(step)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
})

export default connect(mSTP, mDTP)(ProjectSplash)

