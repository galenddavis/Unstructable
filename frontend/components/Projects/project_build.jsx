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
        this.setState({ project: this.props.project })
        let { allSteps } = this.state
        let newSteps = allSteps.concat(this.props.project.steps)
        this.setState({ allSteps: newSteps })
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props !== prevProps) {
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
        let steps = this.state.allSteps?.map((step, idx) => {
            debugger
            return <StepBlurb
                key={idx} 
                step={step}
                index={idx}
                editStep={this.props.editStep}
                updateCurrentStep={this.props.updateCurrentStep}/> 
        })
        return (
            <div className='project-form'>
            
            <ul className='project-form-body'>
                <div className='steps'>
                    {steps}
                </div>
                <button className='add-step' onClick={this.props.addStep}>Add Step</button>
            </ul>
        </div>
        )
    }
}

export default ProjectBuild;