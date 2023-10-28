"use client";
import { LegacyRef, MouseEventHandler, useContext, useEffect, useRef, useState } from "react";
// import logo from "./../../public/white_logo.svg";
import logo from "./../../public/logo.svg";
import Image from "next/image";
import { IconType } from "react-icons";
import { FiSun, FiMoon, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { AppContext } from "@/app/AppProvider";

const NavBarItem = ({ link, title }: { link?: string; title?: string; Icon?: IconType }) => {
  return (
    <li className="">
      <Link className="hover:underline-offset-1 hover:underline" href={link!}>
        {title}
      </Link>
    </li>
  );
};
const NavBarItemMobile = ({ link, title, Icon, imgSrc, click }: { link?: string; title?: string; Icon?: IconType; imgSrc?: string; click?: MouseEventHandler }) => {
  return (
    <li className="border-b hover:bg-white hover:bg-opacity-10 relative border-[#383c3c] border-opacity-20 flex h-[50px] items-center justify-end">
      {link ? (
        <Link onClick={click} className="w-full pr-5 items-center justify-end  flex h-full absolute" href={link}>
          <span>{title}</span>
        </Link>
      ) : (
        <button onClick={click} className="flex items-center pr-5 w-full justify-end h-full  gap-3">
          <span>{title} </span>
          {Icon && <Icon />} {imgSrc && <Image src={imgSrc} alt="icon" width={20} height={20} />}
        </button>
      )}
    </li>
  );
};
const NavBar = () => {
  return (
    <nav className="pr-3 hidden md:block">
      <ul className="flex  w-ful justify-end gap-5 md:gap-10">
        <NavBarItem link="/" title="Home" />
        {/* <NavBarItem link="/projects" title="Projects" /> */}
        <NavBarItem link="/services" title="Services" />
        <NavBarItem link="/blog" title="Blog" />
        <NavBarItem link="/nodejs-course" title="NodeJS Course" />
      </ul>
    </nav>
  );
};
const NavBarMobile = ({ isOpen, myRef, click }: { isOpen: boolean; myRef: LegacyRef<HTMLUListElement> | undefined; click: MouseEventHandler }) => {
  return (
    <ul
      ref={myRef}
      className={`${
        isOpen ? "w-full" : "w-0"
      } flex max-w-[300px] overflow-hidden right-0 transition-all duration-200 bg-[#383c3c] backdrop-filter backdrop-blur-md shadow-sm bg-opacity-90 h-[calc(100vh-65px)] md:hidden  flex-col fixed z-10 top-[65px] `}
    >
      {/* <NavBarItemMobile click={click} title="Dark" Icon={FiMoon} /> */}
      {/* <NavBarItemMobile click={click} title="EN" imgSrc="https://cdn-icons-png.flaticon.com/128/197/197374.png" /> */}
      <NavBarItemMobile click={click} link="/" title="Home" />
      {/* <NavBarItemMobile click={click} link="/projects" title="Projects" /> */}
      <NavBarItemMobile click={click} link="/services" title="Services" />
      <NavBarItemMobile click={click} link="/blog" title="Blog" />
      <NavBarItemMobile click={click} link="/nodejs-course" title="NodeJS Course" />
    </ul>
  );
};
const ThemeButtton = () => {
  return (
    <button className="hidden md:inline-block">
      <FiSun className="text-2xl" />
      {/* <FiMoon /> */}
    </button>
  );
};

const MenuButton = ({ toggle, isOpen }: { toggle: MouseEventHandler<HTMLButtonElement>; isOpen: boolean }) => {
  return (
    <button onClick={toggle} className={`absolute  md:hidden transition-all duration-200 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}>
      <FiMenu className="text-3xl" />
    </button>
  );
};
const MenuButtonX = ({ toggle, isOpen }: { toggle: MouseEventHandler<HTMLButtonElement>; isOpen: boolean }) => {
  return (
    <button onClick={toggle} className={`absolute  md:hidden transition-all duration-200 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}>
      <FiX className="text-3xl" />
    </button>
  );
};

const CartButton = () => {
  const { cart } = useContext(AppContext);
  const count = cart.reduce((acc, curr) => acc + curr.count, 0);
  return (
    <Link className="relative" href={"/cart"}>
      {count > 0 && <span className="text-red-500 absolute text-sm font-bold top-[-13px] right-[-8px]">{count > 8 ? "+9" : count}</span>}
      <FiShoppingCart className="text-2xl" />
    </Link>
  );
};
export default function Header() {
  const [navColur, setNavColour] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  const navRef = useRef<HTMLUListElement>(null);
  const menuIconContainerRef = useRef<HTMLDivElement>(null);

  const handleToggleNav = () => {
    setActiveNav(!activeNav);
  };

  useEffect(() => {
    const srollHandler = () => setNavColour(window ? window.scrollY > 5 : false);
    window ? window.addEventListener("scroll", srollHandler) : false;
  }, []);

  const closeNav = () => {
    setActiveNav(false);
  };

  const handleDownOutsideNav = (e: MouseEvent) => {
    const isNavContainE = navRef.current?.contains(e.target as Node);
    const isMenuContainE = menuIconContainerRef.current?.contains(e.target as Node);
    if (!isNavContainE && !isMenuContainE) {
      closeNav();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", handleDownOutsideNav);
  }

  return (
    <div
      className={`items-center border-b border-[#383c3c] border-opacity-5 w-full z-10 bg-[#232424] fixed top-0 flex h-[65px] transition-[top] duration-200 ease-out ${
        navColur && "bg-opacity-30 backdrop-filter backdrop-blur-md  shadow-lg"
      }`}
    >
      <div className="flex justify-between px-2 items-center mx-auto md:w-11/12 w-full">
        <div className="max-w-[70px]">
          <Link href="/" className="h-[49px] max-w-[69px] grid place-items-center">
            <Image className=" top-0 lef-0  w-[68px] h-[49px]" src={logo} alt="logo yeffrey dev" />
          </Link>
        </div>
        <NavBar />
        <NavBarMobile click={closeNav} myRef={navRef} isOpen={activeNav} />
        <div className="flex gap-5 items-center">
          {/* <ThemeButtton /> */}
          {/* <LangButton /> */}
          {/* <CartButton /> */}
          <div ref={menuIconContainerRef} className="relative  w-[30px] h-[30px] md:hidden grid place-items-center">
            <MenuButton isOpen={activeNav} toggle={handleToggleNav} />
            <MenuButtonX isOpen={activeNav} toggle={handleToggleNav} />
          </div>
        </div>
      </div>
    </div>
  );
}
