import React from 'react';
import { Link } from 'react-router-dom'

class StepBlurb extends React.Component {
    constructor(props) {
        super(props)
        
        // this.editStep = this.editStep.bind(this)
    }

    // editStep(stepId) {
    //     debugger
    //     this.props.history.push(`/project/step/edit/${stepId}`)
    // }

    render() {
        const { step, index } = this.props;
        return (
            <li className='step-blurb' onClick={() => this.props.editStep(step.id)}>
                <span className='img-upload'>
                    <input type="file"/>
                    <p>Drag Images From Top Bar</p>
                </span>
                <div className='blurb-right'>
                    <span className='body'>
                        {/* <p> <Link to={{ 
                            pathname: `/project/step/edit/${step.id}`,
                            stepId: step.id,
                            projectId: step.project_id,
                            }}>{step?.title}</Link> </p> */}
                        <p>{step?.title}</p>
                    </span>
                    <div className='symbols'>
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
                {/* <p>{step.body}</p> */}
            </li>
        )
    }
}

export default StepBlurb;