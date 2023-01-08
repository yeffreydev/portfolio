import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/components/NavBar.css";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";
const NavBarLink = ({ Icon, path, cPath, sCPath, text, onclick }: { Icon: ReactElement; path: string; cPath: string; text: string; sCPath: Dispatch<SetStateAction<string>>; onclick: () => void }) => {
  return (
    <li>
      <Link
        className={cPath === path ? "active" : ""}
        onClick={() => {
          sCPath(path);
          onclick();
        }}
        to={path}
      >
        <span>
          {Icon}
          {text}
        </span>
      </Link>
    </li>
  );
};
const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [isActiveBar, setIsActiveBar] = useState(false);
  return (
    <nav>
      <ul className={`navbar-ul ${isActiveBar ? "active" : ""}`}>
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Home"
          cPath={currentPath}
          sCPath={setCurrentPath}
          path="/"
          Icon={<AiOutlineHome />}
        />
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Projects"
          cPath={currentPath}
          sCPath={setCurrentPath}
          path="/projects"
          Icon={<AiOutlineUser />}
        />
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Contact"
          cPath={currentPath}
          sCPath={setCurrentPath}
          path="/contact"
          Icon={<AiOutlineFundProjectionScreen />}
        />
      </ul>
      {/* <NavBarLink text="Projects" cPath={currentPath} sCPath={setCurrentPath} path="/projects" Icon={<AiOutlineUser />} /> */}
      <li className="nav-bars" onClick={() => setIsActiveBar(!isActiveBar)}>
        <HiBars3BottomRight />
      </li>
    </nav>
  );
};

export default Navbar;
