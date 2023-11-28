import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from ".//../assets/img/LOGOS-HD-LSU_fonce2.jpg"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'><img src={logo} loading="lazy" alt="Logo" /></div>
            <nav className="navbar-links">
                <ul>
                    <li><Link to='/'>Acceuil</Link></li>
                    <li><Link to='/sieges'>Sièges</Link></li>
                    <li><Link to='/sellerie'>Sellerie</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}