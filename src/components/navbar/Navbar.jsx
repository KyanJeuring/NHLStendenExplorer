import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import BurgerMenu from "../hamburger_menu/burgermenu";

export default function Navbar({ lang, toggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? "menu-open" : "menu-hidden"}>
      <section className="logo">
        <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" />
      </section>

      <section className="nav-links">
        <button className="lang-toggle" onClick={toggleLang} type="button">
         {lang}
        </button>

        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/learnMore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Learn More
        </NavLink>
        <NavLink to="/explore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Explore
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          FAQ
        </NavLink>
        <NavLink to="/translate" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Translate
        </NavLink>
      </section>

      <div className="hamburger-menu">
        <BurgerMenu open={menuOpen} onClick={updateMenu} />
      </div>

      <div className={menuOpen ? "menu" : "hidden"}>
        {/* keep your menu links same, just call closeMenu */}
        <div className="link">
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
            <svg className="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavLink>
        </div>

        {/* repeat for the others... */}
      </div>
    </nav>
  );
}
