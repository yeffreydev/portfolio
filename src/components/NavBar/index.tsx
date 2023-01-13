import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./styles.module.css";
import NavBarLink from "./NavBarLink";
import links from "./links";
import Dropdown from "./Dropdown";
export default function Navbar() {
  let location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isActiveBar, setIsActiveBar] = useState(false);

  let ulRef = useRef<HTMLUListElement | null>(null);
  let barsRef = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ulRef!) {
        !ulRef.current?.contains(e.target as Node) && !barsRef.current?.contains(e.target as Node) && setIsActiveBar(false);
      }
    };
    isActiveBar && document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActiveBar]);

  return (
    <nav className={styles.nav}>
      <ul ref={ulRef} className={`${styles.navbar_ul} ${isActiveBar ? styles.active : ""}`}>
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
      </ul>
      <li ref={barsRef} className={styles.nav_bars} onClick={() => setIsActiveBar(!isActiveBar)}>
        <HiBars3BottomRight />
      </li>
      <Dropdown cPath={currentPath} onclick={() => setIsActiveBar(false)} />
    </nav>
  );
}
