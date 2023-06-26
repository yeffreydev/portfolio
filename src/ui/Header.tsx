"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import logo from "./../../public/white_logo.svg";
import Image from "next/image";
import { IconType } from "react-icons";
import { FiSun, FiMoon, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const NavBarItem = ({ link, title }: { link?: string; title?: string; Icon?: IconType }) => {
  return (
    <li className="">
      <Link className="text-lg hover:underline-offset-1 hover:underline" href={link!}>
        {title}
      </Link>
    </li>
  );
};
const NavBarItemMobile = ({ link, title, Icon, imgSrc }: { link?: string; title?: string; Icon?: IconType; imgSrc?: string }) => {
  return (
    <li className="border-b hover:bg-white hover:bg-opacity-10 relative border-white border-opacity-20 flex h-[50px] items-center justify-end">
      {link ? (
        <Link className="w-full pr-5 items-center justify-end  flex h-full absolute" href={link}>
          <span>{title}</span>
        </Link>
      ) : (
        <button className="flex items-center pr-5 w-full justify-end h-full  gap-3">
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
        <NavBarItem link="/projects" title="Projects" />
        <NavBarItem link="/blog" title="Blog" />
        <NavBarItem link="/about" title="About" />
      </ul>
    </nav>
  );
};
const NavBarMobile = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ul
      className={`${
        isOpen ? "w-full" : "w-0"
      } flex max-w-[300px] overflow-hidden right-0 transition-all duration-200 bg-[#323535] backdrop-filter backdrop-blur-md shadow-sm bg-opacity-90 h-[calc(100vh-65px)] md:hidden  flex-col w-full fixed z-10 top-[65px] `}
    >
      <NavBarItemMobile title="Dark" Icon={FiMoon} />
      <NavBarItemMobile title="EN" imgSrc="https://cdn-icons-png.flaticon.com/128/197/197374.png" />
      <NavBarItemMobile link="/projects" title="Projects" />
      <NavBarItemMobile link="/blog" title="Blog" />
      <NavBarItemMobile link="/about" title="About" />
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

const LangButton = () => {
  return (
    <button className="hidden md:flex gap-1 bg-black px-2 py-1 items-center">
      <span>EN</span>
      <Image width={20} height={20} src="https://cdn-icons-png.flaticon.com/128/197/197374.png" alt="UK Flag" />
      {/* <Image width={20} height={20} src="https://cdn-icons-png.flaticon.com/128/197/197593.png" alt="UK Flag" /> */}
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
  return (
    <button>
      <FiShoppingCart className="text-2xl" />
    </button>
  );
};
export default function Header() {
  const [navColur, setNavColour] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  const handleToggleNav = () => {
    setActiveNav(!activeNav);
  };
  useEffect(() => {
    const srollHandler = () => setNavColour(window ? window.scrollY > 5 : false);
    window ? window.addEventListener("scroll", srollHandler) : false;
  }, []);
  return (
    <div
      className={`items-center border-b border-white border-opacity-5 w-full z-10 bg-[#323535] fixed top-0 flex h-[65px] transition-[top] duration-200 ease-out ${
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
        <NavBarMobile isOpen={activeNav} />
        <div className="flex gap-5 items-center">
          <ThemeButtton />
          <LangButton />
          <CartButton />

          <div className="relative  w-[50px] h-[50px] md:hidden grid place-items-center">
            <MenuButton isOpen={activeNav} toggle={handleToggleNav} />
            <MenuButtonX isOpen={activeNav} toggle={handleToggleNav} />
          </div>
        </div>
      </div>
    </div>
  );
}
