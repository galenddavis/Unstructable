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

        if (this.props.project === undefined) return null;
        debugger
        return (
            <div>
                <div className='project-header'>
                    <h1>{this.props.project.title}</h1>
                    <img src={this.props.project.photoUrl} alt=""/>
                </div>
            </div>
        )
    }
}

export default ProjectShow