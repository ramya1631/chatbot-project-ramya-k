// src/components/Footer.jsx
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} LaunchCode | All rights reserved</p>
      <p>Contact: support@Launchcode.edu</p>
    </footer>
  );
}

export default Footer;