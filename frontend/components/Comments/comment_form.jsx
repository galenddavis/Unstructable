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
    }

    componentDidMount() {
        this.setState({ writer_id: this.props.writerId})
        this.setState({ project_id: this.props.projectId})
    }

    

    update(field) {
        return event => this.setState({
            [field]: event.target.value
        })
    }

    render() {
        const { projectId, writerId, commentSave } = this.props;

        return (
            <div className='comment-create'>
                <div className='form-border'>
                <form className='comment-form'>
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.update('body')}/>
                    <section className='form-bottom'>
                        <p>Please be positive and constructive.</p>
                        <button onClick={() => commentSave(this.state)} className='comment-btn' >Post</button>
                    </section>
                </form>
                </div>
            </div>
        )
    }

}

export default CommentForm