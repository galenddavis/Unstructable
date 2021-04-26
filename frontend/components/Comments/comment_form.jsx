import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            writer_id: '',
            project_id: '',
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({ writer_id: this.props.writerId})
        this.setState({ project_id: this.props.projectId})
    }

    handleSubmit() {
        this.props.commentSave(this.state)
        this.setState({ body: '' })
    }
    
    update(field) {
        return event => this.setState({
            [field]: event.target.value
        })
    }

    render() {
        const { projectId, writerId, commentSave } = this.props;
        debugger
        return (
            <div className='comment-create'>
                <form className='comment-form'>
               
                    <textarea 
                        value={this.state.body}
                        onChange={this.update('body')}></textarea>
                        
                    <section className='form-bottom'>
                        <p className='be-nice'>Please be positive and constructive.</p>
                        <button onClick={() => this.handleSubmit()} className='comment-btn' >Post</button>
                    </section>
                </form>
            </div>
        )
    }

}

export default CommentForm