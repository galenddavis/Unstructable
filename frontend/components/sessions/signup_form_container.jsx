import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import SignupForm from './signup_form';

const mSTP = state => {
    return {
        errors: Object.values(state.errors)
    }
}

const mDTP = dispatch => ({
    submitForm: user  => dispatch(signup(user)) 
})

export default connect(mSTP, mDTP)(SignupForm)

