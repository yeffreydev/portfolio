import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../assets/css/components/NavBar.css";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";

const NavBarLink = ({ Icon, path, cPath, text, onclick }: { Icon: ReactElement; path: string; cPath: string; text: string; onclick: () => void }) => {
  return (
    <li>
      <Link
        className={cPath.replace(/\/\d+$/, "") === path ? "active" : ""}
        onClick={() => {
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
  let location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isActiveBar, setIsActiveBar] = useState(false);
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <nav>
      <ul className={`navbar-ul ${isActiveBar ? "active" : ""}`}>
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Home"
          cPath={currentPath}
          path="/"
          Icon={<AiOutlineHome />}
        />
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Projects"
          cPath={currentPath}
          path="/projects"
          Icon={<AiOutlineUser />}
        />
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Contact"
          cPath={currentPath}
          path="/contact"
          Icon={<AiOutlineFundProjectionScreen />}
        />
        <NavBarLink
          onclick={() => {
            setIsActiveBar(false);
          }}
          text="Sponsors"
          cPath={currentPath}
          path="/sponsors"
          Icon={<AiOutlineFundProjectionScreen />}
        />
        <button>More</button>
      </ul>
      {/* <NavBarLink text="Projects" cPath={currentPath} sCPath={setCurrentPath} path="/projects" Icon={<AiOutlineUser />} /> */}
      <li className="nav-bars" onClick={() => setIsActiveBar(!isActiveBar)}>
        <HiBars3BottomRight />
      </li>
    </nav>
  );
};

export default Navbar;
