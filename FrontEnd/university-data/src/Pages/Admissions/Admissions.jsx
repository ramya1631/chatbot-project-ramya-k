import React, { useEffect, useState } from 'react';
import './Admissions.css';

const Admissions = () => {
  // State to hold the list of announcement posts fetched from backend
  const [posts, setPosts] = useState([]);

  // useEffect to fetch posts once when the component mounts
  useEffect(() => {
    fetch('http://localhost:8080/api/posts/all')
      .then((res) => res.json())
      .then((data) => setPosts(data)) // Store fetched posts in state
      .catch((err) => console.error('Error fetching posts:', err)); // Log any errors
  }, []);

  return (
    <div className="admission-page">
      <div className="admission-section">
        {/* Main heading */}
        <h2 className="text-center mb-4">🎓 Admissions 2025</h2>

        {/* Moving Headline (could be styled or animated via CSS) */}
        <div className="headline-box mb-5">
          🚀 Admissions Open for 2025 | 🎯 Last Date: Aug 15 | 📝 Entrance Exam: Aug 20 | 📢 Results: Sept 1
        </div>

        {/* Section for latest announcements */}
        <h4 className="mb-3">📢 Latest Announcements</h4>

        {/* If no posts, show message; else map and display posts */}
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
  );
};


export default Admissions;
