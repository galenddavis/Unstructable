import React from 'react';
import { Link } from 'react-router-dom';
import UseDropDown from './use_dropdown'
import { login } from '../../actions/session_actions'




const categ = ['Workshop', 'Craft', 'Cooking', 'Living', 'Outside', 'Teachers']

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

        const catLinks = categ.map(cat => {
            return <Link to='/' key={cat} className='categories'>{cat}</Link>
        })
        const { logout } = this.props

        const authButtons = loggedIn ? 
        ( <div className='userAuth'>
                <UseDropDown logout={logout} className='userAuth'/>
            </div>) : ( <div className='login-logout'>
                <Link to='/login' className='userAuth'>Log In</Link>
                <Link to='/signup' className='userAuth'>Sign Up</Link>
                <span onClick={this.dummyLogin}>Demo User</span>
            </div> )

        return (
           <div className='constant-elements'>
                   <div className="hi-top">
                       <img src={window.home} alt=""/>
                        {catLinks} 
                        {authButtons}
                   </div>
                        <div className='title-bar'>
                                <Link to='/' className='logo'><img src={window.logoURL} alt=""/></Link>
                                <Link to='/' className='title'>unstructable</Link>
                                <Link to='/' className='projects'>Projects</Link>
                                <input 
                                    type="search" 
                                    placeholder="Let's Make..."
                                    className='search-bar'/>
                                {/* <button>Projects</button> */}
                                <Link to='/' className='right-side'>PUBLISH</Link>
                        </div>
               
                {/* <img src="/app/assets/images/3D-printed-gremlins.jpg" alt=""/> */} {/* Handle input when we hit ccs*/}
                
                <div className='footer'>
                    <img src={window.logoURL} alt=""/>
                    <div className='foot-1'>
                        <label className='col-names'>Categories
                            {catLinks}
                        </label>
                    </div>
                    
                    <div className='foot-1'>
                        <label className='col-names'>About Us
                            <Link to='/'>Who We Are</Link>
                            <Link to='/'>Why Publish?</Link>
                            <Link to='/'>Jobs</Link>
                        </label>
                    </div>
                    
                    <div className='foot-1'>
                        <label className='col-names'>Resources
                            <Link to='/'>Sitemap</Link>
                            <Link to='/'>Help</Link>
                            <Link to='/'>Contact</Link>
                        </label>
                    </div>

                </div>
           </div>
        ) 
    }
}

export default NavBar;