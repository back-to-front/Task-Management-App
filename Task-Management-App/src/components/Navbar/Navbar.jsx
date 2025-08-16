import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router";
import "./Navbar.css";

function OffcanvasExample() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          sticky='top'
          key={expand}
          expand={expand}
          className='bg-body-tertiary'
        >
          <Container fluid>
            <NavLink to='/' className='navLink navTitle'>
              Task Management
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <NavLink to='/todo' className='navLink home'>
                    Todos
                  </NavLink>
                  <NavLink to='/contact' className='navLink contact'>
                    Contact
                  </NavLink>
                  <NavLink to='/contact#faq' className='navLink'>
                    FAQ
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
