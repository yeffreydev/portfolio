"use client";
import { FaTimes } from "react-icons/fa";
import CheckBox from "../CheckBox";
import TopicContainer from "../TopicContainer";

import { useContext } from "react";
import { Context } from "./Provider";
import { Chapter } from "./Chapter";
import { courseData } from "../course";

export const Menu = () => {
  const { openMenu, setOpenMenu } = useContext(Context);
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <div className={`w-full pl-2 bg-[#d8e7e7] ${openMenu ? "block" : "hidden"} md:hidden h-full top-0 left-0 z-10 fixed`}>
      <div className="h-[40px] flex justify-end">
        <button onClick={handleClose} className="bg-red-500 w-[40px] flex justify-center items-center cursor-pointer text-white">
          <FaTimes />
        </button>
      </div>
      <h1 className="py-3 text-2xl font-bold">{courseData.title}</h1>
      {courseData.chapters.map((chapter, index) => {
        return <Chapter key={index} title={chapter.title} topics={chapter.topics} />;
      })}
    </div>
  );
};
