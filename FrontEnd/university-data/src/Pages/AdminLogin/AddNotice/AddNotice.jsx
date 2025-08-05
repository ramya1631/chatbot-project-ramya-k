// src/pages/admin/AddNotice.jsx
import React, { useState } from "react";
import axios from "axios";
import './AddNotice.css';
import { useNavigate } from "react-router-dom";
const AddNotice = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/notices", { title, description })
      .then(() => {
        setSuccess(true);
        setTitle("");
        setDescription("");
      })
      .catch(err => console.error("Error posting notice", err));
  };

  return (
    <div className="notice-section">
       <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      <h2>Add New Notice</h2>
      {success && <p className="success">Notice posted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required></textarea>
        <button type="submit">Post Notice</button>
      </form>
    </div>
  );
};

export default AddNotice;
