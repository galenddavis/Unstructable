import React from 'react';
import StepBlurb from '../Steps/step_blurb'
import { Link } from 'react-router-dom';


class ProjectBuild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
            allSteps: []
        }

        // this.addStep = this.addStep.bind(this)

    }

    componentDidMount() {
        debugger
        this.props.requestProject(this.props.project.id).then(project => {
            debugger
            this.setState({ project: project.project })
            let { allSteps } = this.state
            let newSteps = allSteps.concat(project.project.steps)
            this.setState({ allSteps: newSteps })
        })
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.project !== prevProps.project) {
            this.setState({ project: this.props.project })
            this.setState({ allSteps: this.props.project.steps })
        }
    }

    // addStep() {
    //     let projectId = this.state.project.id
    //     this.props.history.push({
    //         pathname: '/project/step/create',
    //         state: {project: projectId}
    //     })
    // }


    render() {
        debugger
        const sortedSteps = this.state.allSteps.sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at)
        }) 
        let steps = sortedSteps?.map((step, idx) => {
            debugger
            return <StepBlurb
                key={idx} 
                step={step}
                index={idx}
                editStep={this.props.editStep}
                /> 
        })
        return (
            <div >
            
            <ul className='project-form-body'>
                <div className='steps'>
                    {steps}
                </div>
                <button className='add-step' onClick={() => this.props.addStep()}>Add Step</button>
            </ul>
        </div>
        )
    }
}

export default ProjectBuild;