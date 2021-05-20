import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBuild from './project_build';
import ProjectSubmit from './project_submit';
import StepForm from '../Steps/step_form';
import CreateStep from '../Steps/create_step_container'
import EditStep from '../Steps/edit_step_container'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentForm: 1,
            editedStep: 0,
            project: {},
            allSteps:[],
            title_photo: null
        }
        
        this.updateCategory = this.updateCategory.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.otherForm = this.otherForm.bind(this);
        this.editStep = this.editStep.bind(this);
        this.addStep = this.addStep.bind(this);
        this.handleImage = this.handleImage.bind(this);
        // this.publish = this.publish.bind(this);

    }

    componentDidMount() {
        this.setState({ project: this.props.project })
        this.setState({ allSteps: this.props.project.steps })
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.project.steps !== prevProps.project.steps) {
            this.setState({ project: this.props.project })
            this.setState({ allSteps: this.props.project.steps })
        }
    }


    otherForm(event) {
        
        this.props.requestProject(this.props.project.id).then( project => {
            
            this.setState({ project: project.project })
            this.setState({ allSteps: project.project.steps })
        })
        this.setState({currentForm: 1}) 
        
    }

    updateCategory(event) {
        let newState = Object.assign({}, this.state);
        newState.project.category = event.target.value
        this.setState({ newState })

        this.props.updateProject(this.state.project)


    }

    updateTitle(event) {
        let newState = Object.assign({}, this.state);
        newState.project.title = event.target.value
        this.setState({ newState })
        this.props.updateProject(this.state.project)
    }

    addStep() {
        let newStep = {title: `Step ${this.state.allSteps.length} (Click to Edit)`, body: '', project_id: this.props.project.id}
        
        this.props.createStep(newStep).then( step => {
            
            let { allSteps } = this.state;
            let fullSteps = allSteps.push(step.step)
            this.setState({ steps: fullSteps })
        })      
    }

    editStep(stepId) {
        
        for (let i = 0; i < this.state.allSteps.length; i++) {
            if (this.state.allSteps[i].id === stepId) {
                
                this.setState({ editedStep: i})
                break;
            }
        }
        
        this.setState({ currentForm: 2})
    }

    handleImage(event) {
        event.preventDefault();
        this.setState({ title_photo: event.currentTarget.files[0]});

        const formData = new FormData();

        // if (this.state.title_photo) {
            formData.append('project[title_photo]', event.currentTarget.files[0])
        // }
        
        $.ajax({
            url: `/api/users/${this.state.project.creator.id}/projects/${this.state.project.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then(response => {
            console.log(response.message)
        })

    }

    


    render() {
        let formLayout

        if (this.state.currentForm === 1) {
            
            formLayout = <ProjectBuild 
                requestProject={this.props.requestProject}
                newStep={this.props.newStep}
                otherForm={this.otherForm}
                createStep={this.props.createStep}
                editStep={this.editStep}
                addStep={this.addStep}
                deleteStep={this.props.deleteStep}
                
                currentForm={this.state.currentForm}
                project={this.state.project}
                steps={this.state.allSteps} />

        } else if (this.state.currentForm === 2) {
            formLayout = <EditStep 
                updateStep={this.props.updateStep}
                otherForm={this.otherForm}

                currentForm={this.state.currentForm}
                currentStep={this.state.allSteps[this.state.editedStep]}
                project={this.state.project} />
        }
        
        let projectPic = this.state?.project.photoUrl === "https://unstructable-seeds.s3.amazonaws.com/no_photo_attached.png" ?
                <input type="file" 
                    onChange={this.handleImage}
                    id='file-upload' /> :
                <img src={this.state.project.photoUrl} className="form-photo" alt="pic" />
       
        return (
            <section>
                <form className='project-form'>
                    <section className='project-form-head'>
                    {/* <span className='img-upload'>
                        <p>Click to Add Images</p>
                    </span> */}

                    <div className='head-buttons'>

                        {/* <input type="file" 
                            onChange={this.handleImage} /> */}
                        {projectPic}
                        
                        
                        <input 
                            type="text"
                            value={this.state?.project.title}
                            // value={this.props.project.title}
                            onChange={this.updateTitle}/>

                        <span className='middle'>
                        <select className='category'
                            value={this.state?.project.category}
                            onChange={this.updateCategory}>
                                <option value='Circuits'>Circuits</option>
                                <option value='Workshop'>Workshop</option>
                                <option value='Craft'>Craft</option>
                                <option value='Cooking'>Cooking</option>
                        </select>
                        </span>

                        <span className='right'>
                            <button 
                                onClick={() => this.props.publish(this.state.project)} 
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