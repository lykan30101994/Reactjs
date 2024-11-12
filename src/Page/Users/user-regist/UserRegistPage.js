import React from 'react';
import CreateUser from './component/UserRegist'; // Import Header
import './UserRegist.css'

function UserRegist() {
  const handleSaveUser = (user) => {
    console.log("User saved:", user);
  };
  return (
    <div>
      <div className="main">
        <CreateUser onSave={handleSaveUser}/>
      </div>
    </div>
  );
};

export default UserRegist;