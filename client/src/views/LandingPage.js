import React from "react";
import "../styles/landingpage.css";
import { HeroSection } from "../components/HeroSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
    </main>
  );
};

export default LandingPage;
