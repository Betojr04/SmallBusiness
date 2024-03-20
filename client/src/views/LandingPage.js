import React from "react";
import "../styles/landingpage.css";
import { HeroSection } from "../components/HeroSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Testimonials } from "../components/Testimonials";
import { CategoriesSection } from "../components/CategoriesSection";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <Testimonials />
    </main>
  );
};

export default LandingPage;
