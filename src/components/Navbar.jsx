import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from '../assets/affixlogo1.jpeg';
import { 
  Home, 
  UserCircle, 
  Box, 
  Phone,
  X, 
  Menu
} from 'lucide-react';
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);

  // Check screen size for mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (sectionId) => {
    // Clear any pending scroll timeouts
    clearTimeout(scrollTimeoutRef.current);
    
    // Close menu immediately
    setIsMobileMenuOpen(false);
    
    // Wait for the menu to close before scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
        
        // Force a reflow to ensure smooth scrolling works
        element.getBoundingClientRect();
      }
    }, 300); // Match this duration with your CSS transition time
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        hamburgerRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { type: 'scroll', target: 'home', label: 'Home', Icon: Home },
    { type: 'scroll', target: 'about', label: 'About', Icon: UserCircle },
    { type: 'scroll', target: 'products', label: 'Products', Icon: Box },
    { type: 'scroll', target: 'contact', label: 'Contact', Icon: Phone },
  ];

  if (isMobile) {
    return (
      <>
        <div className="mobile-nav-container">
          <button 
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className={`floating-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          

          <div 
            ref={menuRef}
            className={`radial-menu ${isMobileMenuOpen ? 'open' : ''}`}
            aria-hidden={!isMobileMenuOpen}
          >
            {navItems.map((item, index) => (
              <button
                key={item.target}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleScroll(item.target);
                }}
                className="radial-menu-item"
                style={{
                  '--item-index': index
                }}
                aria-label={`Scroll to ${item.label} section`}
              >
                <item.Icon size={18} className="item-icon" />
                <span className="item-text">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {isMobileMenuOpen && (
            <div 
              className="menu-backdrop"
              onClick={closeMenu}
              role="button"
              tabIndex="0"
              aria-label="Close menu"
              onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
            />
          )}
        </div>
      </>
    );
  }

  // Desktop Navigation
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img 
            src={logoImage} 
            alt="Affix Polymers Logo" 
            className="navbar-logo"
            onClick={() => handleScroll('home')}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && handleScroll('home')}
          />
        </div>

        <ul className="navbar-nav">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(item.target)}
                className="nav-link"
                aria-label={`Scroll to ${item.label} section`}
              >
                {item.label}
                <span className="nav-dot"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;