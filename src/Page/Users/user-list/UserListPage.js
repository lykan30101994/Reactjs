import React from 'react';
import Header from './component/Header'; // Import Header
import Body from './component/Body' // Import Body
import Footer from './component/Footer'  // Import Footer
import './UserList.css'

function Users() {
  return (
    <div>
      <div className="main">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Users;
