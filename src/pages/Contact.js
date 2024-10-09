import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us through the form below or find us at our office.</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>

      <section className="location">
        <h2>Our Location</h2>
        <p>1234 Business Rd, Suite 500, San Francisco, CA 94105</p>
        <iframe
          title="location-map"
          src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
