import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { requestProject, updateProject, deleteProject } from '../../actions/project_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        project: state.entities.projects[ownProps.match.params.id],
        currentUser: state.session.id,
        errors: Object.values(state.errors),
        history: ownProps.history
    }
};

const mDTP = dispatch => {
    return {
        requestProject: projectId => dispatch(requestProject(projectId)),
        updateProject: project => dispatch(updateProject(project)),
        deleteProject: projectId => dispatch(deleteProject(projectId)),
    }
};

export default connect(mSTP, mDTP)(ProjectShow)
