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
                    <li className={pathname === '/sieges' ? 'active' : ''}><NavLink to='/sieges' onClick={toggleMenu}>Sièges X Ameublement</NavLink></li>
                    <li className={pathname === '/banquettes' ? 'active' : ''}><NavLink to='/banquettes' onClick={toggleMenu}>Banquettes</NavLink></li>
                    <li className={pathname === '/sellerie-auto' ? 'active' : ''}><NavLink to='/sellerie-auto' onClick={toggleMenu}>Sellerie automobile</NavLink></li>
                    <li className={pathname === '/sellerie-moto' ? 'active' : ''}><NavLink to='/sellerie-moto' onClick={toggleMenu}>Sellerie moto</NavLink></li>
                    <li className={pathname === '/decoration' ? 'active' : ''}><NavLink to='/decoration' onClick={toggleMenu}>Décoration</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}