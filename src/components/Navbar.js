import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  // Declare navbarRef and initialize it with null
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <Navbar bg="light" expand="xs" className="">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold hero-header">
            <Nav.Link as={Link} to="/">
              GadgetBoom
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setNavbarOpen(!isNavbarOpen)} />
          <Navbar.Collapse in={isNavbarOpen}>
            <Nav className="justify-content-end flex-grow-1 pe-3 nav-link">
              <Nav.Link as={Link} to="/allProducts" className='fw-bold fs-6'>
                All Products
              </Nav.Link>
              <Nav.Link as={Link} to="/phones" className='fw-bold fs-6'>
                Phones
              </Nav.Link>
              <Nav.Link as={Link} to="/accesories " className='fw-bold fs-6'>
                Accessories
              </Nav.Link>
              <Nav.Link as={Link} to="/laptops" className='fw-bold fs-6'>
                Laptops
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
