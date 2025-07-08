// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import "./Home.css";
// import heroImage from "../assets/removedbg.png"; // Update with your image path

// const Home = () => {
//   const [typedText, setTypedText] = useState("");
//   const fullText = "Affix Polymers";
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setTypedText((prev) => prev + fullText[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex]);

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="home-section" id="home">
//       <div className="hero-overlay"></div>
//       <Navbar />
//       <div className="hero-content">
//         <div className="hero-inner">
//           {/* Left Text */}
//           <div className="hero-text">
//             <div className="text-content">
//               <div className="subtitle">Premium Quality Solutions</div>
//               <h1 className="hero-title">
//                 Welcome to <br />
//                 <span className="brand-name">{typedText}</span>
//               </h1>
//               <p className="hero-subtitle">
//                 <strong>YOUR TRUSTFUL SOLUTION.</strong>
//                 <br />
//                 Innovative polymer solutions for demanding industrial applications
//               </p>
//               <div className="cta-section">
//                 <button onClick={handleContactClick} className="discover-btn">
//                   Contact Now
//                   <div className="btn-icon">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                       <path
//                         d="M5 12H19M19 12L12 5M19 12L12 19"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </button>
//                 <div className="stats-section">
//                   <div className="stat-item">
//                     <span className="stat-number">10+</span>
//                     <span className="stat-label">Products</span>
//                   </div>
//                   <div className="stat-item">
//                     <span className="stat-number">30+</span>
//                     <span className="stat-label">Experience</span>
//                   </div>
//                   <div className="stat-item">
//                     <span className="stat-number">100%</span>
//                     <span className="stat-label">Quality</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="hero-image-wrapper">
//             <img src={heroImage} alt="Affix Polymers" className="hero-image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import "./Home.css";
import bg4 from "../assets/bgg1.jpeg";
import bg2 from "../assets/bgg2.jpeg";
import bg1 from "../assets/bg4.jpeg";
import { FiCheckCircle, FiAward, FiShield, FiPackage, FiClock, FiUsers } from "react-icons/fi";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Affix Polymers";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [bg1, bg2, bg4];
  const features = [
    { icon: <FiCheckCircle size={24} />, text: "Quality Certified" },
    { icon: <FiAward size={24} />, text: "Industry Leaders" },
    { icon: <FiShield size={24} />, text: "Durable Solutions" },
    { icon: <FiPackage size={24} />, text: "Wide Product Range" }
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

  return (
    <section className="home-section" id="home">
      {/* Background Images Container */}
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

              {/* Features Grid */}
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Section */}
              <div className="cta-section">
                <div className="cta-buttons">
                  <a href="#products" className="primary-btn">
                    Explore Products
                  </a>
                  <a href="#contact" className="secondary-btn">
                    Request Quote
                  </a>
                </div>
                
                {/* Enhanced Stats Section */}
                <div className="stats-container">
                  <div className="stats-section">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FiPackage size={28} />
                      </div>
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Products</span>
                    </div>
                    
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FiClock size={28} />
                      </div>
                      <span className="stat-number">30+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FiUsers size={28} />
                      </div>
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Clients Served</span>
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