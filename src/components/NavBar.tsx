import React from "react";
import { Link } from "react-router-dom";
import "./../assets/NavBar.css";
const Navbar = () => {
  return (
    <ul id="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
};

export default Navbar;
