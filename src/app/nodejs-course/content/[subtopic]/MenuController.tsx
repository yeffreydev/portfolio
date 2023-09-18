"use client";
import { FaAngleDown } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "./Provider";
export const OpenMenu = () => {
  const { setOpenMenu } = useContext(Context);
  const handleClick = () => {
    setOpenMenu(true);
  };
  return (
    <button onClick={handleClick} className="flex bg-[#9eb3b3] text-white w-full justify-center md:hidden items-center gap-2">
      <span>Ver Contenido</span> <FaAngleDown />
    </button>
  );
};