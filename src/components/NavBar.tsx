import React from "react";
import { Link } from "react-router-dom";
import "./../assets/NavBar.css";
const Navbar = () => {
  return (
    <ul id="navbar">
      <li>
        <Link reloadDocument to="/#about_me">
          About Me
        </Link>
      </li>
      <li>
        <Link reloadDocument to="/#skills">
          Skills
        </Link>
      </li>
      <li>
        <Link reloadDocument to="/#projects">
          Projects
        </Link>
      </li>
      <li>
        <Link reloadDocument to="/#contact_me">
          Contact Me
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
