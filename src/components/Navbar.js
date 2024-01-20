import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/img/logo-navbar.webp";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className='navbar-logo'><NavLink to='/'><img src={logo} alt="Logo" /></NavLink></div>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`bar bar1`}></div>
                <div className={`bar bar2`}></div>
                <div className={`bar bar3`}></div>
            </div>
            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li className={pathname === '/' ? 'active' : ''}><NavLink to='/' onClick={toggleMenu}>Accueil</NavLink></li>
                    <li className={pathname === '/sieges' ? 'active' : ''}><NavLink to='/sieges' onClick={toggleMenu}>Sièges</NavLink></li>
                    <li className={pathname === '/sellerie' ? 'active' : ''}><NavLink to='/sellerie' onClick={toggleMenu}>Sellerie</NavLink></li>
                    <li className={pathname === '/boutique' ? 'active' : ''}><NavLink to='/boutique' onClick={toggleMenu}>Boutique</NavLink></li>
                    <li className={pathname === '/contact' ? 'active' : ''}><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}