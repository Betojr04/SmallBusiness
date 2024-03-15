import React from "react";
import { TestimonialsList } from "./TestimonialsList";
import "../styles/testimonial.css";

export const Testimonials = () => {
  return (
    <section className="testimonial-section">
      {TestimonialsList.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <p>&ldquo;{testimonial.review}&rdquo;</p>
          <h2>{testimonial.name}</h2>
        </div>
      ))}
    </section>
  );
};
