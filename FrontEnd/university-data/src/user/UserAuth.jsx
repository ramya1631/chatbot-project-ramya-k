import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./UserAuth.css";

function UserAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(true);
    setName("");
    setEmail("");
    setPassword("");
  }, [location.key]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      Swal.fire("Warning", "Please fill all fields", "warning");
      return;
    }


    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:8080/api/users/login", {
          email,
          password,
        });



        const { status, user } = res.data;

        if (status === "success") {
          Swal.fire("Login Successful", "Welcome to the dashboard", "success");

          // ✅ Store login status and user info
          localStorage.setItem("userLoggedIn", "true");
          localStorage.setItem("userName", user.name || "");
          localStorage.setItem("userEmail", user.email || "");


          // ✅ Navigate to dashboard and force reload for navbar to update
          navigate("/user/dashboard");
          window.location.reload();
        } else if (status === "pending") {
          Swal.fire("Pending", "Admin has not yet approved your account", "info");
        } else {
          Swal.fire("Invalid", "Invalid credentials", "error");
        }
      } else {
        const res = await axios.post("http://localhost:8080/api/users/register", {
          name,
          email,
          password,
        });


        if (res.data.status === "registered") {
          Swal.fire("Success", "Registration successful. Await admin approval", "success");
          setIsLogin(true);
        } else {
          Swal.fire("Error", res.data.message || "Registration failed", "error");
        }
      }
    }  catch (err) {
  const errorMessage =
    err.response?.data?.message || err.message || "Something went wrong";
  Swal.fire("Error", errorMessage, "error");
}

  };


  return (
    <div className="auth-body">
      <div className="auth-container">
        <div className="auth-box glass">
          <h2>{isLogin ? "User Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                className="auth-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Enter valid Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="auth-button" type="submit">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p className="auth-switch">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span onClick={toggleForm}>Register</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={toggleForm}>Login</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
