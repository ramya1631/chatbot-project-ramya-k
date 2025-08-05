import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Get current route location and navigate function from react-router
  const location = useLocation();
  const navigate = useNavigate();

  // State to track if admin or user is logged in
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // useEffect runs on mount and when location.pathname changes
  useEffect(() => {
    // Function to check login status from localStorage
    const checkAuth = () => {
      setIsAdminLoggedIn(localStorage.getItem('adminLoggedIn') === 'true');
      setIsUserLoggedIn(localStorage.getItem('userLoggedIn') === 'true');
    };

    checkAuth(); // initial check

    // Add event listener to update login state if localStorage changes (e.g. in another tab)
    window.addEventListener('storage', checkAuth);

    // Cleanup event listener on unmount or when path changes
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [location.pathname]);

  // Logout handler clears relevant login flags and redirects user accordingly
  const handleLogout = () => {
    if (isAdminLoggedIn) {
      localStorage.removeItem('adminLoggedIn');
      navigate('/adminlogin');  // Redirect to admin login page
    } else if (isUserLoggedIn) {
      localStorage.removeItem('userLoggedIn');
      localStorage.removeItem('userName');  // Also clear username on logout
      navigate('/user/login');  // Redirect to user login page
    }
    window.location.reload(); // Reload page to reset state and UI
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow sticky-top">
      <div className="container-fluid">

        {/* Left Corner: Brand Logo linking to homepage */}
        <Link className="navbar-brand me-auto" to="/">🎓LaunchCode University</Link>

        {/* Hamburger button for mobile responsive menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center: Navigation links, collapsible */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav small-nav text-center">

            {/* Always visible links */}
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

            {/* Show login links only if no one is logged in */}
            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/adminlogin">Admin Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/user/login">User Login</Link></li>
              </>
            )}

            {/* Show Admin Dashboard link if admin is logged in */}
            {isAdminLoggedIn && (
              <li className="nav-item"><Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link></li>
            )}

            {/* Show User Dashboard link if user is logged in */}
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

        {/* Right Corner: Logout button visible if logged in */}
        {(isAdminLoggedIn || isUserLoggedIn) && (
          <button className="btn btn-sm btn-danger ms-auto logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

