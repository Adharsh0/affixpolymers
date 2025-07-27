import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import bg4 from "../assets/bgg1.jpeg";
import bg2 from "../assets/bgg2.jpeg";
import bg1 from "../assets/bg4.jpeg";
import { FiCheckCircle, FiAward, FiShield, FiPackage, FiClock } from "react-icons/fi";
import { IconContext } from "react-icons";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Affix Polymers";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const featuresGridRef = useRef(null);

  const backgroundImages = [bg1, bg2, bg4];
  const features = [
    { icon: <FiCheckCircle />, text: "Quality Certified" },
    { icon: <FiAward />, text: "Industry Leaders" },
    { icon: <FiShield />, text: "Durable Solutions" },
    { icon: <FiPackage />, text: "Wide Product Range" }
  ];

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Background sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Touch handling for mobile scrolling (manual)
  useEffect(() => {
    const featuresGrid = featuresGridRef.current;
    if (!featuresGrid) return;

    let startX;
    let scrollLeft;
    let isDragging = false;

    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - featuresGrid.offsetLeft;
      scrollLeft = featuresGrid.scrollLeft;
      featuresGrid.style.scrollBehavior = 'auto'; // Disable smooth scroll during drag
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - featuresGrid.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjust scroll speed
      featuresGrid.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      featuresGrid.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
    };

    featuresGrid.addEventListener('touchstart', handleTouchStart);
    featuresGrid.addEventListener('touchmove', handleTouchMove, { passive: false });
    featuresGrid.addEventListener('touchend', handleTouchEnd);

    return () => {
      featuresGrid.removeEventListener('touchstart', handleTouchStart);
      featuresGrid.removeEventListener('touchmove', handleTouchMove);
      featuresGrid.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="home-section" id="home">
      {/* Background Images Container - Desktop/Tablet Only */}
      <div className="bg-images-container">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`bg-image ${index === currentBgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Professional Gradient Overlay */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="text-content"> 
              <h1 className="hero-title">
                <span className="title-line-1">Welcome To</span>
                <span className="title-line-2">
                  <span className="brand-name">
                    {typedText}
                    {currentIndex === fullText.length && (
                      <span className="cursor-animation">|</span>
                    )}
                  </span>
                </span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <div className="hero-subtitle-container">
                <p className="hero-subtitle">
                  <span className="highlight-text">Your Trustfull Solutions</span>
                  <span className="description-text">
                    Premium polymer compounds manufacturer with 30+ years of expertise in formulation and production
                  </span>
                </p>
              </div>

              {/* Mobile Image Gallery - Only visible on mobile */}
              <div className="mobile-image-gallery">
                {backgroundImages.map((src, i) => (
                  <div key={i} className="gallery-card">
                    <img src={src} alt={`Affix polymers ${i + 1}`} />
                    <div className="gallery-overlay">
                      <span className="gallery-text">Our Facility {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features Grid with manual mobile scrolling */}
              <div className="features-grid" ref={featuresGridRef}>
                <IconContext.Provider value={{ className: "feature-icon1", size: "24px" }}>
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </IconContext.Provider>
              </div>

              {/* Enhanced CTA Section */}
              <div className="cta-section">
                <div className="cta-buttons">
                  <a href="#products" className="primary-btn1">
                    Explore Products
                  </a>
                  <a href="#contact" className="secondary-btn1">
                    Request Quote
                  </a>
                </div>
                
                {/* Enhanced Stats Section */}
                <div className="stats-container">
                  <div className="stats-section">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FiPackage />
                      </div>
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Products</span>
                    </div>
                    
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FiClock />
                      </div>
                      <span className="stat-number">30+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FiCheckCircle />
                      </div>
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
