import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./ProjectItem.module.css";
import Image from "next/image";
function ProjectItem({ title, description, deployLink, codeLink, image }: { title: string; description: string; deployLink: string; codeLink: string; image: string }) {
  return (
    <div className="flex flex-col gap-2 max-w-[400px] mt-5 hover:bg-gray-600 hover:bg-opacity-10 p-2.5 rounded-lg">
      <div className="bg-black h-[200px] w-full relative">
        <a href={deployLink} className={`block ${styles["img-link"]} w-full h-full`} rel="noreferrer" target="_blank">
          <Image height={200} width={400} className="w-full h-full absolute object-cover" src={image} alt="" />
          <BiLinkExternal className="opacity-0 top-1 right-1 text-white  absolute" />
        </a>
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-justify flex-1">{description}</p>
        <div className="flex gap-3 mt-1">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noreferrer" className="bg-[#c7d6d633] text-[#383c3c] text-sm px-5 py-1 rounded-lg flex items-center gap-3 hover:text-white">
              <span>Code</span>
              <FaGithub />
            </a>
          )}
          <a href={deployLink} target="_blank" rel="noreferrer" className="bg-[#c7d6d633] py-1  text-[#383c3c] text-sm px-5 rounded-lg flex items-center gap-3 hover:text-white">
            <span>deploy</span>
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
