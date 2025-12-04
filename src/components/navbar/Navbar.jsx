import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';  
import BurgerMenu from '../hamburger_menu/burgermenu';

export default function Navbar() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false) 

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
    }

    return (
        <nav>
            <section className='logo'>
                <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" />
            </section>
            <section className="nav-links">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/faq" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>FAQ</NavLink>
                <NavLink to="/learnMore" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Learn More</NavLink>
            </section>
           <div className="hamburger-menu">
                <BurgerMenu />
            </div>
        </nav>
    );
}
