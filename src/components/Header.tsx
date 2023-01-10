import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import "./../assets/css/components/Header.css";
const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <Link id="logo" to="/">
          <img width={55} style={{ borderRadius: "5px" }} src="https://media.discordapp.net/attachments/1062032120979128340/1062065900582342686/ye.png" alt="logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
