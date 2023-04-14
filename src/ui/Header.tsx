"use client";
import { useEffect, useState } from "react";
import logo from "./../../public/white_logo.svg";
import Image from "next/image";
export default function Header() {
  const [navColur, setNavColour] = useState(false);

  useEffect(() => {
    const srollHandler = () => setNavColour(window ? window.scrollY >= 5 : false);
    window ? window.addEventListener("scroll", srollHandler) : false;
  }, []);
  return (
    <div
      className={`items-center w-full z-10 bg-black fixed top-0 flex h-[50px] border-gray-500 border-b transition-[top] duration-200 ease-out ${
        navColur && "bg-opacity-30 backdrop-filter backdrop-blur-md  shadow-lg"
      }`}
    >
      <div className="flex px-2 items-center mx-auto md:w-9/12 lg:w-8/12 w-full">
        <div className="max-w-[70px]">
          <a href="#home" className="h-[49px] max-w-[69px] grid place-items-center">
            <Image className=" top-0 lef-0  w-[68px] h-[49px]" src={logo} alt="logo yeffrey dev" />
          </a>
        </div>
        <nav className="flex-1 pr-3">
          <ul className="flex  w-ful justify-end gap-5 md:gap-10">
            <li>
              <a className="hover:underline-offset-1 hover:underline" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline-offset-1 hover:underline" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:underline-offset-1 hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
