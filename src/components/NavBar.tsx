import React from "react";
import "./../assets/NavBar.css";
const Navbar = () => {
  return (
    <ul id="navbar">
      <li>
        <a href="#about_me">About Me</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact_me">Contact Me</a>
      </li>
    </ul>
  );
};

export default Navbar;
