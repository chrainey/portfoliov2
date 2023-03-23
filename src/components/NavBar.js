import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Chris Rainey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <div className="social-icon">
              <a href="mailto: chrainey22@gmail.com"><BsEnvelope size={25}/></a>
              <a href="https://github.com/chrainey"><BsGithub size={25}/></a>
              <a href="https://www.linkedin.com/in/chris-s-rainey/"><BsLinkedin size={25}/></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar