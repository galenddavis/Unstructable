import { connect } from 'react-redux';
import { 
    removeProjectErrors, 
    updateProject,  
    deleteProject 
    } from '../../actions/project_actions';
import ProjectForm from './project_form'


class EditProjectForm extends React.Component {

    render() {

        return (
            <ProjectForm />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        event: state.projects[ownProps.match.params.projectId],
        errors: Object.values(state.errors),
        formType: 'edit'
    }
}

const mDTP = dispatch => ({
    removeErrors: () => dispatch(removeProjectErrors()),
    updateProject: (project) => dispatch(updateProject(project)),
    deleteProject: () => dispatch(deleteProject(projectId)),
})

export default connect(mSTP, mDTP)(EditProjectForm)

