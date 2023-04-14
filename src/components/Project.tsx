import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons/lib";
import { GrGithub } from "react-icons/gr";
import { TbExternalLink } from "react-icons/tb";
import { ReactElement } from "react";

export interface IRightProject {
  skills: string[];
  stack: { icon: IconType; name: string }[];
}
export interface ILeftProject {
  title: string;
  img: string;
  projectType: string;
  url: string;
  Description: () => JSX.Element;
  source: string;
}
export interface IProject extends ILeftProject, IRightProject {}

const RightProject = ({ p }: { p: IRightProject }) => {
  const { skills, stack } = p;
  return (
    <div className="flex flex-col flex-1 gap-3">
      <div>
        <h2 className="text-xl text-center md:text-left font-semibold">Skills I use</h2>
        <ul className="list-disc mt-2 flex flex-col gap-2 w-10/12 md:w-full mx-auto">
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-center md:text-left">Stack</h2>
        <ul className="mt-2 w-10/12 flex flex-col gap-2 mx-auto md:w-full">
          {stack.map((stack, index) => {
            return (
              <li key={index} className="flex text-white items-center gap-2">
                <stack.icon stroke="white" className="text-white [&>*]:stroke-white " color="#fff" fill="#fff" />
                <span className=" text-sm">{stack.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const LeftProject = ({ p }: { p: ILeftProject }) => {
  const { title, projectType, Description, source, img, url } = p;
  return (
    <div className="flex flex-col mx-auto md:w-5/12 gap-2 flex-1">
      <div className="text-center md:text-left">
        <h1 className="leading-5 text-2xl font-bold">{title}</h1>
        <p className="text-[#6F9FCF]">
          {projectType} {/* Full Stack | forntend | backend */}
        </p>
      </div>
      <Link className="bg-black group mx-auto md:mx-0 w-[300px] h-[150px] inline-block relative" target="_blank" href={url}>
        <TbExternalLink className="text-white absolute top-2 right-2 z-10 hidden group-hover:inline-block" />
        {/* image link */}
        <Image className="hover:opacity-50 duration-75 bg-cover object-cover w-full h-full" width={300} height={150} src={img} alt="" />
      </Link>
      <div className="w-full">
        {/*Project description */}
        {Description()}
      </div>
      <Link target={"_blank"} className="px-3 mx-auto md:mx-0 py-1 flex items-center gap-2 bg-gray-800 w-min whitespace-nowrap rounded-xl" href={source}>
        <span>Source code</span>
        <GrGithub />
      </Link>
    </div>
  );
};
export default function Project({ project }: { project: IProject }) {
  return (
    <div className="flex pl-5 pr-2 md:pl-0 md:pr-0 flex-col pb-3 border-b md:flex-row md:justify-start gap-10">
      <LeftProject p={project} />
      <RightProject p={project} />
    </div>
  );
}
