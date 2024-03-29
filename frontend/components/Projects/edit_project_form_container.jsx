import React from 'react';
import { connect } from 'react-redux';
import { 
    requestProject,
    removeProjectErrors, 
    updateProject,  
    deleteProject 
    } from '../../actions/project_actions';
import {
    createStep,
    updateStep,
    deleteStep
} from '../../actions/step_actions'
import ProjectForm from './project_form'


class EditProjectForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            project: {},
            steps: []
        }

        this.publish = this.publish.bind(this)

    }

    componentDidMount() {
        this.props.requestProject(this.props.projectId).then(
            (res) => {
                
                this.setState({ project: res.project })
                this.setState({ steps: res.project.steps })
            } 
        )
    }

    publish(project) {
        this.props.updateProject(project).then(project => {
            
            this.props.history.push(`/project/${project.project.id}`)
        })
    }

    render() {
        
        const { project } = this.state
        const {
            requestProject,
            updateProject,
            deleteProject, 
            createStep, 
            updateStep,
            deleteStep} = this.props
        
        if (!this.props.project) return null;
        if (!this.state.project) return null;
        
        return (
            <ProjectForm 
                project={project}
                requestProject={requestProject}
                updateProject={updateProject}
                deleteProject={deleteProject}
                createStep={createStep}
                updateStep={updateStep}
                deleteStep={deleteStep}
                publish={this.publish} />
        )
    }
}

const mSTP = (state, ownProps) => {
    
    let project = state.entities.projects && Object.values(state.entities.projects).length ? state.entities.projects[ownProps.match.params.id] : null;
    return {
        project: project,
        projectId: ownProps.match.params.id
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

