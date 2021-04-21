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
            <div>
                <form>
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.update('body')}/>
                    <button onClick={() => commentSave(this.state)}>Post</button>
                </form>
            </div>
        )
    }

}

export default CommentForm