import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // For Go Back navigation

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Approve user
  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/users/approve/${id}`);
      alert("User approved and email sent.");
      fetchUsers();
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        alert("User deleted.");
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5 animated fadeIn">
      {/* Go Back Button */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2 className="text-center mb-4">Manage Users</h2>


      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Approved</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id} className={user.approved ? "table-success" : "table-warning"}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.approved ? "✅ Approved" : "❌ Pending"}</td>
                  <td>
                    {!user.approved && (
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleApprove(user.id)}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
