import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';  
import BurgerMenu from '../hamburger_menu/burgermenu';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }

        setIsMenuClicked(!isMenuClicked);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav className={menuOpen ? "menu-open" : "menu-hidden"}>
            <section className='logo'>
                <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" />
            </section>

            <section className="nav-links">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/faq" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>FAQ</NavLink>
                <NavLink to="/learnMore" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Learn More</NavLink>
            </section>

           <div className="hamburger-menu">
                <BurgerMenu open={menuOpen} onClick={updateMenu}/>
            </div>
            
            <div className={menuOpen ? "menu" : "hidden"}>
                <div className="link">
                    <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink to="/faq" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>FAQ
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink to="/learnMore" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Learn More
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
