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
        this.goToProject = this.goToProject.bind(this);
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

    goToProject(projectId) {
        this.props.history.push(`/project/${projectId}`)
    }

    render() {
        debugger
        let {projects} = this.props;
        if (!projects) return null;

        const projectList = this.state.projects === [] ? null : Object.values(this.state.projects).map((project) => {
            return <IndexItem 
            key={project.id}
            goToProject={this.goToProject}
            project={project}
            />
        })

        return (
            <div>
                <span className='category-img'>
                    <div className='banner-text'>
                        <h1>YOURS FOR THE MAKING</h1>
                        <p>A place for those who like the idea of creating</p>
                        <p>without getting bogged down in the details</p>
                    </div>
                </span>

                <h1 className='category-header'>Featured Projects <i className="fas fa-chevron-right"></i></h1>
                <ul className='project-index'>
                    {projectList}
                </ul>
            </div>
        )
    }
}

export default CategoryIndex;


