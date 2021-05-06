import React from 'react';
import { Link } from 'react-router-dom';

class StepForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.step?.id || '',
            title: this.props.step?.title || '',
            body: this.props.step?.body || '',
            project_id: this.props.step?.project_id || ''
        }

        this.update = this.update.bind(this);
        this.saveStep = this.saveStep.bind(this)
    }

    saveStep(step) {
        
        this.props.updateStep(step).then(step => {
            
            this.props.otherForm()
        })
    }

    update(field) {
        return event => this.setState({ 
            [field]: event.target.value
        })
    }

    render() {
        

        return (
            <div className='project-form-body'>
                <span className='step-body'>
                    <input
                        className='step-title-input' 
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
            
                    <textarea 
                        className='step-body-input' 
                        value={this.state.body} 
                        onChange={this.update('body')}></textarea>
                    <button className='step-save-btn' onClick={() => this.saveStep(this.state)}>Save Step</button>
                </span>
            </div>
        )
    }
}

export default StepForm

