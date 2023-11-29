import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from ".//../assets/img/LOGOS-HD-LSU_fonce2.jpg"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'><img src={logo} loading="lazy" alt="Logo" /></div>
            <nav className="navbar-links-web">
                <ul>
                    <li><NavLink to='/'>Acceuil</NavLink></li>
                    <li><NavLink to='/sieges'>Sièges</NavLink></li>
                    <li><NavLink to='/sellerie'>Sellerie</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
            <nav className="navbar-links-mobile">
                <ul>
                    <li><NavLink to='/'>Acceuil</NavLink></li>
                    <li><NavLink to='/sieges'>Sièges</NavLink></li>
                    <li><NavLink to='/sellerie'>Sellerie</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}