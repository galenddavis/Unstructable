import React from 'react';
import { Link } from 'react-router-dom';
import StepIndex from '../Steps/step_index_container'
import StepShow from '../Steps/step_show'


class ProjectShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        debugger
        this.props.requestProject(this.props.match.params.id)
    }

    render() {
        debugger
        if (this.props.project === undefined) return null;
        
        const { project } = this.props
        let count = 0
        const userProjects = project.creator.otherProjects?.map((other) => {
            debugger
            if (other.id !== project.id && count < 2) {
                count += 1
                return <li key={other.id}><img src={other.photoUrl} alt=""/></li>
            }
        })

        const steps = project.steps?.map((step, idx) => {
            return <StepShow
                key={step.id} 
                number={idx + 1}
                step={step}
                />
        })
        
        return (
            <div className='project-show'>
                <div className='project-header'>
                    <h1>{project.title}</h1>
                    <div className='stats'>
                        <p>By {project.creator?.username} in {project.category}</p>
                        <p><i className="fas fa-eye" id='views'></i> {project.views}</p>
                        <p><i className="fas fa-heart" id='favorites'></i> {project.favorites}</p>

                    </div>
                    <img src={project.photoUrl} alt="potato"/>
                    <section className='project-plugs'>
                        <p>By {project.creator?.username} </p>
                        <div className='user'>
                            <p>More by the Author: </p>
                            <ul className='other-projects'>{userProjects}</ul>
                        </div>
                    </section>
                    <h3>{project.body}</h3>

                    <section>
                        {/* <StepIndex /> */}
                        {steps}
                    </section>
                </div>
            </div>
        )
    }
}

export default ProjectShow