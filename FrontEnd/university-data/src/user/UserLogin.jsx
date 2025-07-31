import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/user/login', {
        username,
        password,
      });

      if (res.data === 'Login successful') {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome!',
          timer: 1500,
          showConfirmButton: false,
        });

        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userName', username);

        setTimeout(() => {
          navigate('/user/dashboard'); // Ensure this route is defined in App.jsx
        }, 1600);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password.',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Please try again later.',
      });
    }
  };

  return (
    <div className="user-login-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
