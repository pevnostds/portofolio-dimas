import {Container,Nav,Navbar} from 'react-bootstrap';

export const  NavbarComponent = () => {
  return (
    <Navbar className='navbar p-3'>
      <Container> 
        <Navbar.Brand href="#home"><strong>Dimas Surya</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pendidikan">Pendidikan</Nav.Link>
            <Nav.Link href="#skills">Skill</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
