import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


const Footer = () => (

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
                
            </span>
        </section>

);

export default Footer;