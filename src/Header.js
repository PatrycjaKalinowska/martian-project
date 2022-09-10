import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return <header className="header">
            <div className="logo">
                <Link className='logo-link' to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="IconChangeColor" height="50" width="50"><g clip-path="url(#a)"><path stroke="#ecc7a2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m14.672 19.157-2.829-2.829m2.829 2.829 1.4 2.814c.711-.693 3.122-3.919 1.413-5.628m-2.813 2.814 2.813-2.814m-5.642-.015 2.829-2.828.014-.015m-2.843 2.843L9 14.9c.722-.703 4.001-3.1 5.686-1.415m2.814 2.843-.015.015m0 0 2.502-2.501a8 8 0 0 0 2.145-3.89l.318-1.402-1.402.318a8 8 0 0 0-3.89 2.145l-2.472 2.472m-11.272-.172c-1.339 2.117-1.85 3.806-1.192 4.465.586.586 1.987.246 3.778-.778m7.313-13.586c2.117-1.339 3.806-1.85 4.465-1.192.886.885-.345 3.634-2.854 6.778m-10.67 5A7.002 7.002 0 0 1 14 4.254" id="mainIconPathAttribute" filter="url(#shadow)"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ecc7a2"></path></clipPath></defs><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation="0.7" dx="0.2" dy="0.5" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="#e56c6c"></feDropShadow></filter></svg>
                    <span className='logo-text'>Martian Project</span>
                </Link>
            </div>
            <ul className="menu">
            <li className="menu-item">
                <Link className="menu-item-link"to="/news">news</Link>
            </li>
            <li className="menu-item">
                <Link className="menu-item-link"to="/gallery">gallery</Link>
            </li>
            </ul>
        </header>
}

export default Header;