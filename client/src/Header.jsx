import React from 'react';
import peaceImg from './assets/peaceDev.jpg';

const Header = ({ menuOpen, setMenuOpen }) => {
const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

const closeMenu = () => {
setMenuOpen(false);
};

return (
<header>
<img src={peaceImg} alt="Peace Ogunleye" />
<h2>peaceDev</h2>

  <button
    type="button"
    id="menu-icon"
    className="material-symbols-outlined"
    onClick={toggleMenu}
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={menuOpen}
  >
    {menuOpen ? (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    ) : (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>

  <ul className={`menu ${menuOpen ? 'open' : ''}`}>
    <li onClick={closeMenu}>
      <a href="#home">Home</a>
    </li>
    <li onClick={closeMenu}>
      <a href="#work">Work</a>
    </li>
    <li onClick={closeMenu}>
      <a href="#about">About</a>
    </li>
    <li onClick={closeMenu}>
      <a href="#services">Services</a>
    </li>
    <li onClick={closeMenu}>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</header>

);
};

export default Header;
