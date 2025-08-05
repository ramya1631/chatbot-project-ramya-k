// src/admin/ViewUsers.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch all users from backend API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);  // Update state with fetched users
    } catch (error) {
      console.error("Error fetching users:", error);
      Swal.fire("Error", "Unable to fetch users", "error");  // Show error alert
    }
  };

  // Approve a user by id - sends PUT request
  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/users/approve/${id}`);
      Swal.fire("Success", "User approved and email sent.", "success");  // Success alert
      fetchUsers(); // Refresh user list after approval
    } catch (error) {
      console.error("Error approving user:", error);
      Swal.fire("Error", "Could not approve user", "error"); // Show error alert
    }
  };

  // Delete user with confirmation dialog
  const handleDelete = async (id) => {
    // Show confirmation dialog before deleting
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        Swal.fire("Deleted!", "User has been deleted.", "success");  // Success alert
        fetchUsers();  // Refresh user list after deletion
      } catch (error) {
        console.error("Error deleting user:", error);
        Swal.fire("Error", "Failed to delete user", "error");  // Show error alert
      }
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5 animated fadeIn">
      {/* Go Back button to navigate back */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2 className="text-center mb-4">Manage Users</h2>

      <div className="table-responsive">
        {/* Table displaying list of users */}
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
            {/* Show message if no users found */}
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found.
                </td>
              </tr>
            ) : (
              // Map over users to display each row
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className={user.approved ? "table-success" : "table-warning"} // Row color based on approval
                >
                  <td>{index + 1}</td> {/* Serial number */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.approved ? "✅ Approved" : "❌ Pending"}</td> {/* Approval status */}
                  <td>
                    {/* Show Approve button only if user is not approved */}
                    {!user.approved && (
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleApprove(user.id)}
                      >
                        Approve
                      </button>
                    )}
                    {/* Delete button */}
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
