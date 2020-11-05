import React from "react";
import { Top } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { IMovie } from './Main';
import { Navbar, Nav } from "react-bootstrap";
interface IImageProps {
  myValue: IMovie[];
}

const logo = {
  width: "100px",
  height: "40px",
  paddingBottom: "5px"
};

const Header: React.FC<IImageProps> = (props: IImageProps) => {
 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7c/Event_Cinemas_Logo.png"
          style={logo}
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
         
          <Nav.Link href="/about">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link eventKey={2} href="/cart">
            <span>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span>{props.myValue.length}</span>
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
