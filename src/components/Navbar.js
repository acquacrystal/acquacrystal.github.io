import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo1.png"; // ✅ Correct path
import "../styles/Navbar.css"; // Import custom CSS

function MyNavbar() {
  // State to control mobile dropdown expansion
  const [expanded, setExpanded] = useState(false);

  // When a nav link is clicked, collapse the menu
  const handleLinkClick = () => setExpanded(false);

  return (
    <BootstrapNavbar
      bg="light"
      expand="lg"
      sticky="top"
      className="border-bottom"
      expanded={expanded}
    >
      <Container>
        {/* Brand / Logo and Toggle in One Flex Container */}
        <div className="navbar-header">
          <BootstrapNavbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center"
            onClick={handleLinkClick}
          >
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="32"
              className="me-2"
            />
            <span className="fs-4">Acqua Crystal</span>
          </BootstrapNavbar.Brand>

          {/* Navbar Toggle (for mobile) */}
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
        </div>

        {/* Navbar Links */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              // to="/about"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              // to="/portfolio"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              // to="/services"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              // to="/contact"
              className="custom-nav-link"
              onClick={handleLinkClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default MyNavbar;
