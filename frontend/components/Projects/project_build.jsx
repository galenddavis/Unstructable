import React from 'react';
import { Link } from 'react-router-dom';


class ProjectBuild extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentForm: 1,
            title: '',
            body: 'test', 
            category: ''
        }
        
    }

    

    render() {

        return (
            <div className='project-form'>
            <section className='project-form-head'>
                {/* <span className='img-upload'>
                    <p>Click to Add Images</p>
                </span> */}
                <div className='head-buttons'>
                    <span className='left'>
                        <button>Add</button>
                        <button>More</button>
                    </span>
                    <span className='right'>
                        {/* <button>Save</button>  */}
                        <button 
                            onClick={this.props.otherForm} 
                            className='publish'>Publish
                        </button>
                    </span>
                </div>
            </section>
            <ul className='project-form-body'>
                <div className='steps'>
                    <li className='intro'>
                        <span className='img-upload'>
                            <p>Drag Images From Top Bar</p>
                        </span>
                        <span className='body'>
                            <p>Intro + Supplies (click to edit)</p>
                            {/* <input
                                className='intro' 
                                type='text'
                                placeholder='Intro Text'
                                value={this.props.body}
                                onChange={this.props.update('body')}/> */}
                            {/* <p>Intro + Supplies: (click to edit)</p>    */}
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </li>

                    <li className='step'>
                        <span className='img-upload'>
                            <p>Drag Images From Top Bar</p>
                        </span>
                        <span className='body'>
                            <p>Next Step (click to edit)</p>
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </li>
                </div>
            </ul>
        </div>
        )
    }
}

export default ProjectBuild;