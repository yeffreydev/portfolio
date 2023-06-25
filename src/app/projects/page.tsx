import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Pomodoro and Timer App",
    description: `this project was developed using only HTML, css and Javascript and it's a simple app with basic pomodoro and timer functionality that I built to practice my skills.`,
    deployLink: "https://yeffreydev.github.io/timer-and-pomo-app/",
    codeLink: "https://github.com/yeffreydev/timer-and-pomo-app",
    image: "/projects/timer-and-pomo.png",
  },
  {
    title: "Soccer App",
    description: ` I developed this app for practice my backend skills,  data structure and real time connection, this project was developed with NextJs for frontend, and NodeJs with Typescript for backend. I used Socket.io for real time connection and MongoDB for database.`,
    deployLink: "https://bb200-client.vercel.app/app",
    codeLink: "",
    image: "/projects/soccer-app.png",
  },
];

function page() {
  return (
    <div className="mt-[70px] w-11/12 mx-auto flex flex-wrap gap-3 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, index) => {
          return <ProjectItem image={project.image} codeLink={project.codeLink} deployLink={project.deployLink} key={index} description={project.description} title={project.title} />;
        })}
      </div>
    </div>
  );
}

export default page;
