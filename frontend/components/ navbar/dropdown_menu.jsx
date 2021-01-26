import React from 'react';
import { Link } from 'react-router-dom';



const DropDownMenu = props => (
    <ul className='drop-down'>
        <li>
          <p>UserProfile</p>
        </li>
        <li>
            <span onClick={() => props.logout()}>Log Out</span>
        </li>
    </ul>
)

export default DropDownMenu;