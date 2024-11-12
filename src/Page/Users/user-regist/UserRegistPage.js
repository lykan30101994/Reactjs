import React from 'react';
import CreateUser from './component/UserRegist'; // Import Header
import './UserRegist.css'

function UserRegist() {
  return (
    <div>
      <div className="main">
        <CreateUser />
      </div>
    </div>
  );
};

export default UserRegist;