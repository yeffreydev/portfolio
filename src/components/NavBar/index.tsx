import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./../../assets/css/components/NavBar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./styles.module.css";
import NavBarLink from "./NavBarLink";
import links from "./links";
export default function Navbar() {
  let location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isActiveBar, setIsActiveBar] = useState(false);
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <nav>
      <ul className={`navbar-ul ${isActiveBar ? "active" : ""}`}>
        {links.map((item, index) => {
          return (
            <NavBarLink
              key={index}
              onclick={() => {
                setIsActiveBar(false);
              }}
              text={item.name}
              cPath={currentPath}
              path={item.path}
              Icon={<item.icon />}
            />
          );
        })}
        <button className={styles.container}>More</button>
      </ul>
      <li className="nav-bars" onClick={() => setIsActiveBar(!isActiveBar)}>
        <HiBars3BottomRight />
      </li>
    </nav>
  );
}
