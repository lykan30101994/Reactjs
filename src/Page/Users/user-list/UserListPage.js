import React, { useState, useEffect, useRef } from "react";
import Header from "./component/Header"; // Import Header
import Body from "./component/Body"; // Import Body
import Footer from "./component/Footer"; // Import Footer
import "./UserList.css";
import "../../../App.css"
import { getApi } from "../../../Utils/callApi";


function Users() {
  const [searchResults, setSearchResults] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      if(hasFetched.current) return;
      hasFetched.current  = true
      const response = await getApi("http://localhost:5000/users");
      if (response.length > 0) {
        setSearchResults(response);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };


  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleDeleteUser = (deleteUserId) => {
    setSearchResults(searchResults.filter((user) => user.id !== deleteUserId));
  };

  return (
    <div>
      <div className="main">
        <Header onSearchResults={handleSearchResults} />
        <Body users={searchResults} onHandleDeleteUser={handleDeleteUser} />
        <Footer />
      </div>
    </div>
  );
}

export default Users;
