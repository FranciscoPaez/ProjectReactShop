import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNavBar from '../LogoNavBar/LogoNavBar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Link to='/'><LogoNavBar/></Link>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="COLECCIONES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nike Sportswear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Running</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fútbol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Skateboarding</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Skateboarding</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">UNITE</Nav.Link>
            <Nav.Link href="#link">NIKE JOURNAL</Nav.Link>
            <Nav.Link href="#link">TIENDAS</Nav.Link>
            <Nav.Link href="#link">SNKRS</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;