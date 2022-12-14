import { Link } from "react-router-dom";
import Navbar from "./NavBar";

import "./../assets/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <Link id="logo" to="/">
          <span>Y.E.</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
