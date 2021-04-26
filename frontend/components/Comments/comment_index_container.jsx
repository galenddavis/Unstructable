import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createComment, updateComment, deleteComment} from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex)