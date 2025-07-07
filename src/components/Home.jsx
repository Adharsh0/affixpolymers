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
// Import your background images
import bg4 from "../assets/bgg1.jpeg";
import bg2 from "../assets/bgg2.jpeg";
import bg3 from "../assets/bgg3.jpeg";
import bg1 from "../assets/bg4.jpeg";


const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Affix Polymers";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images array
  const backgroundImages = [bg1, bg2,bg4];

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
    }, 5000); // Slower transition for more elegance

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              {/* Enhanced Subtitle with Icon */}
              <div className="subtitle-container">
              </div>
              <h1 className="hero-title">
                <span className="title-line-1">Welcome To</span>
                <span className="title-line-2">
                  <span className="brand-name">
                    {typedText}
                  </span>
                </span>
              </h1>
              {/* Enhanced Subtitle */}
              <div className="hero-subtitle-container">
                <p className="hero-subtitle">
                  <span className="highlight-text">Your Trustfull Solutions</span>
                
                </p>
              </div>

              {/* Enhanced CTA Section */}
              <div className="cta-section">
                {/* Enhanced Stats Section */}
                <div className="stats-container">
                  <div className="stats-section">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M20 7L12 3L4 7L12 11L20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 17L12 21L20 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Products</span>
                    </div>
                    
                    <div className="stat-item">
                      <div className="stat-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="stat-number">30+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    
                    <div className="stat-item">
                      <div className="stat-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
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

      {/* Scroll Indicator */}
    </section>
  );
};

export default Home;