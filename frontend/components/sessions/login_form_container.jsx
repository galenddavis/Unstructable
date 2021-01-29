import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions'
import LoginForm from './login_form';

const mSTP = (state) => {

   return {
       errors: Object.values(state.errors)
   }
}

const mDTP = dispatch => ({
    submitForm: user  => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(LoginForm)