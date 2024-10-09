import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="company-history">
        <h1>About Us</h1>
        <p>
          Our company was founded in 2010 with a mission to bring the best 
          services to our clients. Over the years, we have grown into a 
          leading provider in the industry.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To innovate and provide the highest quality services to help our clients
          reach their goals, while maintaining the highest standards of integrity 
          and professionalism.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <h3>Michael Lee</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
