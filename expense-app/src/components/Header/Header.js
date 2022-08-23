import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/list-users">List Users</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/add-user">Add User</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
