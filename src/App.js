import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Page/Login/LoginPage'
import Users from './Page/Users/UserPage'
import Sidebar from './Component/Sidebar'
function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/home" render={() => <div>Home</div>} />
          <Route path="/category" render={() => <div>Category</div>} />
          <Route path="/product" render={() => <div>Product</div>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
