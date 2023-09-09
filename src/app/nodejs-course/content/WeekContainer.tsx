"use client";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import { useState } from "react";

interface Props extends React.PropsWithChildren {
  title: string;
}
const WeekContainer: React.FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenContent = () => setIsOpen(!isOpen);
  return (
    <div className="ml-2 bg-[#cce5e5]">
      <div onClick={handleOpenContent} className="flex items-center cursor-pointer bg-[#89a2a2] rounded-b-xl">
        <span className="text-white">{isOpen ? <FaAngleDown /> : <FaAngleRight />}</span> <h3 className="text-lg text-white font-semibold">{title}</h3>
      </div>
      <div className={`mx-2 flex-col gap-3 mt-2 ${isOpen ? "flex" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default WeekContainer;
