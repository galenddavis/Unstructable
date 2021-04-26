import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {comment} = this.props
        return (
            <div className='comment-body'>
                <p className='comment-user'>{comment.writer}</p>
                <p className='comment'>{comment.body}</p>
            </div>
        )
    }
}


export default CommentIndexItem;