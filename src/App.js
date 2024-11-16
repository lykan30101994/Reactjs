import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import UserListPage from "./pages/Users/UserListPage";
import UserCreatePage from "./pages/Users/UserCreatePage";
import UserEditPage from "./pages/Users/UserEditPage";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<UserListPage />} />
            <Route path="/create-user" element={<UserCreatePage />} />
            <Route path="/users/edit/:id" element={<UserEditPage />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
