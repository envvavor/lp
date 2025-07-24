import React, { useState } from "react";
import "../App.css"; // atau masukkan ke App.css
import { AdvancedClass } from "./AdvancedClass";

const scrollToFeatures = () => {
  const el = document.getElementById('features');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToAdvancedClass = () => {
  const el = document.getElementById('advanced-class');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToGallery = () => {
  const el = document.getElementById('gallery');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToCocok = () => {
  const el = document.getElementById('cocok');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}


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
          <li><a href="#" onClick={scrollToFeatures}>Manfaat</a></li>
          <li><a href="#" onClick={scrollToGallery}>Galery</a></li>
          <li><a href="#" onClick={scrollToCocok}>Tentang</a></li>
          <li><a href="#" onClick={scrollToAdvancedClass}>Jadwal</a></li>
        </ul>
      </div>
    </nav>
  );
};
