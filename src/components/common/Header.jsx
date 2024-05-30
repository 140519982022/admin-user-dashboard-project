import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-danger sticky z-3 sticky-top">
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bold'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'><FiMenu className='fs-2'/></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'>logout</Nav.Link>
            {/* <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'>Register</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
