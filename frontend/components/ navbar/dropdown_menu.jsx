import React from 'react';
import { Link } from 'react-router-dom';



const DropDownMenu = props => (
    <ul>

        <li>
            <p>UserProfile</p>
        </li>
        <li>
            <span onClick={() => props.logout()}>Log Out</span>
        </li>
    </ul>
)

export default DropDownMenu;