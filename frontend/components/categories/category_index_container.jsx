import { connect } from 'react-redux';
import {requestFilteredProjects, requestProjects } from '../../actions/project_actions';
import CategoryIndex from './category_index'

const mSTP = (state, ownProps) => {
    
    return {
        projects: state.entities.projects,
        category: ownProps.match.params.category
    } 
}

const mDTP = dispatch => ({
    requestProjects: (category) => dispatch(requestProjects(category)),
    requestFilteredProjects: category => dispatch(requestFilteredProjects(category)),
})

export default connect(mSTP, mDTP)(CategoryIndex)