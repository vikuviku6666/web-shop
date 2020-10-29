import React from "react";
import { Top } from "../styles/HeaderStyle";

const Header: React.FC = () => {
  return (
    <Top>
      <span>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Movies</a>
      </span>
      <span>
        <a href="#">Login</a>
        <a href="#">Sigup</a>
      </span>
    </Top>
  );
};

export default Header;
