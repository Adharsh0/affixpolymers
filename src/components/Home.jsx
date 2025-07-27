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
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const featuresGridRef = useRef(null);

  const backgroundImages = [bg1, bg2, bg4];
  const features = [
    { icon: <FiCheckCircle />, text: "Quality Certified" },
    { icon: <FiAward />, text: "Industry Leaders" },
    { icon: <FiShield />, text: "Durable Solutions" },
    { icon: <FiPackage />, text: "Wide Product Range" }
  ];

  // Email configuration - Update these with your details
  const EMAIL_CONFIG = {
    to: 'affixpolymers@gmail.com',
    subject: 'General Quote Request - Affix Polymers',
    cc: '', // Optional CC email
    bcc: '' // Optional BCC email
  };

  // Enhanced mobile-friendly email handler
  const handleGeneralQuoteRequest = () => {
    setIsEmailLoading(true);

    const subject = EMAIL_CONFIG.subject;
    const body = `Dear Affix Polymers Team,

I am interested in learning more about your polymer solutions and would like to request a quote.

Company Information:
- Company Name: [Please specify]
- Industry: [Please specify]
- Contact Person: [Please specify]
- Phone Number: [Please specify]
- Email: [Please specify]

Requirements:
- Product Category: [Please specify - Adhesives/Compounds/Specialty Chemicals]
- Application: [Please describe your specific application]
- Quantity Required: [Please specify]
- Delivery Location: [Please specify]
- Timeline: [Please specify]
- Technical Requirements: [Please describe any specific requirements]

Additional Information:
- Current Supplier (if any): [Please specify]
- Budget Range: [Please specify]
- Special Requirements: [Please specify]
- Preferred Contact Method: [Email/Phone]

About Your Business:
- Years in Operation: [Please specify]
- Business Type: [Manufacturer/Distributor/End User]
- Annual Volume: [Please specify]

I would appreciate receiving:
- Product catalog and technical data sheets
- Pricing information
- Sample availability
- Delivery timeline
- Technical support information

Please contact me at your earliest convenience to discuss our requirements in detail.

Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`;

    try {
      // Detect mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      
      if (isMobile) {
        // Mobile devices: Use mailto directly
        const mailtoUrl = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
        
        // Show success message after a brief delay
        setTimeout(() => {
          setIsEmailLoading(false);
        }, 1500);
        
      } else {
        // Desktop: Try Gmail first, fallback to mailto
        try {
          const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_CONFIG.to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          
          // Add CC and BCC if provided
          let finalUrl = gmailUrl;
          if (EMAIL_CONFIG.cc) {
            finalUrl += `&cc=${encodeURIComponent(EMAIL_CONFIG.cc)}`;
          }
          if (EMAIL_CONFIG.bcc) {
            finalUrl += `&bcc=${encodeURIComponent(EMAIL_CONFIG.bcc)}`;
          }

          const newWindow = window.open(finalUrl, '_blank');
          
          // If popup blocked or failed, use mailto
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            const mailtoUrl = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;
          }
          
          setIsEmailLoading(false);
          
        } catch (error) {
          // Fallback to mailto for desktop
          const mailtoUrl = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoUrl;
          setIsEmailLoading(false);
        }
      }
    } catch (error) {
      console.error('Email error:', error);
      setIsEmailLoading(false);
      
      // Final fallback - show alert with email details
      alert(`Please send an email to: ${EMAIL_CONFIG.to}\n\nSubject: ${subject}\n\nOr copy the email address and compose manually.`);
    }
  };

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
      featuresGrid.style.scrollBehavior = 'auto';
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - featuresGrid.offsetLeft;
      const walk = (x - startX) * 1.5;
      featuresGrid.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      featuresGrid.style.scrollBehavior = 'smooth';
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

              {/* Enhanced CTA Section with Mobile-Friendly Email Integration */}
              <div className="cta-section">
                <div className="cta-buttons">
                  <a href="#products" className="primary-btn1">
                    Explore Products
                  </a>
                  <button 
                    onClick={handleGeneralQuoteRequest}
                    className={`secondary-btn1 quote-btn-home ${isEmailLoading ? 'loading' : ''}`}
                    disabled={isEmailLoading}
                  >
                    {isEmailLoading ? 'Opening Email...' : 'Request Quote via Email'}
                  </button>
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
