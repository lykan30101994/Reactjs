import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/SignUp/SignUpPage.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      newErrors.name = "Name is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/users");
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="signup-card p-5 shadow-lg">
        <h2 className="text-center mb-4">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label d-flex align-items-center">
              Full Name <span className="text-danger ms-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label d-flex align-items-center">
              Email Address <span className="text-danger ms-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label d-flex align-items-center">
              Password <span className="text-danger ms-1">*</span>
            </label>
            <input
              type="password"
              id="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="confirmPassword" className="form-label d-flex align-items-center">
              Confirm Password <span className="text-danger ms-1">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign Up
          </button>
          <div className="text-center">
            <small>
              Already have an account? <a href="/">Log in</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
