import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { name, email });
    // Thực hiện tìm kiếm với các giá trị name và email
  };

  return (
    <div className="header mb-4">
      <Card>
        <Card.Header>List</Card.Header>
        <Card.Body>
          <Row className="d-flex align-items-center">
            {/* Column cho Name Search */}
            <Col md={4} xs={12} className="mb-2">
              <Form.Control
                type="text"
                placeholder="Search by Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>

            {/* Column cho Email Search */}
            <Col md={4} xs={12} className="mb-2">
              <Form.Control
                type="email"
                placeholder="Search by Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>

            {/* Column cho Button Search */}
            <Col md={4} xs={12} className="mb-2 d-flex justify-content-center">
              <Button variant="primary" onClick={handleSearch}>
                <FaSearch /> Search
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
