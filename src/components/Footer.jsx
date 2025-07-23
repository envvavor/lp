// src/components/Footer.jsx
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';
import '../App.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <FaInstagram />
        <FaFacebookF />
        <FaTiktok />
        <FaYoutube />
      </div>
      <p className="footer-subtext">Grow Together With Us</p>

      <p className="footer-copyright">
        &copy; Creativy {new Date().getFullYear()}
      </p>

      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
        <a href="#">Support</a>
      </div>

      <div className="footer-brand">
        <span className="logo-icon">G</span>
        <span className="logo-text">Creativy</span>
      </div>
    </footer>
  );
};
