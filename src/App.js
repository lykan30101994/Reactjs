import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUpPage";
import UserListPage from "./pages/Users/UserListPage";
import UserCreatePage from "./pages/Users/UserCreatePage";
import UserEditPage from "./pages/Users/UserEditPage";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Footer from "./component/Footer";

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Ẩn Sidebar, Header, Footer cho Login và Signup
  const hideLayout = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Sidebar />}
      <div className={!hideLayout ? "main-content" : ""}>
        {!hideLayout && <Header />}
        {children}
        {!hideLayout && <Footer />}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/create-user" element={<UserCreatePage />} />
          <Route path="/users/edit/:id" element={<UserEditPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
