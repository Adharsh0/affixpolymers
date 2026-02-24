import React from "react";
import "./Home.css";
import ThreeBackground from "../components/ThreeBackground";
import { 
  FiMail,
  FiArrowRight,
  FiStar
} from "react-icons/fi";

const Home = () => {

  const handleQuoteRequest = () => {
    window.location.href =
      "mailto:affixpolymers@gmail.com?subject=Business Inquiry - Affix Polymers";
  };

  return (
    <div className="home" id="home">

      {/* 3D Background */}
      <ThreeBackground />
      <div className="dark-overlay"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
             <br></br>
             <br></br>

              <h1 className="title">
                Premium Polymer Solutions
                <span className="highlight">
                  for Modern Industry
                </span>
              </h1>

              <p className="description">
                Leading manufacturer of high-performance polymer compounds,
                serving industries worldwide with innovative solutions.
              </p>
            </div>

            <div className="hero-right">
              <a href="#products" className="btn btn-primary">
                <span>Explore Products</span>
                <FiArrowRight />
              </a>

              <button
                onClick={handleQuoteRequest}
                className="btn btn-outline"
              >
                <FiMail />
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Manufacturing?</h2>
          <p>
            Partner with us for premium polymer solutions tailored to your needs
          </p>

          <button
            onClick={handleQuoteRequest}
            className="btn btn-primary btn-large"
          >
            Get Started Today <FiArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;