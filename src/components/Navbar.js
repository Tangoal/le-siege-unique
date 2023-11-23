import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="sticky-bar">
            <ul>
                <li><Link to='/'>Acceuil</Link></li>
                <li><Link to='/sieges'>Sièges</Link></li>
                <li><Link to='/sellerie'>Sellerie</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}