import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './user/Home';
import About from './user/About';
import AdminLogin from './user/AdminLogin';

import AdminPosts from './admin/AdminPosts';
import AdminFeedback from './Admin/AdminFeedback';
import Admissions from './user/Admissions';
import Contact from './user/Contact';
import CreatePost from './admin/CreatePost';
import Analytics from './admin/Analytics';
import ViewUsers from './admin/ViewUsers';
import ViewMessages from './admin/ViewMessages';
import UserDashboard from './user/UserDashboard';
import Chat from './user/Chat';
import AdminDashboard from './admin/AdminDashboard';
import AddNotice from './admin/AddNotice';
import UserAuth from './user/UserAuth'; // Assuming this is the correct import for user authentication



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/chat" element={<Chat />} />
       <Route path="/user/login" element={<UserAuth />} />} />



        {/* Admin Routes */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-post" element={<CreatePost />} />
        <Route path="/admin/posts" element={<AdminPosts />} />
        <Route path="/admin/AdminFeedback" element={<AdminFeedback />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/users" element={<ViewUsers />} />
        <Route path="/admin/messages" element={<ViewMessages />} />
        <Route path="/admin/add-notice" element={<AddNotice />} />
        <Route path="/admin/view-notices" element={<AddNotice />} />
        <Route path="/admin/view-users" element={<ViewUsers />} />
        <Route path="/admin/view-feedback" element={<AdminFeedback />} />
        <Route path="/admin/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
