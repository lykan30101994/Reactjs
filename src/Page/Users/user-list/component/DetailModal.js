import { Modal, Button } from "react-bootstrap";

const DetailModal = ({ show, onHide, userToDetail }) => {
  return (
    <Modal
        show={show} onHide={onHide}
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
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default DetailModal;
