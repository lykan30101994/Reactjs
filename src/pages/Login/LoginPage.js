import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // Sử dụng useState để quản lý giá trị input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Hàm để xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra email và password
    if (email === '' || password === '') {
      setErrorMessage('Please fill in both fields');
    } else {
      // Nếu thông tin hợp lệ, xử lý đăng nhập (có thể gọi API ở đây)
      setErrorMessage('');
      console.log('Logged in with:', { email, password });
      // Reset form sau khi đăng nhập thành công
      setEmail('');
      setPassword('');
      navigate('/users');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              {/* Hiển thị thông báo lỗi nếu có */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

              {/* Form login */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4 w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
