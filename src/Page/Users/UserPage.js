import React from 'react';
import Header from '../Users/component/Header'; // Import Header
import Body from '../Users/component/Body' // Import Body
import Footer from '../Users/component/Footer'  // Import Footer
import './User.css'

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
