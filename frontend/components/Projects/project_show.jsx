import React from 'react';
import { Link } from 'react-router-dom';


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
        const userProjects = this.props.project.creator.otherProjects?.map((other) => {
            debugger
            let otherProjects = []
            if (other.id !== this.props.project.id) {
                // otherProjects.push(other.id)
                return <li><img src={other.photoUrl} alt=""/></li>
            }
            // return otherProjects
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
                </div>
            </div>
        )
    }
}

export default ProjectShow