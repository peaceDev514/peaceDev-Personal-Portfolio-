import React from 'react'; 
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import githubIcon from './assets/githubIcon.svg';

const Footer = () => {
	return(
		<>

		<div className="footer">
		<a href="#">Home</a>
		<a href="#work">Work</a>
		<a href="#about">About</a>
		<a href="#services">Services</a>
		<a href="#contact">Contact</a>
		
		<div style={{ display: "flex", gap: "10px", margin: "0 auto" }}>
		<a href="https://www.facebook.com/share/17rCqwCveE/" target="_blank" rel="noopener noreferrer"><img src={facebook} style={{ backgroundColor: "white" }} /></a>
		<a href="https://x.com/peaceDev514" target="_blank" rel="noopener noreferrer"><img src={twitter} style={{ backgroundColor: "white" }} /></a>
		<a href="https://www.instagram.com/ogunleye.titilayo2?stkn=MWtyaTF5c3JlY3owZw==" target="_blank" rel="noopener noreferrer"><img src={instagram} style={{ backgroundColor: "white" }} /></a>
		<a href="https://github.com/peaceDev514" target="_blank" rel="noopener noreferrer"><img src={githubIcon} style={{ backgroundColor: "white" }
		} /></a>

		</div>

		<div className="line"></div>

		<p>Designed & Developed by Peace Ogunleye</p>

		<p>© { new Date().getFullYear() } Peace Ogunleye. All rights reserved.</p>
		
		</div>

		</>
	);
}

export default Footer;
