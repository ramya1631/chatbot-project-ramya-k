import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import UniversityData from "./pages/UniversityData";
import Register from "./pages/Register";
import Chatbot from "./components/Chatbot";
import "./style.css";
function App() {
  return (
    <HashRouter>
      <div className="App">
          <Navbar />
          <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/student" element={<Students />} />
            <Route path="/uni" element={<UniversityData />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        </main>

        <Footer />
       <Chatbot />
      </div>
    </HashRouter>
  );
}

export default App;