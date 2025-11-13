import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';  

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/page1" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Page 1</NavLink>
        </nav>
    );
}