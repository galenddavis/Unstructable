import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBuild from './project_build';
import ProjectSubmit from './project_submit';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentForm: 1,
            project: {
                title: '',
                body: '', 
                category: '',
                views: 0,
                favorites: 0,
                creator_id: this.props.currentUser
            },
            steps: []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.otherForm = this.otherForm.bind(this);
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
        return event => this.setState({ 
            [field]: event.target.value
        })
    }


    render() {

        const formLayout = this.state.currentForm === 1 ? (
            <ProjectBuild 
                currentForm={this.state.currentForm}
                update={this.update}
                otherForm={this.otherForm}
                project={this.state.project}
                steps={this.state.steps} /> ) : (
            <ProjectSubmit 
                currentForm={this.state.currentForm}
                handleSubmit={this.handleSubmit}
                update={this.update}
                otherForm={this.otherForm}
                project={this.state.project}
                steps={this.state.steps} />)

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