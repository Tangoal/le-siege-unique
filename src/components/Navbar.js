import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/img/logo-navbar.webp";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (e, to) => {
        e.preventDefault();
        if (isMenuOpen) {
            setMenuOpen(false);
            // Attendre la fin de l'animation du menu avant de naviguer
            setTimeout(() => {
                navigate(to);
            }, 300); // Correspond à la durée de transition dans le CSS
        } else {
            navigate(to);
        }
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className='navbar-logo'>
                <NavLink to='/' onClick={(e) => handleNavClick(e, '/')}>
                    <img src={logo} alt="Logo" />
                </NavLink>
            </div>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`bar bar1`}></div>
                <div className={`bar bar2`}></div>
                <div className={`bar bar3`}></div>
            </div>
            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li className={pathname === '/' ? 'active' : ''}>
                        <NavLink to='/' onClick={(e) => handleNavClick(e, '/')}>Accueil</NavLink>
                    </li>
                    <li className={pathname === '/sieges' ? 'active' : ''}>
                        <NavLink to='/sieges' onClick={(e) => handleNavClick(e, '/sieges')}>Sièges X Ameublement</NavLink>
                    </li>
                    <li className={pathname === '/banquettes' ? 'active' : ''}>
                        <NavLink to='/banquettes' onClick={(e) => handleNavClick(e, '/banquettes')}>Banquettes</NavLink>
                    </li>
                    <li className={pathname === '/sellerie-auto' ? 'active' : ''}>
                        <NavLink to='/sellerie-auto' onClick={(e) => handleNavClick(e, '/sellerie-auto')}>Sellerie automobile</NavLink>
                    </li>
                    <li className={pathname === '/sellerie-moto' ? 'active' : ''}>
                        <NavLink to='/sellerie-moto' onClick={(e) => handleNavClick(e, '/sellerie-moto')}>Sellerie moto</NavLink>
                    </li>
                    <li className={pathname === '/decoration' ? 'active' : ''}>
                        <NavLink to='/decoration' onClick={(e) => handleNavClick(e, '/decoration')}>Décoration</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}