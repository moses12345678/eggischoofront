import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Image } from 'react-bootstrap';
import { FaHome, FaLink, FaSearch, FaSignOutAlt, FaUser , FaReadme,FaPortrait} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header2({ onLogout }) {
  return (
    <Navbar expand="lg" bg="light" className="align-items-center" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ marginLeft: '10px' }}>
          <Image
            src="/images/logo.jpg"
            alt="My Logo"
            style={{ width: '70px', height: '40px', borderRadius: '10%', boxShadow: '2px 2px 5px #888888' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
              <Link to="/home" className='nav-link'>
                  <FaHome /> Home
              </Link>
              <Nav.Link href="#action2">
              <FaUser /> Eleves
              </Nav.Link>
              <Link to="/classroom" className="nav-link">
                <FaReadme /> Classes
              </Link>
            <NavDropdown title="Plus" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/classroom" className="nav-link">
                  <FaReadme /> Classes
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                 <Link to="/classroom" className="nav-link">
                    <FaPortrait /> Professeur
                  </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                  <Link to="/classroom" className="nav-link">
                    <FaPortrait /> Autre Personnel
                  </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>*/}
          <Nav className="ml-auto"> {/* Push the menu to the right */}
              <Link to="/feedback" className="nav-link">
                <FaLink /> Mon Profile
              </Link>
              <Nav.Link onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
