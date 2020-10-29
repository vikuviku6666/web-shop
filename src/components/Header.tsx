import React from "react";
import { Top } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <Top>
      <span>
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
