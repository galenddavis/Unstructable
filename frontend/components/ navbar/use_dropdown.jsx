import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenu from './dropdown_menu'

class UseDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // handleLogout(e) {
    //     e.preventDefault();
    //     this.props.logout();
    // }

    handleClick(event) {
        debugger
        const newState = !this.state.show
        this.setState({show: newState})
    }

    render() {
        const { logout } = this.props;
        debugger
        return (
            <div onFocus={this.handleClick} 
                onBlur={this.handleClick}>
                
                <button className='drop-down-button'>
                    <i className="fas fa-user-circle"></i> { this.state.show ? <DropDownMenu logout={logout}/> : null}
                </button>
            
            </div>
        )
    }
}

export default UseDropDown;