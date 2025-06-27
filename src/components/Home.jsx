import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import heroImage from "../assets/removedbg.png"; // Update with your image path

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Affix Polymers";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-section" id="home">
      <div className="hero-overlay"></div>
      <Navbar />
      <div className="hero-content">
        <div className="hero-inner">
          {/* Left Text */}
          <div className="hero-text">
            <div className="text-content">
              <div className="subtitle">Premium Quality Solutions</div>
              <h1 className="hero-title">
                Welcome to <br />
                <span className="brand-name">{typedText}</span>
              </h1>
              <p className="hero-subtitle">
                <strong>YOUR TRUSTFUL SOLUTION.</strong>
                <br />
                Innovative polymer solutions for demanding industrial applications
              </p>
              <div className="cta-section">
                <button onClick={handleContactClick} className="discover-btn">
                  Contact Now
                  <div className="btn-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div className="stats-section">
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Products</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Affix Polymers" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;