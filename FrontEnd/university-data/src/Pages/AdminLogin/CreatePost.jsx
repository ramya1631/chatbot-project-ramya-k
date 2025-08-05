import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreatePost = () => {
  // State to hold the input title
  const [title, setTitle] = useState('');
  // State to hold the input content
  const [content, setContent] = useState('');
  // React Router's navigate function to programmatically change routes
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to backend to create a new post
      await fetch('http://localhost:8080/api/posts/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }), // Send title and content as JSON
      });

      // Show success popup after post creation
      await Swal.fire({
        icon: 'success',
        title: 'Post Created!',
        text: 'Your announcement has been published successfully.',
        confirmButtonColor: '#3085d6', // Blue button color
      });

      // Navigate back to admin dashboard after success
      navigate('/admin/dashboard');
    } catch (err) {
      // Log error in console for debugging
      console.error(err);

      // Show error popup if post creation failed
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error creating the post.',
        confirmButtonColor: '#d33', // Red button color
      });
    }
  };

  return (
    <div className="container mt-5">
      {/* Button to go back to the previous page */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2>Create New Announcement</h2>

      {/* Form to create a new post */}
      <form onSubmit={handleSubmit} className="mt-3">
        {/* Input for post title */}
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)} // Update title state on input change
          />
        </div>

        {/* Textarea for post content */}
        <div className="mb-3">
          <label>Content</label>
          <textarea
            className="form-control"
            rows="5"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)} // Update content state on input change
          ></textarea>
        </div>

        {/* Submit button to publish the announcement */}
        <button type="submit" className="btn btn-primary">
          📢 Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
