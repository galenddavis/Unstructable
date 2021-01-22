import React from 'react';
import { Link } from 'react-router-dom';
import UseDropDown from './use_dropdown'



const categ = ['Homeimg', 'Workshop', 'Craft', 'Cooking', 'Living', 'Outside', 'Teachers']

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { loggedIn } = this.props;
        const catLinks = categ.map(cat => {
            return <Link to='/' key={cat}>{cat}</Link>
        })

        const authButtons = loggedIn ? 
        ( <div className='userAuth'>
                <UseDropDown />
                {/* <button onClick={this.handleLogout}>Log Out</button> */}
            </div>) : ( <div>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div> )

        return (
           <div className='constant-elements'>
               <div className='header'>
                <h1>unstructable</h1>
                {/* <img src="WebsiteLogo" alt=""/> */}
                {catLinks} 
                {authButtons}
                <button>Projects</button>
                <Link to='/'>Publish</Link>
                {/* <img src="/app/assets/images/3D-printed-gremlins.jpg" alt=""/> */} {/* Handle input when we hit ccs*/}
                </div>
                <br/>
                <div className='footer'>
                    {/* <img src="WebsiteLogo" alt=""/> */}
                    <label>Categories
                        {catLinks}
                    </label>
                    <br/>
                    <label>About Us
                        <Link to='/'>Who We Are</Link>
                        <Link to='/'>Why Publish?</Link>
                        <Link to='/'>Jobs</Link>
                    </label>
                    <br/>
                    <label>Resources
                        <Link to='/'>Sitemap</Link>
                        <Link to='/'>Help</Link>
                        <Link to='/'>Contact</Link>
                    </label>

                </div>
           </div>
        ) 
    }
}

export default NavBar;