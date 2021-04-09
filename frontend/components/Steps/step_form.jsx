import React from 'react';
import { Link } from 'react-router-dom';

class StepForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            project_id: ''
        }

        this.update = this.update.bind(this);
    }

    update(field) {
        return event => this.setState({ 
            [field]: event.target.value
        })
    }


    render() {

        return (
            <div>
                <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                />
                <input 
                    type="text"
                    value={this.state.body}
                    onChange={this.update('body')}
                />
            </div>
        )
    }
}

export default StepForm

