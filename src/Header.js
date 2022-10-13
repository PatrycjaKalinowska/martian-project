import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return <div className="header">
            <a href="/" className="header-logo-link">martian project</a>
        <nav className="header-nav">
            <ul className="header-menu-list">
                <li className="header-menu-list-item"><Link className='header-menu-list-item-link' to="/">Home</Link></li>
                <li className="header-menu-list-item"><Link className='header-menu-list-item-link' to="/news">News</Link></li>
                <li className="header-menu-list-item"><Link className='header-menu-list-item-link' to="/gallery">Gallery</Link></li>
            </ul>
            <div className="header-menu-hamburger">
                <GiHamburgerMenu className="header-menu-hamburger-icon" onClick={() => { setToggleMenu(true) }} />
                {toggleMenu && (<div className="header-menu-hamburger-overlay">
                    <FaTimes className="header-menu-hamburger-overlay-close" onClick={() => { setToggleMenu(false) }} />
                    <ul className="header-menu-hamburger-list">
                        <li className="header-menu-hamburger-item"><Link className="header-menu-hamburger-item-link" to="/">Home</Link></li>
                        <li className="header-menu-hamburger-item"><Link className="header-menu-hamburger-item-link" to="/news">News</Link></li>
                        <li className="header-menu-hamburger-item"><Link className="header-menu-hamburger-item-link" to="/gallery">Gallery</Link></li>
                    </ul>
                </div>)}
            </div>
        </nav>
    </div>
}


export default Header;