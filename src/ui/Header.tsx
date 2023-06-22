"use client";
import { useEffect, useState } from "react";
import logo from "./../../public/white_logo.svg";
import Image from "next/image";
import { FiSun, FiMoon, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const NavBarItem = ({ link, title }: { link: string; title: string }) => {
  return (
    <li>
      <Link className="hover:underline-offset-1 hover:underline" href={link}>
        {title}
      </Link>
    </li>
  );
};
const NavBar = () => {
  return (
    <nav className=" pr-3">
      <ul className="flex  w-ful justify-end gap-5 md:gap-10">
        <NavBarItem link="/projects" title="Projects" />
        <NavBarItem link="/blog" title="Blog" />
        <NavBarItem link="/about" title="About" />
      </ul>
    </nav>
  );
};

const ThemeButtton = () => {
  return (
    <button>
      <FiSun />
      {/* <FiMoon /> */}
    </button>
  );
};

const LangButton = () => {
  return (
    <button className="flex gap-1 items-center">
      <span>EN</span>
      <Image width={20} height={20} src="https://cdn-icons-png.flaticon.com/128/197/197374.png" alt="UK Flag" />
      {/* <Image width={20} height={20} src="https://cdn-icons-png.flaticon.com/128/197/197593.png" alt="UK Flag" /> */}
    </button>
  );
};

const CartButton = () => {
  return (
    <button>
      <FiShoppingCart />
    </button>
  );
};
export default function Header() {
  const [navColur, setNavColour] = useState(false);
  useEffect(() => {
    const srollHandler = () => setNavColour(window ? window.scrollY >= 5 : false);
    window ? window.addEventListener("scroll", srollHandler) : false;
  }, []);
  return (
    <div
      className={`items-center w-full z-10 bg-[#202323] fixed top-0 flex h-[50px] transition-[top] duration-200 ease-out ${navColur && "bg-opacity-30 backdrop-filter backdrop-blur-md  shadow-lg"}`}
    >
      <div className="flex justify-between px-2 items-center mx-auto md:w-11/12 w-full">
        <div className="max-w-[70px]">
          <Link href="/" className="h-[49px] max-w-[69px] grid place-items-center">
            <Image className=" top-0 lef-0  w-[68px] h-[49px]" src={logo} alt="logo yeffrey dev" />
          </Link>
        </div>
        <NavBar />
        <div className="flex gap-3 items-center">
          <ThemeButtton />
          <LangButton />
          <CartButton />
        </div>
      </div>
    </div>
  );
}
