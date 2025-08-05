import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import { FaUsers, FaRobot, FaChartBar, FaSignOutAlt, FaBullhorn } from 'react-icons/fa';

function AdminDashboard() {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Logout handler clears admin login status and redirects to login page
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/adminlogin');
  };

  return (
    <div className="container mt-5">
      {/* Header row with welcome message and logout button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, Admin 👩‍🎓</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Dashboard cards */}
      <div className="row">
        {/* Create Announcement Card */}
        <div className="col-md-4 mb-4">
          <div
            className="card dashboard-card"
            onClick={() => navigate('/admin/create-post')}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate('/admin/create-post')}
          >
            <div className="card-body text-center">
              <FaBullhorn size={40} className="mb-3 text-info" />
              <h5 className="card-title">Create Announcement</h5>
              <p className="card-text">Post news or alerts for users.</p>
            </div>
          </div>
        </div>

        {/* Manage Users Card */}
        <div className="col-md-4 mb-4">
          <div
            className="card dashboard-card"
            onClick={() => navigate('/admin/users')}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate('/admin/users')}
          >
            <div className="card-body text-center">
              <FaUsers size={40} className="mb-3 text-primary" />
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View, edit and delete user accounts.</p>
            </div>
          </div>
        </div>

        {/* View Announcements Card */}
        <div className="col-md-4 mb-4">
          <div
            className="card dashboard-card"
            onClick={() => navigate('/admin/posts')}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate('/admin/posts')}
          >
            <div className="card-body text-center">
              <FaBullhorn size={40} className="mb-3 text-warning" />
              <h5 className="card-title">View Announcements</h5>
              <p className="card-text">See all posts made by the admin.</p>
            </div>
          </div>
        </div>

        {/* View Feedback Card */}
        <div className="col-md-4 mb-4">
          <div
            className="card dashboard-card"
            onClick={() => navigate('/admin/feedback')}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate('/admin/feedback')}
          >
            <div className="card-body text-center">
              <FaUsers size={40} className="mb-3 text-danger" />
              <h5 className="card-title">View Feedback</h5>
              <p className="card-text">Review user responses to posts.</p>
            </div>
          </div>
        </div>

        {/* View Messages Card */}
        <div className="col-md-4 mb-4">
          <div
            className="card dashboard-card"
            onClick={() => navigate('/admin/messages')}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate('/admin/messages')}
          >
            <div className="card-body text-center">
              <FaRobot size={40} className="mb-3 text-success" />
              <h5 className="card-title">View Messages</h5>
              <p className="card-text">Access all user messages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
