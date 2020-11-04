import React from "react";
import { Top } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { IMovie } from './Main';
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
        <Link to="/cart">
          <span>
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span>{props.myValue.length}</span>
          </span>
        </Link>
      </span>
    </Top>
  );
};

export default Header;
