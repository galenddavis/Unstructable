 import { connect } from 'react-redux';
import { requestProjects } from '../../actions/project_actions';
import Index from './index';


const mSTP = state => {
    
    debugger
    return {
        projects: Object.values(state.entities.projects)
    }
}

const mDTP = dispatch => ({
    requestProjects: () => dispatch(requestProjects())
})

export default connect(mSTP, mDTP)(Index)