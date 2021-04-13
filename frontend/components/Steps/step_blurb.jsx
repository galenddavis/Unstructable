import React from 'react';

class StepBlurb extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { step } = this.props;
        return (
            <div className='step-blurb'>
                <p>{step.title}</p>
                <p>{step.body}</p>
            </div>
        )
    }
}

export default StepBlurb;