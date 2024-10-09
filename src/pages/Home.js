import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>We provide top-quality services that exceed your expectations.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>Our team is always ready to support you 24/7.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>Our solutions are tailored specifically to your business needs.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"This company changed the way we do business!"</p>
            <cite>- Jane Doe</cite>
          </div>
          <div className="testimonial-item">
            <p>"Their team is highly professional and efficient."</p>
            <cite>- John Smith</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
