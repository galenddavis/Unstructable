import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBuild from './project_build';
import ProjectSubmit from './project_submit';
import StepForm from '../Steps/step_form';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentForm: 1,
            project: {},
            steps: [{id: 0, title: "Intro + Supplies (Click to Edit)", body: "", project_id: ""}]
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.otherForm = this.otherForm.bind(this);
        this.addStep = this.addStep.bind(this);
        this.saveStep = this.saveStep.bind(this)
        this.editStep = this.editStep.bind(this)
        this.updateCurrentStep = this.updateCurrentStep.bind(this)
    }

    componentDidMount() {
        this.setState({ project: this.props.project })
        let { steps } = this.state;
        debugger
        let fullSteps = steps.concat(this.props.project.steps)
        this.setState({ steps: fullSteps })
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

    addStep() {
        const otherForm = this.state.currentForm === 1 ? 3 : 1
        this.setState({currentForm: otherForm})
        debugger
    }

    saveStep(step) {
        let { steps } = this.state;
        debugger
        steps.push(step);
        this.setState({steps: steps})
        this.setState({currentForm: 1})
    }

    editStep(step) {
        const otherForm = this.state.currentForm === 1 ? 3 : 1
        this.setState({currentForm: otherForm})
    }

    updateCurrentStep(index) {
        this.setState({currentStep: index})
        this.editStep(index)
    }


    update(field) {
        return event => this.setState({ 
            [field]: event.target.value
        })
    }

    render() {
        debugger
        // let formLayout = <ProjectBuild 
        //     currentForm={this.state.currentForm}
        //     update={this.update}
        //     otherForm={this.otherForm}
        //     project={this.state.project}
        //     steps={this.state.steps} />
        let formLayout

        if (this.state.currentForm === 1) {
            debugger
            formLayout = <ProjectBuild 
                currentForm={this.state.currentForm}
                // update={this.update}
                otherForm={this.otherForm}
                addStep={this.addStep}
                editStep={this.editStep}
                updateCurrentStep={this.updateCurrentStep}
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
                saveStep={this.saveStep}
                otherForm={this.otherForm}
                state={this.state}
                project={this.state.project}
                steps={this.state.steps} />
        } 

        let headerButton = this.state.currentForm === 3 || 4 ? 
            <button onClick={this.addStep}>Show All</button> : 
            <button>Add Step</button>

        return (
            <section>
                <form>
                    <section className='project-form-head'>
                    {/* <span className='img-upload'>
                        <p>Click to Add Images</p>
                    </span> */}
                    <div className='head-buttons'>
                        <span className='left'>

                            {headerButton}
                            <button>More</button>
                        </span>
                        <span className='right'>
                            {/* <button>Save</button>  */}
                            <button 
                                onClick={this.state.currentForm === 1 ? this.otherForm : this.handleSubmit} 
                                className='publish'>{this.props.project?.title}
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