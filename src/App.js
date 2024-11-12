import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Page/Login/LoginPage'
import Users from './Page/Users/user-list/UserListPage'
import UserRegist from './Page/Users/user-regist/UserRegistPage'
import Sidebar from './Component/Sidebar'
function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create-user" element={<UserRegist />} />
          <Route path="/home" render={() => <div>Home</div>} />
          <Route path="/category" render={() => <div>Category</div>} />
          <Route path="/product" render={() => <div>Product</div>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
