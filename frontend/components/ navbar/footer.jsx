import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


const Footer = () => (

            <section className='footer'>
                <span className='line-break'>

                    <img src={window.logoURL} alt=""/>
                    <div className='categories'>
                        <label className='col-names'>Categories</label>
                            <Link to='/'><i className="fas fa-microchip"></i> Circuits</Link>
                            <Link to='/'><i className="fas fa-wrench"></i> Workshop</Link>
                            <Link to='/'><i className="fas fa-cut"></i> Craft</Link>
                            <Link to='/'><i className="fas fa-blender"></i> Cooking</Link>
                    </div>
                
                    {/* <div className='info'>
                        <label className='col-names'>About Us</label>
                        <Link to='/'>Who Am I?</Link>
                        <Link to='/'>Why I Code</Link>
                        <Link to='/'>Jobs</Link>
                    </div> */}
                    
                    <div className='resources'>
                        <label className='col-names'>Resources</label>
                        <a href="https://www.linkedin.com/in/galenddavis/" 
                            target='_blank' 
                            rel='noreferrer'>
                                <i className="fab fa-linkedin"></i> LinkedIn</a>

                        <a href="https://angel.co/u/galen-davis-1" 
                            target='_blank' 
                            rel='noreferrer'>
                                <i className="fab fa-angellist"></i> AngelList</a>

                        <a href="https://github.com/galenddavis" 
                            target='_blank' 
                            rel='noreferrer'>
                                <i className="fab fa-github"></i> Github</a>
                    </div>
                
            </span>
        </section>

);

export default Footer;