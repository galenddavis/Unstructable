import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import LoginForm from './login_form';

const mSTP = (state) => {
    debugger
   return {
       errors: Object.values(state.errors)
   }
}

const mDTP = dispatch => ({
    submitForm: user  => dispatch(login(user)) 
})

export default connect(mSTP, mDTP)(LoginForm)