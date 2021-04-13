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

        let steps = this.state.steps?.map(step => {
            return <StepBlurb 
                step={step}/> 
        })
        return (
            <div className='project-form'>
            
            <ul className='project-form-body'>
                <div className='steps'>
                    <li className='intro'>
                        <span className='img-upload'>
                            <p>Drag Images From Top Bar</p>
                        </span>
                        <span className='body'>
                            <p onClick={this.props.editStep}>Intro + Supplies (click to edit)</p>
                            {/* <input
                                className='intro' 
                                type='text'
                                placeholder='Intro Text'
                                value={this.props.body}
                                onChange={this.props.update('body')}/> */}
                            {/* <p>Intro + Supplies: (click to edit)</p>    */}
                            {steps}
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </li>

                    {/* <li className='step'>
                        <span className='img-upload'>
                            <p>Drag Images From Top Bar</p>
                        </span>
                        <span className='body'>
                            <p>Next Step (click to edit)</p>
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </li> */}
                </div>
            </ul>
        </div>
        )
    }
}

export default ProjectBuild;