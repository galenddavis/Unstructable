import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {comment} = this.props
        return (
            <div>
                <p>{comment.writer}</p>
                <p>{comment.body}</p>
            </div>
        )
    }
}


export default CommentIndexItem;