import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAdminLoggedIn(localStorage.getItem('adminLoggedIn') === 'true');
      setIsUserLoggedIn(localStorage.getItem('userLoggedIn') === 'true');
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [location.pathname]);

  const handleLogout = () => {
    if (isAdminLoggedIn) {
      localStorage.removeItem('adminLoggedIn');
      navigate('/adminlogin');
    } else if (isUserLoggedIn) {
      localStorage.removeItem('userLoggedIn');
      localStorage.removeItem('userName');
      navigate('/user/login');
    }
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow sticky-top">
      <div className="container-fluid">
        {/* Left Corner Logo */}
        <Link className="navbar-brand me-auto" to="/">🎓LaunchCode University</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav small-nav text-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/adminlogin">Admin Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/user/login">User Login</Link></li>
              </>
            )}

            {isAdminLoggedIn && (
              <li className="nav-item"><Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link></li>
            )}

            {isUserLoggedIn && (
              <li className="nav-item"><Link className="nav-link" to="/user/dashboard">User Dashboard</Link></li>
            )}

            {/* Show Admissions and Contact only if NOT admin */}
            {!isAdminLoggedIn && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/admissions">Admissions</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Right Corner Logout */}
        {(isAdminLoggedIn || isUserLoggedIn) && (
          <button className="btn btn-sm btn-danger ms-auto logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
