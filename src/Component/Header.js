import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../styles/common/Header.css";

const Header = () => {
  const location = useLocation();
  const { id } = useParams();

  const getTitle = () => { 
    switch (location.pathname) {
      case "/users":
        return "User List";
      case "/create-user":
        return "User Registration";
      case `/users/edit/${id}`:
        return id ? `Edit User (ID: ${id})` : "Edit User";
      case "/category":
        return "Category List";
      case "/product":
        return "Product List";
      default:
        return "Home";
    }
  };

  return (
    <div className="breadcrumb">
      <h1>{getTitle()}</h1>
    </div>
  );
};

export default Header;
