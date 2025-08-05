import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Admissions from "./Pages/Admissions/Admissions";
import Contact from "./Pages/Contact/Contact";

import AdminLogin from "./Pages/AdminLogin/Admin/AdminLogin";
import AdminDashboard from "./Pages/AdminLogin/AdminDashboard/AdminDashboard";
import UserLogin from "./UserLogin/UserAuth/UserAuth";
import UserDashboard from "./UserLogin/UserDashboard/UserDashboard";

import CreatePost from "./Pages/AdminLogin/CreatePost";
import ViewUsers from "./Pages/AdminLogin/ViewUsers/ViewUsers";
import AdminPosts from "./Pages/AdminLogin/AdminPosts";
import AdminFeedback from "./Pages/AdminLogin/AdminFeedback";
import ViewMessages from "./Pages/AdminLogin/ViewMessages";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />


          {/* Admin Routes */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/create-post" element={<CreatePost />} />
            <Route path="/admin/users" element={<ViewUsers />} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            <Route path="/admin/feedback" element={<AdminFeedback />} />
            <Route path="/admin/messages" element={<ViewMessages />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
