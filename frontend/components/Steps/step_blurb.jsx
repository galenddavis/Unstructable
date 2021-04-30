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
        debugger
        return (
            <li className='step-blurb'>
                <span className='img-upload'>
                    <input type="file"/>
                    <p>Drag Images From Top Bar</p>
                </span>
                <div className='blurb-right'>
                    <span className='body'>
                        <p> <Link to={{ 
                            pathname: `/project/step/edit/${step.id}`,
                            stepId: step.id,
                            projectId: step.project_id,
                            }}>{step?.title}</Link> </p>
                        {/* <p onClick={() => this.editStep(step.id)}>{step?.title}</p> */}
                    </span>
                    <div className='symbols'>
                        <i className="fas fa-chevron-right"></i>
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
                {/* <p>{step.body}</p> */}
            </li>
        )
    }
}

export default StepBlurb;