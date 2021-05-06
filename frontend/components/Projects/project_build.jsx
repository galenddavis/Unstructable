import React from 'react';
import StepBlurb from '../Steps/step_blurb'
import { Link } from 'react-router-dom';


class ProjectBuild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
            allSteps: [],
            editedStep: 0
        }

    }


    render() {
        // if (this.props.steps === []) return null
        const sortedSteps = this.props.steps?.sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at)
        }) 
        let steps = sortedSteps?.map((step, idx) => {
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