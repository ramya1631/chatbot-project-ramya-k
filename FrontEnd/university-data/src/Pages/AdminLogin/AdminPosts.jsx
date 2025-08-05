import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminPosts() {
  // State to store list of posts
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts from backend API
  const fetchPosts = () => {
    fetch('http://localhost:8080/api/posts/all')
      .then((res) => res.json())
      .then((data) => setPosts(data)) // Update state with posts
      .catch((err) => console.error('Failed to fetch posts:', err));
  };

  // Handle delete post with confirmation prompt
  const handleDelete = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',   // Red confirm button
      cancelButtonColor: '#3085d6', // Blue cancel button
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      // If confirmed, send DELETE request to backend
      fetch(`http://localhost:8080/api/posts/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (res.ok) {
            // Remove deleted post from state to update UI immediately
            setPosts(posts.filter((post) => post.id !== id));
            Swal.fire(
              'Deleted!',
              'The post has been deleted.',
              'success'
            );
          } else {
            // Show error if delete request failed
            Swal.fire(
              'Error!',
              'Failed to delete the post.',
              'error'
            );
          }
        })
        .catch((err) => {
          console.error('Delete failed:', err);
          Swal.fire(
            'Error!',
            'Failed to delete the post.',
            'error'
          );
        });
    }
  };

  return (
    <div className="container mt-5">
      {/* Button to navigate back */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2>All Announcements</h2>

      {/* Table to display posts */}
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Posted On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Check if posts array is not empty */}
          {posts.length > 0 ? (
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                {/* Format post creation timestamp */}
                <td>{new Date(post.createdAt).toLocaleString()}</td>
                <td>
                  {/* Delete button */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            // Show message if no posts found
            <tr>
              <td colSpan="5" className="text-center">
                No posts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPosts;
