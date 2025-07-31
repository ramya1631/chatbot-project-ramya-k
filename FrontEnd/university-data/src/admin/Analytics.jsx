// src/components/admin/Analytics.jsx
import React from 'react';
import './Analytics.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const dummyData = [
  { name: 'Mon', messages: 50 },
  { name: 'Tue', messages: 80 },
  { name: 'Wed', messages: 65 },
  { name: 'Thu', messages: 90 },
  { name: 'Fri', messages: 75 },
  { name: 'Sat', messages: 40 },
  { name: 'Sun', messages: 30 },
];

function Analytics() {
  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <div className="analytics-page container mt-4">
      <h2>Dashboard Analytics</h2>

      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="analytics-metrics row">
        <div className="metric-card col-md-4">
          <h3>🧑‍💻 Users</h3>
          <p>120</p>
        </div>
        <div className="metric-card col-md-4">
          <h3>💬 Total Messages</h3>
          <p>530</p>
        </div>

      </div>

      <div className="chart-section mt-5">
        <h3>Weekly Chat Activity</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="messages" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
