import React from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src="\src\assets\affixlogo.png" alt="Affix Polymers Logo" className="splash-logo" />
        <h1 className="splash-title">Affix Polymers</h1>
      </div>
    </div>
  );
};

export default SplashScreen;