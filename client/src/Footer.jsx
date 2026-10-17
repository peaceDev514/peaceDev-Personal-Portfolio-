
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import githubIcon from "./assets/githubIcon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div
        className="footer-socials"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <a
          href="https://www.facebook.com/share/17rCqwCveE/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a
          href="https://x.com/peaceDev514"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <img src={twitter} alt="X" />
        </a>

        <a
          href="https://www.instagram.com/ogunleye.titilayo2?stkn=MWtyaTF5c3JlY3owZw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instagram} alt="Instagram" />
        </a>

        <a
          href="https://github.com/peaceDev514"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>

      <div className="line"></div>

      <footer>
        <p>Designed &amp; Developed by Peace Ogunleye</p>
        <p>
          © {new Date().getFullYear()} Peace Ogunleye. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

