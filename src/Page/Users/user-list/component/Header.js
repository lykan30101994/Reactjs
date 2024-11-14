import React, { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Header = ({ onSearchResults }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (response.ok) {
          const data = await response.json();
          onSearchResults(data);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [onSearchResults]);
  const handleSearch = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (name) queryParams.append("name", name);
      if (email) queryParams.append("email", email);

      const response = await fetch(
        `http://localhost:5000/users?${queryParams.toString()}`
      );
      if (response.ok) {
        const data = await response.json();
        onSearchResults(data);
      } else {
        console.error("Failed to fetch search results");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
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
