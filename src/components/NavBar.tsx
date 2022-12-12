import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import "./../assets/NavBar.css";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

const NavBarLink = ({ Icon, path, cPath, sCPath }: { Icon: ReactElement; path: string; cPath: string; sCPath: Dispatch<SetStateAction<string>> }) => {
  return (
    <li>
      <Link className={cPath === path ? "active" : ""} onClick={() => sCPath(path)} to={path}>
        <span>
          {Icon}
          hola
        </span>
      </Link>
    </li>
  );
};
const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("/");
  return (
    <nav>
      <ul className="navbar-ul">
        <NavBarLink cPath={currentPath} sCPath={setCurrentPath} path="/" Icon={<AiOutlineHome />} />
        <NavBarLink cPath={currentPath} sCPath={setCurrentPath} path="/projects" Icon={<AiOutlineUser />} />
        <NavBarLink cPath={currentPath} sCPath={setCurrentPath} path="/contact" Icon={<AiOutlineFundProjectionScreen />} />
      </ul>
    </nav>
  );
};

export default Navbar;
