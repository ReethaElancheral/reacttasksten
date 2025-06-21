
import React, { useState } from "react";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-5">

        
          <div className="col-md-6" id="form-section" style={{ display: submitted ? "none" : "block" }}>
            <h2 className="contacthead">Contact Me</h2>
            <form id="contactForm" noValidate onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                  pattern="^\+?\d{7,15}$"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                  placeholder="Type a message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-submit">Send Message</button>
              </div>
            </form>
          </div>

         
          {submitted && (
            <div className="col-md-6 text-center" id="thank-you">
              <img
                src={thankYouImage}
                alt="Thank You"
                style={{ maxWidth: "200px", marginTop: "2rem" }}
              />
              <h4 className="text-light mt-3">Thanks for your message!</h4>
            </div>
          )}

        
          <div className="col-md-6 contact-details">
            <h3 className="getin">Get In Touch</h3>
            <p className="location"><strong>Location:</strong> Doha, Qatar</p>
            <p className="getinmail"><strong>Email:</strong> <a href="mailto:nisha.reetha30@gmail.com">nisha.reetha30@gmail.com</a></p>
            <p><strong>Phone:</strong> <span className="getinphone">+974 30104826</span></p>

            <div className="map-responsive mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.361931663691!2d51.53104171501046!3d25.28544778384779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c3db9bffcc05%3A0x2b5ac9af8af8db0!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1684662512345!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Qatar Location Map"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
