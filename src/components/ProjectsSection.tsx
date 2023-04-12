import ContenWidth from "@/ui/ContentWidth";
import Wave from "@/ui/Wave";
import { ReactNode } from "react";
import Project from "./Project";

const ProjectsList = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-16 mt-10">{children}</div>;
};
export default function ProjectsSection() {
  return (
    <div id="projects" className="relative min-h-screen bg-[#393B5C] pt-[50px]">
      <ContenWidth>
        <div>
          <h1 className="text-3xl border-b-4 pb-2 text-center md:text-left font-bold">My Projects </h1>
          <ProjectsList>
            <Project />
            <Project />
            <Project />
            <Project />
          </ProjectsList>
        </div>
      </ContenWidth>
      <div className="w-screen">
        <Wave fill="#252638" />
      </div>
    </div>
  );
}
