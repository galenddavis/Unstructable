import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DropDownMenu from './dropdown_menu'

const mDTP = dispatch => ({ 
    logout: () => dispatch(logout())  
})  

export default connect(null, mDTP)(DropDownMenu);