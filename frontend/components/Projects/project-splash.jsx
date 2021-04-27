import React from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './create_project_modal';


class ProjectSplash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                title: '', 
                category: '',
                views: 0,
                favorites: 0,
                creator_id: this.props.currentUser
            }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    update(field) {
        debugger
        return event => this.setState({ 
            [field]: event.target.value
        })
    }

    handleSubmit(event) {
        // event.preventDefault();
        const project = this.state;
        debugger
        this.props.createProject(project).then (project => {
            debugger
            this.props.history.push(`project/edit/${project.id}`)
        })
        this.openModal()
        // .then(
        //     this.props.history.push(`project/edit/${project.id}`)
        // )
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (this.props.project !== prevProps.project) {
    //         debugger
    //         const {project} = this.props 
    //         this.props.history.push(`project/edit/${project.id}`)
    //     }
    // }

    openModal() {
        this.setState({ title: '' })
        document.querySelector('.modal-background').classList.toggle('title-modal-background-active')
        document.querySelector('.project-modal').classList.toggle('title-modal-active')
        
    }

    render() {
        debugger
        return (

            <div>
                <section className='image-header'>
                    <h2>START ANOTHER PROJECT</h2>
                    
                    <p>Unstructable is a platform for you to share any and every project
                        that you've lost interest in. Whether youstarted trying to learn 
                        to knit, or maybe you have a bread recipie that you made once, 
                        this is the community to share it in.  
                    </p>
                    {/* <Link to='/project/new'>New Unstructable</Link> */}
                    <button onClick={() => this.openModal()}>New Unstructable</button>
                </section>

                <section>
                    <h2>WHY PUBLISH AN UNSTRUCTABLE?</h2>
                    <img src={window.banner} alt=""/>
                    <span>
                        <h3>Everyone has something to share</h3>
                        <p>You have a project inside you, just waiting to 
                            get out. Maybe you have a plan, maybe you don't.
                            Even the most half-baked ideas are worth sharing. 
                        </p>
                    </span>
                </section>
                <ProjectModal 
                    handleSubmit={this.handleSubmit}
                    update={this.update}
                    title={this.state.title}
                    openModal={this.openModal}
                    />
            </div>
        )
    }
}

export default ProjectSplash;