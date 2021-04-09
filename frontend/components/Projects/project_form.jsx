import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBuild from './project_build';
import ProjectSubmit from './project_submit';
import StepForm from '../Steps/step_form'

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
        this.editStep = this.editStep.bind(this);
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

    editStep(event) {
        const otherForm = this.state.currentForm === 1 ? 3 : 1
        this.setState({currentForm: otherForm})
        debugger
    }


    update(field) {
        return event => this.setState({ 
            [field]: event.target.value
        })
    }


    render() {
        let formLayout = <ProjectBuild 
            currentForm={this.state.currentForm}
            update={this.update}
            otherForm={this.otherForm}
            project={this.state.project}
            steps={this.state.steps} />

        if (this.state.currentForm === 1) {
            formLayout = <ProjectBuild 
                currentForm={this.state.currentForm}
                // update={this.update}
                otherForm={this.otherForm}
                editStep={this.editStep}
                state={this.state}
                project={this.state.project}
                steps={this.state.steps} />

        } else if (this.state.currentForm === 2) {
            formLayout = <ProjectSubmit 
                currentForm={this.state.currentForm}
                handleSubmit={this.handleSubmit}
                update={this.update}
                otherForm={this.otherForm}
                project={this.state.project}
                steps={this.state.steps} />

        } else if (this.state.currentForm === 3) {
            formLayout = <StepForm 
                currentForm={this.state.currentForm}
                update={this.update}
                otherForm={this.otherForm}
                state={this.state}
                project={this.state.project}
                steps={this.state.steps}/>
        }

        // const formLayout = this.state.currentForm === 1 ? (
        //     <ProjectBuild 
        //         currentForm={this.state.currentForm}
        //         update={this.update}
        //         otherForm={this.otherForm}
        //         project={this.state.project}
        //         steps={this.state.steps} /> ) : (
        //     <ProjectSubmit 
        //         currentForm={this.state.currentForm}
        //         handleSubmit={this.handleSubmit}
        //         update={this.update}
        //         otherForm={this.otherForm}
        //         project={this.state.project}
        //         steps={this.state.steps} />)

        return (
            <section>
                <form>
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
                                onClick={this.state.currentForm === 1 ? this.otherForm : this.handleSubmit} 
                                className='publish'>Publish
                            </button>
                        </span>
                    </div>
                </section>
                    {formLayout}
                </form>
            </section>
        )
    }

}

export default ProjectForm;