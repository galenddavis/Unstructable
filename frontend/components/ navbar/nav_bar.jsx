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
                   <section className="hi-top">
                        <span>
                        <Link to='/'><img src={window.home} alt=""/></Link>
                        {/* <img src={window.home} alt=""/> */}
                            {catLinks}
                        </span> 
                        <span>
                            {authButtons}
                        </span>
                   </section>
                        <section className='title-bar'>
                            <span>
                                <Link to='/' className='logo'><img src={window.logoURL} alt=""/></Link>
                                <Link to='/' className='title'>unstructable</Link>
                                <Link to='/' className='projects'>Projects</Link>
                            </span>
                
                            <span>
                                <Link to='/' className='right-side'>PUBLISH</Link>
                                <input 
                                    type="search" 
                                    placeholder="Let's Make..."
                                    className='search-bar'/>
                                {/* <button>Projects</button> */}
                            </span>
                        </section>

                    <section className='main-image'>
                        <img src={window.feature} alt="" />
                    </section>

                    <div>
                        <h1>This is where the project Index will be</h1>
                    </div>

                <section className='footer'>
                    <img src={window.logoURL} alt=""/>
                    <span className='foot-1'>
                        <label className='col-names'>Categories
                            {catLinks}
                        </label>
                    </span>
                    
                    <div className="about">
                        <span className='foot-1'>
                            <label className='col-names'>About Us
                                <Link to='/'>Who We Are</Link>
                                <Link to='/'>Why Publish?</Link>
                                <Link to='/'>Jobs</Link>
                            </label>
                        </span>
                        
                        <span className='foot-1'>
                            <label className='col-names'>Resources
                                <Link to='/'>Sitemap</Link>
                                <Link to='/'>Help</Link>
                                <Link to='/'>Contact</Link>
                            </label>
                        </span>
                    </div>

                </section>
           </div>
        ) 
    }
}

export default NavBar;