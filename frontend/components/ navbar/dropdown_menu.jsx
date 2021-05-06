import React from 'react';
import { Link } from 'react-router-dom';



const DropDownMenu = props => (

    <section className='drop-down'>
        <p className='logout-button' onClick={() => props.logout()}>Log Out</p>
        {/* <Link to='/' className='create-project'>New Unstructable</Link> */}
        {/* <p className='create-project'>New Unstructable</p> */}
    </section>
)

export default DropDownMenu;