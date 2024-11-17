import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Login/LoginPage.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    <div className="outer-container">
      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="login-card p-4 shadow-lg">
          <h2 className="text-center mb-4">Mango Shop</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label
                htmlFor="email"
                className="form-label d-flex align-items-center"
              >
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
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="password"
                className="form-label d-flex align-items-center"
              >
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
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
            <div className="text-center">
              <small>
                Don't have an account? <a href="/signup">Sign up</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
