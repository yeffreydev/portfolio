"use client";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import { useState } from "react";

interface Props extends React.PropsWithChildren {
  title: string;
}
const WeekContainer: React.FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="ml-2 bg-black bg-opacity-5">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center cursor-pointer bg-black bg-opacity-10 rounded-b-xl">
        <span>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</span> <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className={`mx-2 flex-col gap-3 mt-2 ${isOpen ? "flex" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default WeekContainer;
