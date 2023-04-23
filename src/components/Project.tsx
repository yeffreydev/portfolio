import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons/lib";
import { GrGithub } from "react-icons/gr";
import { TbExternalLink } from "react-icons/tb";

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
    <div className="flex flex-col lg:w-min gap-3">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl text-left font-semibold  whitespace-nowrap">Skills I use</h2>
        <ul className="ml-1 flex flex-wrap gap-5 lg:flex-col lg:gap-3">
          {skills.map((skill, index) => {
            return (
              <li className="whitespace-nowrap" key={index}>
                - {skill}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-3 ">
        <h2 className="text-xl font-semibold text-left">Stack</h2>
        <ul className="ml-1 flex-wrap flex gap-5 lg:flex-col lg:gap-3">
          {stack.map((stack, index) => {
            return (
              <li key={index} className="flex w-min text-white items-center gap-1">
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
    <div className="flex flex-col lg:flex-1 mx-auto gap-2">
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
      <div className="flex gap-3">
        <Link target={"_blank"} className="px-3 hover:opacity-70 mx-auto md:mx-0 py-1 flex items-center gap-2 bg-gray-800 w-min whitespace-nowrap rounded-xl" href={source}>
          <span>Source code</span>
          <GrGithub />
        </Link>
        <Link target={"_blank"} className="px-3 hover:opacity-70 mx-auto md:mx-0 py-1 flex items-center gap-2 bg-gray-800 w-min whitespace-nowrap rounded-xl" href={url}>
          <span>Demo</span>
          <TbExternalLink />
        </Link>
      </div>
    </div>
  );
};
export default function Project({ project }: { project: IProject }) {
  return (
    <div className="flex pl-5 pr-2 lg:flex-row md:pl-0 md:pr-0 flex-col pb-3 border-b md:justify-start gap-10">
      <LeftProject p={project} />
      <RightProject p={project} />
    </div>
  );
}
