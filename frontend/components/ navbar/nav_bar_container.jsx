import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar'

const mSTP = state => ({
    loggedIn:  Boolean(state.session.id)
})

const mDTP = dispatch => ({ 
    logout: () => dispatch(logout())  
})  

export default connect(mSTP, mDTP)(NavBar)

