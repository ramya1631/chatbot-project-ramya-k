import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewMessages() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/contacts"); // ✅ Correct endpoint
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="view-messages-container" style={{ padding: "2rem" }}>
      <h2>User Feedback</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No feedback found.
              </td>
            </tr>
          ) : (
            feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td>{fb.id}</td>
                <td>{fb.name}</td>
                <td>{fb.email}</td>
                <td>{fb.subject}</td>
                <td>{fb.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewMessages;
