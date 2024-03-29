import React from 'react';
import { Link } from 'react-router-dom'


class IndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { project, goToProject } = this.props
        return (
            <li className='project' onClick={() => goToProject(project.id)}>
                <div className='thumbnail'>
                    <img src={project.photoUrl} alt=""/>
                </div>
                <p> <Link to={`/project/${project.id}`}>{project.title}</Link> by {project.creator} in {project?.category}</p>
            </li>
        )
    }

}

export default IndexItem