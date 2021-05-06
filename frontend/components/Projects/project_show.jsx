import React from 'react';
import { Link } from 'react-router-dom';
import StepIndex from '../Steps/step_index_container'
import StepShow from '../Steps/step_show'
import CommentIndexItem from '../Comments/comment_index_item'
import CommentForm from '../Comments/comment_form'


class ProjectShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
            comments: []
        }

        this.commentSave = this.commentSave.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    componentDidMount() {
        this.props.requestProject(this.props.match.params.id).then((project) => {
            this.setState({ project: project.project })
            this.setState({ comments: project.project.comments })
        }
        )
    }

    commentSave(comment) {
        
        this.props.createComment(comment).then(
            comment => {
                let comments = this.state.comments;
                let newComment = comment.comment.comment;
                
                let newComments = comments.concat(newComment)
                this.setState({ comments: newComments})
            }
        )
    }

    deleteProject(project) {
        debugger
        this.props.deleteProject(project).then( res => {
            debugger
            this.props.history.push('/')
        })
    }

    render() {
        
        if (this.props.project === undefined) return null;
        const { project } = this.props

        let count = 0
        const userProjects = project.creator.otherProjects?.map((other) => {
            
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

        const comments = this.state.comments?.map((comment, idx) => {
            return <CommentIndexItem 
                key={idx}
                comment={comment}
                />
        })

        const creatorButtons = this.props.currentUser === project.creator.id ? 
            <div className='creator-buttons'>
                <button onClick={() => this.deleteProject(this.state.project)} >Delete</button>
                {/* <Link to={`/project/edit/${this.props.project.id}`}>Delete</Link> */}
                <Link to={`/project/edit/${this.props.project.id}`}>Edit</Link>
            </div> :
            null
        debugger
        return (
            <div className='project-show'>
                <div className='project-header'>
                    <h1>{project.title}</h1>
                    <div className='stats'>
                        <p>By {project.creator?.username} in {project.category}</p>
                        <p><i className="fas fa-eye" id='views'></i> {project.views}</p>
                        <p><i className="fas fa-heart" id='favorites'></i> {project.favorites}</p>
                    </div>
                    {creatorButtons}

                    <img src={project.photoUrl} alt="potato"/>
                    <section className='project-plugs'>
                        <p>By {project.creator?.username} </p>
                        <div className='user'>
                            <p>More by the Author: </p>
                            <ul className='other-projects'>{userProjects}</ul>
                        </div>
                    </section>
                </div>

                <div className='project-main-body'>
                    <h3>{project.body}</h3>

                    <section className='steps-list'>
                        {/* <StepIndex /> */}
                        {steps}
                    </section>

                </div>
                <div className='comment-section'>
                    <section className='comments-form'>
                        <CommentForm 
                            projectId={project.id}
                            writerId={this.props.currentUser}
                            commentSave={this.commentSave}
                            />
                    </section>

                    <h1 className='comment-amt'>{this.state.comments.length} Comments</h1>
                    <section className='comment-index'>
                        {comments}
                    </section>
                </div>
            </div>
        )
    }
}

export default ProjectShow