import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navResponsive.scss";

function NavResponsive() {
  return (
    <div>
      <Navbar
        fixed="top"
        key="md"
        bg="primary"
        expand="md"
        variant="dark"
        className="NavBar nav--image"
      >
        <Container
          fluid
          className="d-flex justify-content-between nav--container"
        >
          <Navbar.Brand href="/" className="nav--title">
            Global Warming
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Navbar.Brand href="/">Global Warming</Navbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end pe-3">
                <Nav.Link className="nav--page" href="temperature">
                  Temperature
                </Nav.Link>
                <Nav.Link className="nav--page" href="co2">
                  Co2
                </Nav.Link>
                <Nav.Link className="nav--page" href="n2o">
                  N2o
                </Nav.Link>
                <Nav.Link className="nav--page" href="methane">
                  Methane
                </Nav.Link>
                <Nav.Link className="nav--page" href="articIce">
                  Artic Ice
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavResponsive;
