import React from 'react';
import { render } from 'react-dom';

class ProjectModal extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
    
    const { handleSubmit, update, title, openModal } = this.props
        return (
            <div className='modal-background' onClick={() => openModal()}>
                <div className='project-modal' onClick={e => e.stopPropagation()}>
                    <h1>WHAT DO YOU WANT TO SHARE?</h1>
                    <p>I started a project called:</p>
                    <input 
                        type='text'
                        value={title} 
                        onChange={update('title')}/>
                    <button onClick={() => handleSubmit()}>Start Instructable</button>
                </div>
            </div>
        )
    }
}

export default ProjectModal