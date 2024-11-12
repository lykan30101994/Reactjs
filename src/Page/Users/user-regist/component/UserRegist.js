import React, { useState } from "react";
import { Button, Form, Modal, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateUser = ({ onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", image: "" });
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Validate the form
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "Name is required.";
    }
    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid.";
    }
    if (!image) {
      validationErrors.image = "Image is required.";
    }

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleConfirmSave = (confirm) => {
    if (confirm) {
      onSave({ name, email, image });
      navigate("/users");
    }
    setShowModal(false);
  };

  return (
    <div className="create-user-form">
      <Card className="shadow-lg p-4 rounded">
        <Card.Body>
          <h3 className="text-center mb-4">Create New User</h3>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!errors.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formImage">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    isInvalid={!!errors.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {image && (
              <div className="mb-3 text-center">
                <img
                  src={image}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                onClick={handleSave}
                className="px-4 py-2"
              >
                Save
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Modal confirm Save */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Save</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to save this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="primary" onClick={() => handleConfirmSave(true)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateUser;
