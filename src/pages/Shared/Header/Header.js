import React from "react";
import { Link } from "react-router-dom";
const { Navbar, Container, Nav } = require("react-bootstrap");

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Volunteer-Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="donation">
                Donation
              </Nav.Link>
              <Nav.Link as={Link} to="events">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </div>
  );
};

export default Header;
