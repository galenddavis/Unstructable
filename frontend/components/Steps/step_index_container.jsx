import { connect } from 'react-redux';
import { requestAllSteps } from '../../actions/step_actions';
import StepIndex from './step_index'

const mSTP = (state, ownProps) => {
    debugger
    return {
        project: state.entities.projects[ownProps.match.params.id],
        steps: Object.values(state.entities.steps)
    }
};

const mDTP = dispatch => ({
    requestAllSteps: (projectId) => dispatch(requestAllSteps(projectId))
});

export default connect(mSTP, mDTP)(StepIndex)