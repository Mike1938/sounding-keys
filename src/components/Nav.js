import { Navbar, Container } from "react-bootstrap";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavCont = () => {
  return (
    <Navbar className="navColors" expand="lg">
      <Container>
        <Navbar.Brand href="/">Sounding Keys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
export default NavCont;
