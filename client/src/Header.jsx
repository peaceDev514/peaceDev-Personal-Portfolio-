import React from 'react';
import peaceImg from './assets/peaceDev.jpg';

const Header = ({ menuOpen, setMenuOpen }) => {
	return(
		<>
		<header>
		<img src={peaceImg} />
                <h2>peaceDev</h2>
                                                                                       <span className="material-symbols-outlined" id="menu-icon"
		onClick={() => setMenuOpen(true)}
		>
		menu
		</span>

		<ul className={`menu ${menuOpen ? "open" : ""}`}>    
		<li onClick={() => setMenuOpen(false)}><a href="#">Home
		</a></li>                                                         
		<li onClick={() => setMenuOpen(false)}><a href="#work">
		Work</a></li>                                       
		<li onClick={() => setMenuOpen(false)}><a href="#about"
		>About</a></li>                                  
		<li onClick={() => setMenuOpen(false)}><a href="#services">Services</a></li>                                             
		<li onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
		</ul>

                </header>

		</>
	);
}

export default Header;
