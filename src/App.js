import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import UserListPage from "./pages/Users/UserListPage";
import UserCreatePage from "./pages/Users/UserCreatePage";
import Sidebar from "./component/Sidebar";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<UserListPage />} />
            <Route path="/create-user" element={<UserCreatePage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
