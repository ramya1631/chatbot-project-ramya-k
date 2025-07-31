import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

   import Navbar from './components/Navbar';

   // User pages
   import Home from './user/Home';
   import About from './user/About';
   import AdminLogin from './user/AdminLogin';
   import Contact from './user/Contact';
   import Admissions from './user/Admissions.jsx';
   import UserDashboard from './user/UserDashboard';
   import Chat from './user/Chat';
   import UserLogin from './user/UserLogin';      // Added UserLogin import
   import './user/Chat.jsx';

   // Admin pages
   import AdminDashboard from './admin/AdminDashboard';
   import AdminPosts from './admin/AdminPosts';
   import AdminFeedback from './admin/AdminFeedback';
   import CreatePost from './admin/CreatePost';
   import Analytics from './admin/Analytics';
   import ViewUsers from './admin/ViewUsers';
   import ViewMessages from './admin/ViewMessages';
     <Route path="/user/login" element={<UserLogin />} />
   import AddNotice from './admin/AddNotice.jsx';

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
           <Route path="/user/login" element={<UserLogin />} />      {/* Updated to UserLogin */}


           {/* Admin Routes */}
           <Route path="/adminlogin" element={<AdminLogin />} />
           <Route path="/add-notice" element={<AddNotice />} />
           <Route path="/admin/dashboard" element={<AdminDashboard />} />
           <Route path="/admin/create-post" element={<CreatePost />} />
           <Route path="/admin/posts" element={<AdminPosts />} />
           <Route path="/admin/feedback" element={<AdminFeedback />} />
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
