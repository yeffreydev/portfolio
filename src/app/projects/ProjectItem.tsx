import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
function ProjectItem() {
  return (
    <div className="flex flex-col gap-2 max-w-[400px] mt-5">
      <div className="bg-black h-[200px] w-full"></div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold">This is a title</h2>
        <p className="mt-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quia. Ipsa modi, adipisci atque soluta autem nemo nesciunt ipsam et, fugiat consequatur veniam, a laudantium tenetur! Aut
          amet nesciunt veniam?
        </p>
        <div className="flex gap-3 mt-1">
          <button className="bg-black text-sm px-3 rounded-lg flex items-center gap-3 hover:text-white">
            <span>Code</span>
            <FaGithub />
          </button>
          <button className="bg-black text-sm px-3 rounded-lg flex items-center gap-3 hover:text-white">
            <span>deploy</span>
            <BiLinkExternal />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
