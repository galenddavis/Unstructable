import React from 'react';


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
                <p>{project.title} by {project.creator?.username} in {project.category}</p>
            </li>
        )
    }

}

export default IndexItem