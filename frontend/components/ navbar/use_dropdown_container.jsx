import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UseDropDown from './dropdown'

const mDTP = dispatch => ({ 
    logout: () => dispatch(logout())  
})  

export default connect(null, mDTP)(UseDropDown)

