import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Update formData state on input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submit behavior
    try {
      // POST the form data to backend API endpoint
      await axios.post('http://localhost:8080/api/contacts', formData);

      // Show success popup notification
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us.',
        confirmButtonColor: '#00bcd4',
      });

      // Reset form fields after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);

      // Show error popup notification if submission fails
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
          {/* Contact form heading */}
          <h2>📫 Contact Us</h2>

          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            {/* Name input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Email input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Subject input */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            {/* Message textarea */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Submit button */}
            <button type="submit">🚀Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
