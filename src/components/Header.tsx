import { Link } from "react-router-dom";
import Navbar from "./NavBar";

import "./../assets/Header.css";

const Header = () => {
  return (
    <header>
      <Link id="logo" to="/">
        <span>Y.E.</span>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
