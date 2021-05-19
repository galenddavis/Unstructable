import React from 'react';
import { Link } from 'react-router-dom';

const StepShow = ({ step, number }) => {

    return (
        <div className="step">
            <h1 className='step-title'>{step.title}</h1>
            <h3>{step.body}</h3>
        </div>
    )
}

export default StepShow

