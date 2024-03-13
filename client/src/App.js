import React from "react";

export const App = () => {
  return (
    <main>
      {/* nav section */}
      <nav className="nav-container">This is the navbar</nav>
      {/* hero section */}
      <section className="hero-section">
        <h1>Your Fitness Journey Starts Here</h1>
        <p>
          Don't wait any longer; seize the opportunity to become the best
          version of yourself.
          <br></br>Let's partner up today and start your fitness journey.
        </p>
      </section>
      {/* call to action section */}
      <section className="cta-section">Call to action section</section>
    </main>
  );
};
