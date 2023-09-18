"use client";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import { useState } from "react";
import CheckBox from "./CheckBox";

interface Props extends React.PropsWithChildren {
  title: string;
}
const TopicContainer: React.FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenContent = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-col">
      <div onClick={handleOpenContent} className="flex mx-2 py-3 gap-2 items-center cursor-pointer px-2 relative border-b border-black">
        <CheckBox completed />
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="ml-auto">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      <div onClick={handleOpenContent} className="flex items-center cursor-pointer bg-[#89a2a2] rounded-b-xl"></div>
      <div className={`ml-2 pt-3 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default TopicContainer;
