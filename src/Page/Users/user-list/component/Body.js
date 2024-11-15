import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { paginate } from "../../../../Utils/paginationUtils";
import TableComponent from "../../../../Component/TableComponent";
import PaginationComponent from "../../../../Component/Pagination";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import DetailModal from "./DetailModal";

const Body = ({ users, onHandleDeleteUser }) => {
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleActionClick = (action, row) => {
    if (action.label === "Delete") {
      setUserToDelete(row);
      setShowModal(true);
    } else if (action.label === "Details") {
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
      if (response.ok) {
        setShowModal(false);
        setUserToDelete(null);
        onHandleDeleteUser(userToDelete.id)
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
      <DetailModal 
        show={showModalDetail}
        onHide={() => setShowModalDetail(false)}
        userToDetail={userToDetail}
      />
    </div>
  );
};

export default Body;
