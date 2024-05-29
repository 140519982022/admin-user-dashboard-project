import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-danger sticky">
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bold'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'>Play Quiz</Nav.Link>
            <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'>Add Quiz</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'>Log in</Nav.Link>
            <Nav.Link as={Link} to="/" className='text-white fw-bold text-decoration-none'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
