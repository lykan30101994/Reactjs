import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/common/Header.css';  // Tạo file CSS riêng cho header nếu cần

const Header = () => {
  const location = useLocation();

  // Lấy tên màn hình từ URL, hoặc bạn có thể dùng logic khác tùy vào route
  const getTitle = () => {
    switch(location.pathname) {
      case '/users':
        return 'User List';
      case '/users/register':
        return 'User Registration';
      case '/category':
        return 'Category List';
      case '/product':
        return 'Product List';
      default:
        return 'Home';  // Mặc định
    }
  };

  return (
    <div className="breadcrumb">
      <h1>{getTitle()}</h1>
    </div>
  );
};

export default Header;
