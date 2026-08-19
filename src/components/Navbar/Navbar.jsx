import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          <span className="logo-tag">
            &lt;Abdulrafay /&gt;
          </span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">HOME</a>
          </li>

          <li>
            <a href="#about">ABOUT</a>
          </li>

          <li className="dropdown-trigger">
            <a href="#projects" onClick={() => setProjectsOpen((value) => !value)}>
              PROJECTS <span aria-hidden="true">⌄</span>
            </a>

            <ul className={`dropdown-menu${projectsOpen ? " is-open" : ""}`}>
              <li>
                <a href="#projects">Text to PDF Tool</a>
              </li>

              <li>
                <a href="#projects">Color Code Converter</a>
              </li>

              <li>
                <a href="#projects">Password Generator</a>
              </li>

              <li>
                <a href="#projects">QR Code Generator</a>
              </li>

              <li>
                <a href="#projects">Unit Converter</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#contact" className="login-btn">
              LOGIN / CONTACT
            </a>
          </li>
        </ul>

        <button className="mobile-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}><span /><span /></button>

      </div>
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>HOME</a><a href="#about" onClick={closeMenu}>ABOUT</a><a href="#projects" onClick={closeMenu}>PROJECTS</a><a href="#contact" onClick={closeMenu}>CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;