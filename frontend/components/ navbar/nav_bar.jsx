import React from 'react';
import { Link } from 'react-router-dom';
import UseDropDown from './use_dropdown'
import { login } from '../../actions/session_actions'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.dummyLogin = this.dummyLogin.bind(this)
    }

    dummyLogin(event) {
        event.preventDefault();
        const user = {
            username: 'guest',
            password: 'password',
            occupation: 'robot',
            email: 'sample@email.com',
            location: 'Spain'}
        this.props.login(user);
    }

    render() {
        const { loggedIn } = this.props;

        // const catLinks = categ.map(cat => {
        //     return <Link to='/' key={cat} className='categories'>{cat}</Link>
        // })
        const { logout } = this.props

        const authButtons = loggedIn ? 
        ( <div className='userAuth'>
                <UseDropDown logout={logout} className='drop-down'/>
        </div>) : ( <div className='login-logout'>
            <Link to='/login' className='userAuth'>Log In</Link>
            <Link to='/signup' className='userAuth'>Sign Up</Link>
            <span className='dummy' onClick={this.dummyLogin}>Demo User</span>
        </div> )

        return (
            <div className='constant-elements'>
                <section className="hi-top">
                    <span>
                        
                        <Link to='/'><i className="fas fa-house-damage"></i></Link>
                        <Link to={{
                            pathname: '/Circuits',
                            category: 'Circuits'}}>Circuits</Link>
                        <Link to={{
                            pathname: '/Workshop',
                            category: 'Workshop'}}>Workshop</Link>
                        <Link to={{
                            pathname: '/Crafts',
                            category: 'Crafts'}}>Crafts</Link>
                        <Link to={{
                            pathname: '/Cooking',
                            category: 'Cooking'}}>Cooking</Link>
                    </span> 
                    <span>
                        {authButtons}
                    </span>
                </section>

                <section className='title-bar'>
                    <span className='head-left'>
                        <div className='logo'>
                            <Link to='/'><img src={window.logoURL} alt=""/></Link>
                        </div>
                        <div className='text'>
                            <Link to='/' className='title'>unstructable</Link>
                            <Link to='/' className='projects'>Projects</Link>
                        </div>
                    </span>
                    <span className='head-right'>
                        <Link to="/create" className='right-side'>PUBLISH</Link>
                        <input 
                        type="search" 
                        placeholder="Let's Make..."
                        className='search-bar'
                        />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>

                        
                    </span>
                </section>

                
            </div>
        ) 
    }
}

export default NavBar;