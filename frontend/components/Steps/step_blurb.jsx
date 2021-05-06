import React from 'react';
import { Link } from 'react-router-dom'

class StepBlurb extends React.Component {
    constructor(props) {
        super(props)
   
    }


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
                       
                        <p>{step?.title}</p>
                    </span>
                    <div className='symbols'>
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            </li>
        )
    }
}

export default StepBlurb;