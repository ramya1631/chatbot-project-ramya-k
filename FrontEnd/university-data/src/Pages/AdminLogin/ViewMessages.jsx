// ViewMessages.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";


function ViewMessages() {
  const [users, setUsers] = useState([]);

  // Fetch all user messages from backend
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user/getAll");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Call fetchMessages on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="view-messages-container">
      <h2>Messages from Users</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Feedback</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No messages found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className={user.approved ? "table-success" : "table-warning"}
              >
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.feedback}</td>
                <td>{user.approved ? "Yes" : "No"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewMessages;
