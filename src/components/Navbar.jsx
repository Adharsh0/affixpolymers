import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from '../assets/affixlogo1.jpeg';
import { 
  Home, 
  UserCircle, 
  Package, 
  Phone,
  X, 
  Menu,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'about', label: 'About Us', Icon: UserCircle },
    { id: 'products', label: 'Products', Icon: Package },
    { id: 'contact', label: 'Contact', Icon: Phone },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`desktop-nav2 ${scrolled ? 'scrolled2' : ''}`}>
        <div className="nav-container2">
          <div className="nav-logo2" onClick={() => handleScroll('home')}>
            <img src={logoImage} alt="Affix Polymers" className="logo-image2" />
            <span className="logo-text2">Affix Polymers</span>
          </div>

          <div className="nav-menu2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`nav-link2 ${activeSection === item.id ? 'active2' : ''}`}
              >
                <item.Icon size={18} className="nav-icon2" />
                <span>{item.label}</span>
                <span className="nav-indicator2"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav2 ${scrolled ? 'scrolled2' : ''}`}>
        <div className="mobile-nav-container2">
          <div className="mobile-nav-logo2" onClick={() => handleScroll('home')}>
            <img src={logoImage} alt="Affix Polymers" className="mobile-logo-image2" />
            <span className="mobile-logo-text2">Affix</span>
          </div>

          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className={`hamburger-btn2 ${isMobileMenuOpen ? 'active2' : ''}`}
            aria-label="Toggle menu"
          >
            <div className="hamburger-lines2">
              <span className="line2"></span>
              <span className="line2"></span>
              <span className="line2"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay2 ${isMobileMenuOpen ? 'active2' : ''}`}>
          <div ref={menuRef} className="mobile-menu-content2">
            <div className="mobile-menu-header2">
              <img src={logoImage} alt="Affix Polymers" className="menu-logo2" />
              <h3>Affix Polymers</h3>
              <p>Premium Polymer Solutions</p>
            </div>

            <div className="mobile-menu-items2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`mobile-menu-item2 ${activeSection === item.id ? 'active2' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.Icon size={20} />
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="item-arrow2" />
                </button>
              ))}
            </div>

            <div className="mobile-menu-footer2">
              <div className="footer-info2">
                <Sparkles size={16} />
                <span>Premium Quality Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;