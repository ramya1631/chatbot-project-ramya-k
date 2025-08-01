
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:8080/api/posts/feedback/all')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error('Failed to fetch feedback:', err));
  }, []);

  return (
    <div className="container mt-5">
       <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      <h2>🗣️ User Feedback</h2>
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
              <td>{new Date(fb.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminFeedback;

