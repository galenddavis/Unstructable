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
            steps: []
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
        // this.setState( { steps: this.props.project.steps })
        // this.setState({ steps = this.props.project.steps})
        debugger
        let { steps } = this.state;
        let firstStep = {id: '', title: "Intro + Supplies (Click to Edit)", body: "", project_id: Object.values(this.props.project)[0].id}
        if (this.props.project && this.state.steps.length === 0) {
            this.props.createStep(firstStep).then(firstStep => {
                let fullSteps = steps.push(firstStep)
                this.setState({ steps: fullSteps }) 
            })
           
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ steps: this.props.step })
        }
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
        
    }

    saveStep(step) {
        let { steps } = this.state;
        
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
            
            formLayout = <ProjectBuild 
                currentForm={this.state.currentForm}
                // update={this.update}
                otherForm={this.otherForm}
                addStep={this.addStep}
                editStep={this.editStep}
                updateCurrentStep={this.updateCurrentStep}
                project={this.state.project}
                steps={this.props.steps} />

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