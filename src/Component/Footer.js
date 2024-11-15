import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../styles/common/Footer.css';
const Footer = () => {
  return (
    <div className="footer text-center">
        <Card>
            <Card.Header>
                <div className="social-icons">
                    <FaFacebook className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaInstagram className="social-icon" />
                </div>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </Card.Header>
        </Card>
     </div>
  );
};

export default Footer;