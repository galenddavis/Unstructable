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
                    {/* <img src={window.projectImg} alt=""/> */}
                    <img src={project.photoUrl} alt=""/>
                    {/* {project.photoUrl} */}
                </div>
                <p>{project.title} by {project.creator_id} in {project.category}</p>
                {/* <h1>{project.title}</h1>
                <h2>{project.category}</h2>
                <p>{project.creator_id}</p> */}
            </li>
        )
    }

}

export default IndexItem