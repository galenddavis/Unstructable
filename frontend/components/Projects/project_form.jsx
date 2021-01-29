import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBuild from './project_build';
import ProjectSubmit from './project_submit';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentForm: 1,
            title: '',
            body: '', 
            category: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.otherForm = this.otherForm.bind(this);
        // this.nextForm = this.nextForm.bind(this);
        // this.prevForm = this.prevForm.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const project = this.state
        this.props.createProject(project).then(this.props.history.push('/'))
    }

    otherForm(event) {
        const otherForm = this.state.currentForm === 1 ? 2 : 1
        this.setState({currentForm: otherForm}) 
    }


    update(field) {
        #
        return event => this.setState({ 
            [field]: event.target.value
        })
    }


    render() {

        const formLayout = this.state.currentForm === 1 ? (
            <ProjectBuild 
                currentForm={this.state.currentForm}
                update={this.update}
                body={this.state.body}
                otherForm={this.otherForm} /> ) : (
            <ProjectSubmit 
                currentForm={this.state.currentForm}
                handleSubmit={this.handleSubmit}
                update={this.update}
                body={this.state.body}
                title={this.state.title}
                category={this.state.category}
                otherForm={this.otherForm} />)

        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    {formLayout}
                </form>
            </section>
        )
    }

}

export default ProjectForm;