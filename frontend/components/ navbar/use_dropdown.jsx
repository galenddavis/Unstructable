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

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleClick(event) {
        debugger
        const newState = !this.state.show
        this.setState({show: newState})
    }

    render() {
        const { logout } = this.props
        debugger
        return (
            <div>
                <button 
                    onFocus={this.handleClick} 
                    onBlur={this.handleClick}>
                    DropDown { this.state.show ? <DropDownMenu /> : null}
                </button>
            
            </div>
        )
    }
}

export default UseDropDown;