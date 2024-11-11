// components/Header.js
import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Gửi từ khóa tìm kiếm lên cha
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <form onSubmit={handleSearch} className="d-flex">
        <input 
          type="text" 
          placeholder="Search users..." 
          className="form-control" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Search users..." 
          className="form-control" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Search users..." 
          className="form-control" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit" className="btn btn-primary ml-2">Search</button>
      </form>
      
    </div>
  );
};

export default Header;
