import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from ".//../assets/img/LOGOS-HD-LSU_fonce.jpg"

export default function Navbar() {
    return (
        <div className='navbar'>
        <div className='navbar-logo'><img src={logo} alt="Logo" /></div>
        <nav className="navbar-links">
            <ul>
                <li><Link to='/'>Acceuil</Link></li>
                <li><Link to='/sieges'>Sièges</Link></li>
                <li><Link to='/sellerie'>Sellerie</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        <div className='navbar-social'>
        <a href="https://www.facebook.com/profile.php?id=100090266934656" title="Facebook" target="_blank"><i className="fab fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/lesiegeunique/" title="Instagram" target="_blank"><i className="fab fa-square-instagram"></i></a>
        </div>
        </div>
    )
}