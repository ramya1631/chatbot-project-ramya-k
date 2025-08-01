import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/admin/login', {
        username,
        password,
      });

      if (res.data === 'Login successful') {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome Admin!',
          timer: 1500,
          showConfirmButton: false,
        });
        localStorage.setItem('adminLoggedIn', true);
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1600);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials',
          text: 'Please check your username and password.',
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'warning',
        title: 'Server Error',
        text: 'Unable to login. Try again later.',
      });
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
            <span className="underline"></span>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <span className="underline"></span>
          </div>
          <button type="submit" className="admin-login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
