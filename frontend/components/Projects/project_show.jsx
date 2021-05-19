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

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.requestProject(this.props.match.params.id).then((project) => {
    
                this.setState({ project: project.project })
                this.setState({ comments: project.project.comments })
                }
            )
        }
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
        
        this.props.deleteProject(project).then( res => {
            this.props.history.push('/')
        })
    }

    

    render() {
        if (this.props.project === undefined) return null;
        const { project } = this.props

        let count = 0
        debugger
        const userProjectHeader = project.creator.otherProjects?.length > 1 ?
        <p>More by the Author: </p> :
        <p>This Author has no other Projects :(</p>

        const userProjects = project.creator.otherProjects?.length > 1 ?
            project.creator.otherProjects?.map((other) => {
                if (other.id !== project.id && count < 2) {
                    count += 1
        
                    return <li key={other.id}>
                            <Link to={`/project/${other.id}`} >
                                <img src={other.photoUrl} />
                            </Link>
                        </li>
                }
            }) :
            null

        const sortedSteps = project.steps?.sort((a, b) => a.created_at > b.created_at)

        const steps = sortedSteps?.map((step, idx) => {
            debugger
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
                <Link to={`/project/edit/${this.props.project.id}`}>Edit</Link>
            </div> :
            null

        const commentsHeader = this.state.comments.length === 1 ? 
            <h1 className='comment-amt'>{this.state.comments.length} Comment</h1> :
            <h1 className='comment-amt'>{this.state.comments.length} Comments</h1>
        
        return (
            <div className='project-show'>
                <div className='project-header'>
                    <h1>{project.title}</h1>
                    <div className='stats'>
                        <p>By {project.creator?.username} in {project.category}</p>
                        {/* <p><i className="fas fa-eye" id='views'></i> {project.views}</p>
                        <p><i className="fas fa-heart" id='favorites'></i> {project.favorites}</p> */}
                    </div>
                    {creatorButtons}

                    <img src={project.photoUrl} alt="potato"/>
                    <section className='project-plugs'>
                        <p>By {project.creator?.username} </p>
                        <div className='user'>
                            {/* <p>More by the Author: </p> */}
                            {userProjectHeader}
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
                            history={this.props.history}
                            />
                    </section>
                    

                    {/* <h1 className='comment-amt'>{this.state.comments.length} 
                        Comments
                    </h1> */}
                    {commentsHeader}
                    <section className='comment-index'>
                        {comments}
                    </section>
                </div>
            </div>
        )
    }
}

export default ProjectShow