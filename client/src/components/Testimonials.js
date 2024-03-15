import React from "react";
import { TestimonialsList } from "./TestimonialsList";

const Testimonials = TestimonialsList.map((testimonial, index) => {
  return (
    <section key={index}>
      <h2>{testimonial.name}</h2>
      <p>{testimonial.text}</p>
    </section>
  );
});

export default Testimonials;
