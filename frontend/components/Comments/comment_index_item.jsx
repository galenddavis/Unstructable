import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {comment} = this.props
        return (
            <div>
                <h1>{comment.body}</h1>
            </div>
        )
    }
}


export default CommentIndexItem;