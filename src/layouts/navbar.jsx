import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComponent= ({ auth, ...props }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Pokemon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
          <Nav className="justify-content-end" activeKey="/">
            <LinkContainer to="/" className="pl-2">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
