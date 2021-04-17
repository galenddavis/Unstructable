import React from 'react';
import StepBlurb from '../Steps/step_blurb'
import { Link } from 'react-router-dom';


class ProjectBuild extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state
        
        // this.state = {
        //     currentForm: 1,
        //     project: {
        //         title: '',
        //         body: '', 
        //         category: '',
        //         views: 0,
        //         favorites: 0,
        //         creator_id: this.props.currentUser
        //     },
        //     steps: []
        // }

    }


    render() {
        debugger
        
        let steps = this.props.steps?.map((step, idx) => {
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