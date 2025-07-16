import { useState } from "react";
import InputField from "../components/InputField";
import "./Register.css";

function Register() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    password: "",
  });

  // State for success message after submission
  const [successMessage, setSuccessMessage] = useState("");

  // State to show password validation error
  const [passwordError, setPasswordError] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check password validity (basic example)
    if (name === "password") {
      if (value.length < 6) {
        setPasswordError("Password must be at least 6 characters");
      } else {
        setPasswordError(""); // Clear error
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if password error
    if (passwordError) return;

    // Simulate successful submission
    setSuccessMessage(`Welcome, ${formData.name}! Registration complete.`);

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      university: "",
      password: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Your Account</h2>

        {/* Conditional rendering of success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="register-form">
          {/* Reusable InputField used for all fields */}
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="University Name"
            name="university"
            type="text"
            value={formData.university}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Show error below password if invalid */}
          {passwordError && <p className="error">{passwordError}</p>}

          <button type="submit" disabled={passwordError !== ""}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;