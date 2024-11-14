import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { paginate } from "../../../../Utils/paginationUtils";
import TableComponent from "../../../../Component/TableComponent";
import PaginationComponent from "../../../../Component/Pagination";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const Body = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToDetail, setUserToDetail] = useState(null);
  const recordsPerPage = 5;
  const navigate = useNavigate();

  const { currentRecords, totalPages } = paginate(
    users,
    currentPage,
    recordsPerPage
  );

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

  const actions = [
    { label: "Details", variant: "info", icon: <FaEye /> },
    { label: "Edit", variant: "warning", icon: <FaEdit /> },
    { label: "Delete", variant: "danger", icon: <FaTrash /> },
  ];

  // Handle page change for pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle action click (View/Edit/Delete)
  const handleActionClick = (action, row) => {
    if (action.label === "Delete") {
      setUserToDelete(row);
      setShowModal(true);
    } else if (action.label === "Details") {
      // Redirect to details page
      setUserToDetail(row);
      setShowModalDetail(true);
    }
  };

  // Handle delete action
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${userToDelete.id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (response.ok) {
        setShowModal(false);
        console.log(showModal);
        setUserToDelete(null);
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  // Navigate to create new user page
  const handleCreateNewUser = () => {
    navigate("/create-user");
  };

  return (
    <div className="body mb-4">
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center table-container">
            <h5>Users List</h5>
            <Button variant="primary" onClick={handleCreateNewUser}>
              Create New
            </Button>
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
      {/* User details modal */}
      <Modal
        show={showModalDetail}
        onHide={() => setShowModalDetail(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userToDetail && (
            <div className="user-detail">
              <div className="user-avatar">
                <img
                  src={userToDetail.image}
                  alt={userToDetail.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="user-info">
                <h4>{userToDetail.name}</h4>
                <p>
                  <strong>Email:</strong> {userToDetail.email}
                </p>
                <p>
                  <strong>Full Name:</strong> {userToDetail.fullName}
                </p>
                <p>
                  <strong>Phone:</strong> {userToDetail.phone}
                </p>
                <p>
                  <strong>Address:</strong> {userToDetail.address}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {userToDetail.dateOfBirth}
                </p>
                <p>
                  <strong>Role:</strong> {userToDetail.role}
                </p>
                <p>
                  <strong>Interest:</strong> {userToDetail.interest}
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalDetail(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Body;
