import React from 'react';
import { connect } from 'react-redux';
import { 
    requestProject,
    removeProjectErrors, 
    updateProject,  
    deleteProject 
    } from '../../actions/project_actions';
import ProjectForm from './project_form'


class EditProjectForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.project
        }
    }

    componentDidMount() {
        debugger
        this.props.requestProject(this.props.match.params.id).then(
            (res) => {
                this.setState({ project: res.project })
            } 
        )
    }

    componentDidUpdate() {
        debugger
        console.log(this.props)
    }

    render() {
        debugger
        const { project } = this.state
        const {
            updateProject,
            deleteProject, 
            createStep, 
            updateStep,
            deleteStep} = this.props
        
        if (!project) return null;
            debugger
        return (
            <ProjectForm 
                project={project}
                updateProject={updateProject}
                deleteProject={deleteProject}
                createStep={createStep}
                updateStep={updateStep}
                deleteStep={deleteStep}/>
        )
    }
}

const mSTP = (state, ownProps) => {
    debugger
    let project = state.entities.projects && Object.values(state.entities.projects).length ? state.entities.projects : null;
    return {
        project: project,
    }
}

const mDTP = dispatch => ({
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    removeErrors: () => dispatch(removeProjectErrors()),
    updateProject: (project) => dispatch(updateProject(project)),
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    createStep: (step) => dispatch(createStep(step)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
})

export default connect(mSTP, mDTP)(EditProjectForm)

