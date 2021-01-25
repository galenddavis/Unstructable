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
                <UseDropDown logout={logout} className='userAuth'/>
            </div>) : ( <div className='login-logout'>
                            <Link to='/login' className='userAuth'>Log In</Link>
                            <Link to='/signup' className='userAuth'>Sign Up</Link>
                            <span className='dummy' onClick={this.dummyLogin}>Demo User</span>
                        </div> )

        return (
           <div className='constant-elements'>
                   <section className="hi-top">
                        <span>
                            <i className="fas fa-house-damage"></i>
                            <Link to='/'></Link>
                            <Link to='/'>Circuits</Link>
                            <Link to='/'>Workshop</Link>
                            <Link to='/'>Craft</Link>
                            <Link to='/'>Cooking</Link>
                            <Link to='/'>Living</Link>
                            <Link to='/'>Outside</Link>
                            <Link to='/'>Teachers</Link>
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
                                <Link to='/' className='right-side'>PUBLISH</Link>
                                <input 
                                type="search" 
                                placeholder="Let's Make..."
                                className='search-bar'
                                />
                                <button>
                                    <i className="fas fa-search"></i>
                                </button>

                                {/* <button>Projects</button> */}
                            </span>
                        </section>

                            <span className='main-image'>
                                <img src={window.feature} alt="" />
                            </span>

                    <div className='future-index'>
                        <h1>This is where the project Index will be</h1>
                    </div>

    {/* FOOTER */}

                <section className='footer'>
                <span className='line-break'>
                    <img src={window.logoURL} alt=""/>
                    
                    <span className='foot-left'>
                            <label className='col-names'>Categories</label>
                        
                                <Link to='/'><i className="fas fa-microchip"></i> Circuits</Link>
                                <Link to='/'><i className="fas fa-wrench"></i> Workshop</Link>
                                <Link to='/'><i className="fas fa-cut"></i> Craft</Link>
                                <Link to='/'><i className="fas fa-blender"></i> Cooking</Link>
                                <Link to='/'><i className="fas fa-house-damage"></i> Living</Link>
                                <Link to='/'><i className="fas fa-bicycle"></i> Outside</Link>
                                <Link to='/'><i className="fas fa-journal-whills"></i> Teachers</Link>
                            
                        
                    </span>
                    
                    
                        {/* <span className="about"> */}
                            <div className='info'>
                                <label className='col-names'>About Us</label>
                                    <Link to='/'>Who Am I?</Link>
                                    <Link to='/'>Why I Code</Link>
                                    <Link to='/'>Jobs</Link>
                            </div>
                            
                            <div className='resources'>
                                <label className='col-names'>Resources</label>
                                    <Link to='/'><i className="fab fa-instagram"></i> Instagram</Link>
                                    <Link to='/'><i className="fab fa-linkedin"></i> LinkedIn</Link>
                                    <Link to='/'><i className="fas fa-envelope"></i> Email</Link>
                                
                            </div>
                        {/* </span> */}
                  
                </span>
                </section>
           </div>
        ) 
    }
}

export default NavBar;