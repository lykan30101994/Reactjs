import React, { useState } from 'react';
import Header from './component/Header'; // Import Header
import Body from './component/Body' // Import Body
import Footer from './component/Footer'  // Import Footer
import './UserList.css'

function Users() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <div>
      <div className="main">
        <Header onSearchResults={handleSearchResults} />
        <Body users={searchResults}/>
        <Footer />
      </div>
    </div>
  );
};

export default Users;
