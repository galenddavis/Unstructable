import React from 'react';
import { Link } from 'react-router-dom'


class IndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { project } = this.props
        return (
            <li className='project'>
                <div className='thumbnail'>
                    <img src={project.photoUrl} alt=""/>
                </div>
                <p> <Link to={`/project/${project.id}`}>{project.title}</Link> by {project.creator?.username} in {project.category}</p>
            </li>
        )
    }

}

export default IndexItem