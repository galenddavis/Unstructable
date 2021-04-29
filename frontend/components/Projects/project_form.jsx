import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBuild from './project_build';
import ProjectSubmit from './project_submit';
import StepForm from '../Steps/step_form';
import CreateStep from '../Steps/create_step_container'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        //     currentForm: 1,
        //     project: {},
        //     steps: []
        // }
        this.state = {
            currentForm: 1,
            steps: [],
            project: {
                title: props.project.title || '',
                body: props.project.body || '', 
                category: props.project.category || '',
                views: props.project.views || 0,
                favorites: props.project.favorites || 0,
                creator_id: this.props.currentUser
            }
        }
        
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.saveStep = this.saveStep.bind(this)
        // this.updateCurrentStep = this.updateCurrentStep.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.otherForm = this.otherForm.bind(this);
        this.addStep = this.addStep.bind(this);
        this.editStep = this.editStep.bind(this)
    }

    componentDidMount() {
        debugger
        this.setState({ project: this.props.project })
        console.log(this.props.project.steps)
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ project: this.props.project })
        }
    }

    otherForm(event) {
        const otherForm = this.state.currentForm === 1 ? 2 : 1
        this.setState({currentForm: otherForm}) 
        
    }

    addStep() {
        const otherForm = this.state.currentForm === 1 ? 2 : 1
        this.setState({currentForm: otherForm})        
    }

    // saveStep(step) {
    //     let { steps } = this.state;
    //     steps.push(step);
    //     this.setState({steps: steps})
    //     this.setState({currentForm: 1})
    // }

    editStep(step) {
        const otherForm = this.state.currentForm === 1 ? 3 : 1
        this.setState({currentForm: otherForm})
    }


    updateCategory(event) {
        console.log(this.state)
        let newState = Object.assign({}, this.state);
        newState.project.category = event.target.value
        this.setState({ newState })
    }

    updateTitle(event) {
        console.log(this.state)
        let newState = Object.assign({}, this.state);
        newState.project.title = event.target.value
        this.setState({ newState })
    }

    render() {
        let formLayout

        if (this.state.currentForm === 1) {
            
            formLayout = <ProjectBuild 
                currentForm={this.state.currentForm}
                requestProject={this.props.requestProject}
                newStep={this.props.newStep}
                // update={this.update}
                otherForm={this.otherForm}
                addStep={this.addStep}
                editStep={this.editStep}
                project={this.state.project} />

        // } else if (this.state.currentForm === 2) {
        //     formLayout = <ProjectSubmit 
        //         currentForm={this.state.currentForm}
        //         handleSubmit={this.handleSubmit}
        //         otherForm={this.otherForm}
        //         project={this.state.project} />

        } else if (this.state.currentForm === 2) {
            formLayout = <CreateStep 
                currentForm={this.state.currentForm}
                createStep={this.props.createStep}
                addStep={this.addStep}
                otherForm={this.otherForm}
                project={this.state.project}
                 />
        } 

        let headerButton = this.state.currentForm === 2 ? 
            <button onClick={this.addStep}>Show All</button> : 
            <button>Add Step</button>

        return (
            <section>
                <form className='project-form'>
                    <section className='project-form-head'>
                    {/* <span className='img-upload'>
                        <p>Click to Add Images</p>
                    </span> */}

                    <div className='head-buttons'>

                        <span className='left'>
                            {headerButton}
                        </span>

                        <input 
                            type="text"
                            value={this.props.project.title}
                            onChange={this.updateTitle}/>

                        <span className='middle'>
                        <select className='category'
                            value={this.props.project.category}
                            onChange={this.updateCategory}>
                                <option value='Circuits'>Circuits</option>
                                <option value='Workshop'>Workshop</option>
                                <option value='Craft'>Craft</option>
                                <option value='Cooking'>Cooking</option>
                        </select>
                        </span>

                        <span className='right'>
                            <button 
                                onClick={this.handleSubmit} 
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