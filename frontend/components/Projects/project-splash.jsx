import React from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './create_project_modal';


class ProjectSplash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                title: '', 
                category: 'Circuits',
                views: 0,
                favorites: 0,
                creator_id: this.props.currentUser
            }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    update(field) {
        
        return event => this.setState({ 
            [field]: event.target.value
        })
    }

    handleSubmit(event) {
        const project = this.state;
        
        this.props.createProject(project).then (project => {
            let projectId = project.project.id
            
            this.props.history.push(`project/edit/${projectId}`)
        })
        this.openModal()
    }


    openModal() {
        this.setState({ title: '' })
        document.querySelector('.modal-background').classList.toggle('title-modal-background-active')
        document.querySelector('.project-modal').classList.toggle('title-modal-active')
        
    }

    render() {
        
        return (

            <div className='project-splash'>
                <section className='why-publish'>
                    <h2>START SOMETHING YOU'LL NEVER FINISH WITH UNSTRUCTABLE</h2>
                    
                    <p>Unstructable is a platform for you to share any and every project
                        that you've lost interest in.</p>
                    <p>Come up with a plan!</p>
                    <p>Brag about it!</p>
                    <p>Never finish it!</p>
                    <p>Start a new one!</p>
                    <p>Join the world's 2nd largest DIWhy community</p>
                    <button onClick={() => this.openModal()}>New Unstructable</button>
                </section>

                <section>
                    <h2>WHY PUBLISH AN UNSTRUCTABLE?</h2>
                    <img src={window.banner} alt=""/>
                    <h2>EVERYONE HAS SOMETHING TO SHARE</h2>
                       
                    
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