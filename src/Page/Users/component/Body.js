import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"; // Import icons from react-icons
import UsersData from "../../../Mock/User.json"; // Import dữ liệu người dùng
import { paginate } from "../../../Utils/paginationUtils"; // Import paginate function
import TableComponent from "../../../Component/TableComponent"; // Import TableComponent
import PaginationComponent from "../../../Component/Pagination"; // Import PaginationComponent
import DeleteConfirmationModal from "./DeleteConfirmationModal"; // Import DeleteConfirmationModal

const Body = () => {
  const [users, setUsers] = useState([]); // State to hold users
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [userToDelete, setUserToDelete] = useState(null); // User to delete
  const recordsPerPage = 5;

  // Fetch data and initialize users when the component mounts
  useEffect(() => {
    setUsers(UsersData); // Initialize the users list with mock data
  }, []); // Empty dependency array ensures this runs only once after the first render

  // Use paginate to get current records and total pages
  const { currentRecords, totalPages } = paginate(
    users,
    currentPage,
    recordsPerPage
  );

  // Columns for the table
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    {
      header: "Image",
      accessor: "image",
      render: (row) => (
        <img
          src={row.image}
          alt={row.name}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
  ];

  // Actions for each row
  const actions = [
    { label: "Details", variant: "info", icon: <FaEye /> },
    { label: "Edit", variant: "warning", icon: <FaEdit /> },
    { label: "Delete", variant: "danger", icon: <FaTrash /> },
  ];

  // Handle page change in pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle action click (Delete)
  const handleActionClick = (action, row) => {
    if (action.label === "Delete") {
      setUserToDelete(row); // Set user to delete
      setShowModal(true); // Show modal for confirmation
    }
  };

  // Handle delete user
  const handleDelete = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userToDelete.id)
    );
    setShowModal(false); // Close modal
    setUserToDelete(null); // Reset userToDelete
  };

  // Close modal without deleting
  const handleCloseModal = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  return (
    <div className="body mb-4">
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center table-container">
            <h5>Users List</h5>
            <Button variant="primary">Create New</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <TableComponent
            data={currentRecords}
            columns={columns}
            actions={actions}
            onActionClick={handleActionClick}
          />
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Card.Body>
      </Card>

      <DeleteConfirmationModal
        show={showModal}
        onHide={handleCloseModal}
        userToDelete={userToDelete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Body;
