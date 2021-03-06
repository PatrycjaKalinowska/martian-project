import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return <header className="header">
            <div className="logo">
                <Link className='logo-link' to='/'>Logo-Martian-Project</Link>
            </div>
            <ul className="menu">
            <li className="menu-item">
                <Link className="menu-item-link" to="/weather">weather</Link>
            </li>
            <li className="menu-item">
                <Link className="menu-item-link"to="/gallery">gallery</Link>
            </li>
            <li className="menu-item">
                <Link className="menu-item-link"to="/contact">contact</Link>
            </li>
            </ul>
        </header>
}

export default Header;