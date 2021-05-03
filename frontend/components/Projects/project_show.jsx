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
    }

    componentDidMount() {
        debugger
        this.props.requestProject(this.props.match.params.id).then((project) => {
            debugger
            this.setState({ project: project.project })
            this.setState({ comments: project.project.comments })
        }
        )
    }
    
    // componentDidUpdate(prevProps) {
    //     
    //     // if (prevProps.project === undefined || this.props.project.comments.length > prevProps.project.comments.length) {
    //     if (this.props.comment.length !== prevProps.comment.length) {
    //         
    //         let comments = this.state.comments;
    //         let newComment = this.props.comment;
    //         let newComments = comments.concat(newComment)
    //         
    //         this.setState({ comments: newComments})
    //     }
    //     
    // }

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

    render() {
        debugger
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

                    <section>
                        {/* <StepIndex /> */}
                        {steps}
                    </section>

                    <section>
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