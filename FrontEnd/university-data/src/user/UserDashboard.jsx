import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ChatbotPopup from './ChatbotPopup';
import './UserDashboard.css';
import DashboardImage from '../assets/img_6.png';

Modal.setAppElement('#root');

const UserDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/posts/latest');
        const data = await resi.json();

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

  const handleFeedbackSubmit = async () => {
    try {
      await fetch('http://localhost:8080/api/posts/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: announcement.id, feedback }),
      });

      localStorage.setItem(`postSeen_${announcement.id}`, 'true');
      setModalIsOpen(false);
      setFeedback('');
      alert('✅ Feedback submitted!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('❌ Failed to submit feedback.');
    }
  };

  const handleClose = () => {
    // ✅ No localStorage set here — so modal shows again on reload
    setModalIsOpen(false);
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${DashboardImage})` }}>
      <div className="dashboard-overlay">
        <div className="dashboard-content">
          <h2>🚀 <span style={{ color: '#00bcd4' }}>Welcome to the User Dashboard</span></h2>
          <p>You can interact with UniBot using the chat icon at the bottom-right corner.</p>
        </div>
      </div>

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

      <ChatbotPopup />
    </div>
  );
};

export default UserDashboard;
