import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminFeedback() {
  // State to hold feedback list
  const [feedbacks, setFeedbacks] = useState([]);
  // Loading state to show spinner or message while fetching
  const [loading, setLoading] = useState(true);
  // Error state to capture and display fetch errors
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch feedbacks on component mount
  useEffect(() => {
    fetch('http://localhost:8080/api/posts/feedback/all') // Backend API endpoint to get all feedbacks
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch feedback'); // Throw error for non-2xx response
        return res.json(); // Parse JSON response
      })
      .then((data) => {
        setFeedbacks(data); // Update state with feedback data
        setLoading(false);  // Set loading to false
      })
      .catch((err) => {
        console.error(err);  // Log error for debugging
        setError('Could not load feedback'); // Set error message state
        setLoading(false);  // Stop loading spinner
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mt-5">
      {/* Button to navigate back to previous page */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      <h2>🗣️ User Feedback</h2>

      {/* Conditional rendering based on loading, error, and data states */}
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching
      ) : error ? (
        <p className="text-danger">{error}</p> // Show error message if fetch failed
      ) : feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p> // Show if no feedbacks present
      ) : (
        // Table listing all feedback items
        <table className="table table-bordered table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Post ID</th>
              <th>Feedback</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td>{fb.id}</td>
                <td>{fb.postId}</td>
                <td>{fb.feedbackText}</td>
                {/* Format timestamp into readable date/time, fallback to 'N/A' */}
                <td>{fb.timestamp ? new Date(fb.timestamp).toLocaleString() : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminFeedback;
