import React from "react";
import "../styles/herosection.css";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <img src="../assets/heroimage.jpeg" alt="main" />
      </div>

      <div className="hero-text">
        <h5>Start Shopping</h5>
      </div>
    </section>
  );
};
