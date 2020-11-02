import React from "react";
import { Top } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";
const logo = {
  width: "70px",
  height: "35px",
};

const Header: React.FC = () => {
  return (
    <Top>
      <span>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/7c/Event_Cinemas_Logo.png"
            style={logo}
            alt="Logo"
          />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/categories">Categories</Link>
      </span>
      <span>
        <Link to="/login">Login</Link>
        <Link to="/sigup">Sigup</Link>
      </span>
    </Top>
  );
};

export default Header;
