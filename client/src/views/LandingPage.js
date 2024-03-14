import React from "react";
import "../styles/landingpage.css";
import { HeroSection } from "../components/HeroSection";
import { FeaturedProducts } from "../components/FeaturedProducts";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
};

export default LandingPage;
