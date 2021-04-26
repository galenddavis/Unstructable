import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { requestProject, updateProject, deleteProject } from '../../actions/project_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        project: state.entities.projects[ownProps.match.params.id],
        currentUser: state.session.id,
        errors: Object.values(state.errors),
        history: ownProps.history,
        comment: state.entities.comments
    }
};

const mDTP = dispatch => {
    return {
        requestProject: projectId => dispatch(requestProject(projectId)),
        updateProject: project => dispatch(updateProject(project)),
        deleteProject: projectId => dispatch(deleteProject(projectId)),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
        
    }
};

export default connect(mSTP, mDTP)(ProjectShow)
