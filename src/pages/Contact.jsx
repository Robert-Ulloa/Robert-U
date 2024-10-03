import React, { useState } from 'react';
import '../styles/Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input 
            type="text" 
            placeholder="Full Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            placeholder="Email address" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input 
            type="text" 
            placeholder="Email Subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange}
          />
        </div>
        <textarea 
          name="message" 
          cols="30" 
          rows="10" 
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;