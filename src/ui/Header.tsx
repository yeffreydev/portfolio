import { useState } from "react";
export default function Header() {
  const [navColur, setNavColour] = useState(false);
  const srollHandler = () => setNavColour(window.scrollY >= 5);
  window.addEventListener("scroll", srollHandler);
  return (
    <div
      className={`items-center w-full bg-white fixed top-0 flex h-[50px] border-gray-300 border-b transition-[top] duration-200 ease-out ${
        navColur && "bg-opacity-30 backdrop-filter backdrop-blur-md  shadow-lg"
      }`}
    >
      <div className="flex px-2 mx-auto md:w-9/12 lg:w-8/12 w-full">
        <div>
          <a href="#home">logo</a>
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
