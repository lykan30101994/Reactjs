import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUsers, FaClipboardList, FaUserPlus, FaCog, FaProductHunt } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = () => {
  // State để quản lý việc mở/đóng sub-menu
  const [isUsersOpen, setIsUsersOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  // Hàm toggle cho menu Users
  const toggleUsersMenu = () => setIsUsersOpen(!isUsersOpen)
  const toggleCategoryMenu = () => setIsCategoryOpen(!isCategoryOpen)


  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">

        {/* Home link */}
        <Nav.Link as={Link} to="/home">
          <FaCog className="me-2" />
          Home
        </Nav.Link>

        {/* Users menu with toggle */}
        <Nav.Link onClick={toggleUsersMenu}>
          <FaUsers className="me-2" />
          Users
        </Nav.Link>
        {isUsersOpen && (
          <div className="ms-3">
            <Nav.Link as={Link} to="/users">
              <FaClipboardList className="me-2" />
              User List
            </Nav.Link>
            <Nav.Link as={Link} to="/users/register">
              <FaUserPlus className="me-2" />
              User Regist
            </Nav.Link>
          </div>
        )}

        {/* Category menu */}
        <Nav.Link onClick={toggleCategoryMenu}>
          <FaClipboardList className="me-2" />
          Category
        </Nav.Link>
        { isCategoryOpen && ( <div className='ms-3'>
            <Nav.Link as={Link} to = "/category">
              <FaClipboardList className='me-2' />
              Category List
            </Nav.Link>
            <Nav.Link as={Link} to = "/category">
              <FaUserPlus className='me-2' />
              Category Regirst
            </Nav.Link>
         </div>
        )}

        {/* Product menu */}
        <Nav.Link as={Link} to="/product">
          <FaProductHunt className="me-2" />
          Product
        </Nav.Link>

      </Nav>
    </div>
  );
};

export default Sidebar;
