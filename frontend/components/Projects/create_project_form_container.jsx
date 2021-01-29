import { connect } from 'react-redux';
import { 
    removeProjectErrors, 
    createProject,  
    deleteProject 
    } from '../../actions/project_actions';
import ProjectForm from './project_form'


const mSTP = (state) => {
    #
    return {
        event: {
           title: '',
           body: '',
           category: '' 
        },
        errors: Object.values(state.errors),
        formType: 'Create',
    }
}

const mDTP = dispatch => ({
    removeErrors: () => dispatch(removeProjectErrors()),
    createProject: (project) => dispatch(createProject(project)),
    deleteProject: () => dispatch(deleteProject(projectId)),
})

export default connect(mSTP, mDTP)(ProjectForm)

