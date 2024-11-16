import React from 'react';
import CreateUser from './component/UserRegist';
import '../../styles/Users/UserCreatePage.css'

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