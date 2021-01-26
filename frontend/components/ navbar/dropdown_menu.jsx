import React from 'react';
import { Link } from 'react-router-dom';



const DropDownMenu = props => (
    <section className='drop-down'>
            <p>Profile</p>
            <p className='logout-button' onClick={() => props.logout()}>Log Out</p>
    </section>
)

export default DropDownMenu;