import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="hero-overlay2"></div>
      
      {/* Background decoration elements */}
      <div className="bg-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="about-container">
        {/* Left Text Content */}
        <div className={`about-text ${isVisible ? "animate-in" : ""}`}>
          <div className="subtitle1">About Our Company</div>
          <h1 className="about-title">
            Innovating <span className="highlight">Polymer</span> Solutions
          </h1>
          <p className="about-subtitle">
            Affix Polymers is a leading manufacturer of high-performance polymer compounds,
            dedicated to delivering innovative solutions for diverse industrial applications.
            With decades of experience, we combine technical expertise with cutting-edge
            technology to create materials that meet the most demanding specifications.
          </p>

          {/* Trust Indicators */}
         
        </div>

        {/* Mission & Vision - Now properly centered */}
        <div className={`mission-vision-container ${isVisible ? "animate-in-right" : ""}`}>
          <div className="mission">
            <h3 className="mission-vision-title">Our Mission</h3>
            <p className="mission-vision-text">
              To develop sustainable polymer solutions that push the boundaries of material science
              while maintaining the highest standards of quality and environmental responsibility.
            </p>
          </div>
          <div className="vision">
            <h3 className="mission-vision-title">Our Vision</h3>
            <p className="mission-vision-text">
              To be the global leader in innovative polymer technologies that transform industries
              and improve quality of life through advanced material solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;