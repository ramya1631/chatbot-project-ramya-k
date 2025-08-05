import React from 'react';
import './Footer.css'; // Import the CSS file for styling the footer

// Functional component for the website footer
const Footer = () => {
  return (
    // Footer element with a class for styling
    <footer className="site-footer">
      {/* Container div for footer content */}
      <div className="footer-content">
        {/*
          Paragraph showing copyright symbol and current year dynamically using JavaScript Date object
          The text indicates site ownership and reserved rights
        */}
        <p>&copy; {new Date().getFullYear()} University Data with Chatbot. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Export the Footer component for use in other parts of the application
export default Footer;

