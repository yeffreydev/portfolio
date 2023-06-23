import React from "react";
import ProjectItem from "./ProjectItem";

function page() {
  return (
    <div className="mt-[70px] w-11/12 mx-auto flex flex-wrap gap-3 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}

export default page;
