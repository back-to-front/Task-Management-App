import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router";
import "./Navbar.css";

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const handleNavClose = () => setExpanded(false);
  const expand = "sm";

  return (
    <Navbar
      sticky='top'
      expand={expand}
      expanded={expanded}
      onToggle={setExpanded}
      className='bg-body-tertiary'
    >
      <Container fluid>
        <NavLink to='/' className='navLink navTitle' onClick={handleNavClose}>
          Task Management
        </NavLink>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement='end'
          show={expanded}
          onHide={handleNavClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <NavLink
                to='/todo'
                className='navLink home'
                onClick={handleNavClose}
              >
                Todos
              </NavLink>
              <NavLink
                to='/contact'
                className='navLink contact'
                onClick={handleNavClose}
              >
                Contact
              </NavLink>
              <NavLink
                to='/contact#faq'
                className='navLink'
                onClick={handleNavClose}
              >
                FAQ
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
