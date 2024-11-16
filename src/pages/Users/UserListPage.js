import React, { useState, useEffect, useRef } from "react";
import Search from "../../component/Search";
import SearchResults from "../../component/SearchResults";
import "../../styles/Users/UserListPage.css";
import "../../App.css"
import { getApi } from "../../services/api";


function UserListPage() {
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
        <Search onSearch={handleSearchResults} />
        <SearchResults users={searchResults} onHandleDeleteUser={handleDeleteUser}/>
      </div>
    </div>
  );
}

export default UserListPage;
