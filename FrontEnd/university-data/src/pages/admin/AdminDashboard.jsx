import React, { useEffect, useState } from 'react';
import './Admissions.css';

const Admissions = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/posts/all')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div className="container admission-section">
      <div className="row">

        {/* Admission Headlines */}
        <div className="col-md-6 mb-4">
          <h4>🎓 Admission Headlines</h4>
          <div className="headline-box">
            🚀 Admissions Open for 2025 | 🎯 Last Date: Aug 15 | 📝 Entrance Exam: Aug 20 | 📢 Results: Sept 1
          </div>
        </div>

        {/* Announcements */}
        <div className="col-md-6 mb-4">
          <h4>📢 Latest Announcements</h4>
          {posts.length === 0 ? (
            <p>No announcements available.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="card-announcement">
                <div className="card-title">{post.title}</div>
                <div className="card-text">{post.content}</div>
                <div className="timestamp">
                  Posted on {new Date(post.createdAt).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};

export default Admissions;
