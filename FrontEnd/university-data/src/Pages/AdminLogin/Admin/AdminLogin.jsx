import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // For showing alerts
import './AdminLogin.css';

function AdminLogin() {
  // State to hold username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Send POST request to backend login API with credentials
      const res = await axios.post('http://localhost:8080/api/admin/login', {
        username,
        password,
      });

      // Check response message from backend
      if (res.data === 'Login successful') {
        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome Admin!',
          timer: 1500,
          showConfirmButton: false,
        });

        // Save login status in localStorage
        localStorage.setItem('adminLoggedIn', true);

        // Navigate to admin dashboard after alert closes
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1600);
      } else {
        // Show error alert for invalid credentials
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials',
          text: 'Please check your username and password.',
        });
      }
    } catch (err) {
      // Log error and show server error alert
      console.error(err);
      Swal.fire({
        icon: 'warning',
        title: 'Server Error',
        text: 'Unable to login. Try again later.',
      });
    }
  };

  // JSX for rendering the login form
  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Username input */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
            <span className="underline"></span> {/* decorative underline */}
          </div>
          <div className="form-group">
            {/* Password input */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <span className="underline"></span> {/* decorative underline */}
          </div>
          {/* Submit button */}
          <button type="submit" className="admin-login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
