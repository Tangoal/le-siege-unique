import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/img/logo-navbar.png";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

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
                <li><NavLink to='/' onClick={toggleMenu}>Accueil</NavLink></li>
                <li><NavLink to='/sieges' onClick={toggleMenu}>Sièges</NavLink></li>
                <li><NavLink to='/sellerie' onClick={toggleMenu}>Sellerie</NavLink></li>
                <li><NavLink to='/boutique' onClick={toggleMenu}>Boutique</NavLink></li>
                <li><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}