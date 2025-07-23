// src/components/Footer.jsx
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaGithub, FaWhatsapp } from 'react-icons/fa';
import '../App.css';
import { FaG } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://tiktok.com"><FaTiktok /></a>
        <a href="https:/youtube.com"><FaYoutube /></a>
        <a href="https://github.com/envvavor"><FaGithub /></a>
        <a href="https://whatsapp.com"><FaWhatsapp /></a>
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
        <img src="/images/logo.png" alt="Deskripsi gambar" className="gaya-saya"/>
      </div>
    </footer>
  );
};
