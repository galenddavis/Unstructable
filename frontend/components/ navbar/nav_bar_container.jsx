import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import NavBar from './nav_bar'

const mSTP = state => ({
    loggedIn:  Boolean(state.session.id)
})

const mDTP = dispatch => ({ 
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
})  

export default connect(mSTP, mDTP)(NavBar)

