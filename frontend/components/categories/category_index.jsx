import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from '../ navbar/index_item';

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            category: ''
        }
    }

    componentDidMount() {
        debugger
        // this.setState({ category: this.props.category })
        let category = this.props.category
        debugger
        this.props.requestProjects(category).then( projectList => {
            debugger
            this.setState({ projects: projectList.projects })
        })
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.category !== prevProps.category) {
            this.setState({ category: this.props.category })
            debugger
            let category = this.props.category
            this.props.requestProjects(category).then( projectList => {
                debugger
                this.setState({ projects: Object.values(projectList.projects) })
            })
        }
    }

    render() {
        debugger
        let {projects} = this.props;
        if (!projects) return null;

        const projectList = this.state.projects === [] ? null : Object.values(this.state.projects).map((project) => {
            return <IndexItem 
            key={project.id}
            project={project}
            />
        })

        return (
            <div>
                <ul className='project-index'>
                    {projectList}
                </ul>
            </div>
        )
    }
}

export default CategoryIndex;