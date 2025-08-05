// src/user/UserDashboard.jsx

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ChatbotPopup from "../ChatBot/ChatbotPopup";
import './UserDashboard.css';
import DashboardImage from "../../assets/pen.png";

// Set the root element for accessibility support
Modal.setAppElement('#root');

const UserDashboard = () => {
  // State to control modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // State to store latest announcement
  const [announcement, setAnnouncement] = useState(null);
  // State to store user's feedback input
  const [feedback, setFeedback] = useState('');
  // Message to show feedback submission status
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Fetch the latest announcement when component mounts
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/posts/latest');
        const data = await res.json();

        // Show modal only if user hasn't already seen this announcement
        if (data && !localStorage.getItem(`postSeen_${data.id}`)) {
          setAnnouncement(data);
          setModalIsOpen(true);
        }
      } catch (err) {
        console.error('Error fetching announcement:', err);
      }
    };

    fetchAnnouncement();
  }, []);

  // Submit feedback to backend
  const handleFeedbackSubmit = async () => {
    try {
      await fetch('http://localhost:8080/api/posts/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: announcement.id, feedback }),
      });

      // Mark announcement as seen
      localStorage.setItem(`postSeen_${announcement.id}`, 'true');
      setModalIsOpen(false);
      setFeedback('');
      setFeedbackMessage('✅ Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedbackMessage('❌ Failed to submit feedback.');
    }
  };

  // Close the modal without submitting feedback
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${DashboardImage})` }}>
      <div className="dashboard-overlay">
        <div className="dashboard-content">
          <h2>🚀 <span style={{ color: '#00bcd4' }}>Welcome to the User Dashboard</span></h2>
          <p>You can interact with UniBot using the chat icon at the bottom-right corner.</p>
          {feedbackMessage && <p style={{ marginTop: '10px', color: '#ffffff' }}>{feedbackMessage}</p>}
        </div>
      </div>

      {/* Modal for showing announcement and feedback input */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        className="side-modal"
        overlayClassName="ReactModal__Overlay"
      >
        <div className="modal-header">
          <h2>📢 Latest News</h2>
          <button className="close-btn" onClick={handleClose}>✖</button>
        </div>

        <h3 style={{ color: '#c5f86cff' }}>{announcement?.title}</h3>
        <p style={{ color: '#6cf8d0dc' }}>{announcement?.content}</p>

        <textarea
          className="feedback-textarea"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Give your feedback (optional)..."
          rows={4}
        />

        <button className="submit-btn" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </button>
      </Modal>

      {/* Chatbot popup component */}
      <ChatbotPopup />
    </div>
  );
};

export default UserDashboard;
