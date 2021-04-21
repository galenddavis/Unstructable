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
            comments: []
        }

        this.commentSave = this.commentSave.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.requestProject(this.props.match.params.id).then((project) => {
            debugger
            this.setState({ comments: project.project.comments })
        }
        )
    }
    
    componentDidUpdate(prevProps) {
        debugger
        // if (prevProps.project === undefined || this.props.project.comments.length > prevProps.project.comments.length) {
        if (this.props.comment.length !== prevProps.comment.length) {
            debugger
            let comments = this.state.comments;
            let newComment = this.props.comment;
            let newComments = comments.concat(newComment)
            debugger
            this.setState({ comments: newComments})
        }
        debugger
    }

    commentSave(comment) {
        debugger
        this.props.createComment(comment).then(
            comment => {
                let comments = this.state.comments;
                let newComments = comments.concat(comment)
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
            debugger
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

                    <section>
                        {comments}
                    </section>
                </div>
            </div>
        )
    }
}

export default ProjectShow