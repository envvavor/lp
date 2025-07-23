import React, { useState } from "react";
import "../App.css"; // atau masukkan ke App.css

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">EnvApp</div>

        <div className={`nav-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="nav-signin">
            <button className="primary-btn">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
