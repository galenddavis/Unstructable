import React from 'react';

class StepBlurb extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { step, index, editStep, updateCurrentStep } = this.props;
        debugger
        return (
            <li className='step-blurb'>
                <span className='img-upload'>
                    <p>Drag Images From Top Bar</p>
                </span>
                <span className='body' onClick={() => updateCurrentStep(index)}>
                    <p>{step.title}</p>
                </span>
                <i className="fas fa-chevron-right"></i>
                {/* <p>{step.body}</p> */}
            </li>
        )
    }
}

export default StepBlurb;