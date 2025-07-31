import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contacts', formData);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us.',
        confirmButtonColor: '#00bcd4',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonColor: '#ff5252',
      });
    }
  };

  return (
    <div className="contact-page">
    <div className="glass-wrapper">
      <div className="glass-form">
        <h2>📫 Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">🚀 Send Message</button>
        </form>
      </div>

      <footer className="glass-footer">
        <p>📧 helpdesk@example.com | 📱 +91 9988776655</p>
        <p>© 2025 College Support | Crafted with 💙</p>
      </footer>
    </div>
    </div>
  );
};

export default Contact;