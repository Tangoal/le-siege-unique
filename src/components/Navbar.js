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
            <div className='navbar-logo'><img src={logo} loading="lazy" alt="Logo" /></div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'bar1-open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'bar2-open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'bar3-open' : ''}`}></div>
            </div>
            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <NavLink to='/' onClick={toggleMenu}><li>Accueil</li></NavLink>
                    <NavLink to='/sieges' onClick={toggleMenu}><li>Sièges</li></NavLink>
                    <NavLink to='/sellerie' onClick={toggleMenu}><li>Sellerie</li></NavLink>
                    <NavLink to='/boutique' onClick={toggleMenu}><li>Boutique</li></NavLink>
                    <NavLink to='/contact' onClick={toggleMenu}><li>Contact</li></NavLink>
                </ul>
            </nav>
        </div>
    );
}