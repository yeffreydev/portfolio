import React from "react";
import { Link } from "react-router-dom";
import "./../assets/NavBar.css";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
const Navbar = () => {
  return (
    <ul id="navbar">
      <li>
        <Link to="/">
          <AiOutlineHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">
          <AiOutlineUser />
          About
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
