import React from "react";
import { Link } from "react-router-dom";
import "./../assets/NavBar.css";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
const Navbar = ({
  onClickLeft,
  isOpen,
}: {
  onClickLeft: () => void;
  isOpen: boolean;
}) => {
  return (
    <ul className={isOpen ? "navbar-active navbar" : "navbar"}>
      <li>
        <Link to="/" onClick={onClickLeft}>
          <AiOutlineHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={onClickLeft}>
          <AiOutlineUser />
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={onClickLeft}>
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
