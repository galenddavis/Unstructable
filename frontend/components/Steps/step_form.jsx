import React from 'react';
import { Link } from 'react-router-dom';

class StepForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.step.id || '',
            title: this.props.step.title || '',
            body: this.props.step.body || '',
            project_id: this.props.step.project_id || ''
        }

        this.update = this.update.bind(this);
        // this.saveStep = this.saveStep.bind(this)
    }

    componentDidMount() {
        debugger
        this.setState({ 
            step: this.props.step
        })
        debugger
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.step !== prevProps.step) {
            this.setState({
                step: this.props.step
            }) 
        }
    }


    // saveStep(step) {
    //     debugger
    //     this.props.createStep(step).then(step => {
    //         debugger
    //         this.props.addStep()
    //     })
    // }

    update(field) {
        console.log(this.state)
        return event => this.setState({ 
            [field]: event.target.value
        })
    }

    render() {
        debugger

        return (
            <div className='step-form'>
                <span className='step-body'>
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.update('body')}
                        // onChange={e => this.props.update(e.target.value)}
                    />
                    <button onClick={() => this.saveStep(this.state)}>Save Step</button>
                </span>
            </div>
        )
    }
}

export default StepForm

