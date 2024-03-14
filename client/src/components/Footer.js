import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/social-media">Social Media Links</a>
      </div>
      <div className="footer-column">
        <a href="/terms">Terms & Conditions</a>
        <a href="/shipping">Shipping & Returns</a>
      </div>
      <div className="footer-column">
        <a href="/privacy">Privacy Policy</a>
        <a href="/faqs">FAQs</a>
      </div>
    </footer>
  );
};
