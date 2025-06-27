import React from 'react';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Affix Polymers</h3>
            <p className="footer-description">
              Delivering industry-grade rubber solutions and conveyor maintenance products across India. 
              Trusted by factories, built on precision and performance.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/affixpolymers/" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#products" className="footer-link">Our Products</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Our Solutions</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Hot & Cold Vulcanizing</a></li>
              <li><a href="#" className="footer-link">Rubber Lagging Compounds</a></li>
              <li><a href="#" className="footer-link">Conveyor Belt Repair Kits</a></li>
              <li><a href="#" className="footer-link">On-site Technical Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Reach Us</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon"><Mail size={16} /></span>
                affixpolymers@gmail.com
              </p>
              <p className="contact-item">
                <span className="contact-icon"><Phone size={16} /></span>
                +91 94467 93925 <br/>
                +91 73067 65837
              </p>
              <p className="contact-item">
                <span className="contact-icon"><MapPin size={16} /></span>
                Industrial Zone, Kottayam, Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Affix Polymers. All rights reserved.
              <span className="developed-by"> Website developed by <a href="https://www.uinetix.com" target="_blank" rel="noopener noreferrer" className="uinetix-link">UiNetix</a></span>
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;