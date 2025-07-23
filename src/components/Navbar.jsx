import React, { useState } from "react";
import "../App.css"; // atau masukkan ke App.css

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo-nav">
          <img src="/images/logo.png" alt="Deskripsi gambar" className="gaya-saya"/>
        </div>

        <div className={`nav-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Testimoni</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Galery</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Tentang</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Jadwal</a></li>
        </ul>
      </div>
    </nav>
  );
};
