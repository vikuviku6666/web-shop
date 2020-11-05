import React from "react";
import { Navbar, Container }from "react-bootstrap";



const Footer: React.FC = () => {
  return (
    <Container className="p-0" fluid>
      <Navbar className="justify-content-center" expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">
          Address:<br/>
          Stockholm<br/>
          Sweden
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Footer;
