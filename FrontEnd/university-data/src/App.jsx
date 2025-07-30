import React from 'react';
import AdminDashboard from './pages/admin/AdminDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import AdminPosts from './pages/admin/AdminPosts';
import AdminFeedback from './pages/admin/AdminFeedback';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import CreatePost from './pages/admin/CreatePost';
import Analytics from './pages/admin/Analytics';
import ViewUsers from './pages/admin/ViewUsers';
import ViewMessages from './pages/admin/ViewMessages';
import UserDashboard from './pages/user/UserDashboard';
import Chat from './pages/user/Chat';
import UserAuth from './pages/user/UserAuth'; // Assuming this is the correct import for user authentication

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/create-post" element={<CreatePost />} />

        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/login" element={<UserAuth />} />
<Route path="/admin/posts" element={<AdminPosts />} />
<Route path="/admin/feedback" element={<AdminFeedback />} />



<Route path="/user/dashboard" element={<UserDashboard />} />
<Route path="/user/chatbot" element={<Chat />} />


        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/users" element={<ViewUsers />} />
        <Route path="/admin/messages" element={<ViewMessages />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
