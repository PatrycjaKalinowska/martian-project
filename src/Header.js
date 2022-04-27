import React from 'react';
import './Header.css';

const Header = () => {

    return <header className="header">
            <div className="logo">Logo-Martian-Project</div>
            <ul className="menu">
            <li className="menu-item">
                <a href="/"> weather </a>
            </li>
            <li className="menu-item">
                <a href="/"> gallery </a>
            </li>
            <li className="menu-item">
                <a href="/"> contact us </a>
            </li>
            </ul>
        </header>
}

export default Header;