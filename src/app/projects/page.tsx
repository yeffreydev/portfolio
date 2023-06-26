import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Pomodoro and Timer App",
    description: `This project was developed using only HTML, CSS, and JavaScript. It is a simple app with basic pomodoro and timer functionality that I built to practice my skills.`,
    deployLink: "https://yeffreydev.github.io/timer-and-pomo-app/",
    codeLink: "https://github.com/yeffreydev/timer-and-pomo-app",
    image: "/projects/timer-and-pomo.png",
  },
  {
    title: "Soccer App",
    description: ` I developed this app to practice my backend skills, data structure, and real-time connections. This project was developed with NextJs for the frontend and NodeJs with Typescript for the backend. I used Socket.io for real-time connections and MongoDB for the database.`,
    deployLink: "https://bb200-client.vercel.app/app",
    codeLink: "",
    image: "/projects/soccer-app.png",
  },
  {
    title: "Gest Fina",
    description: `
    University Project: A fundamental Android app, developed with React Native, for managing finances. It allows transaction editing and real-time balance monitoring.
    `,
    deployLink: "https://gest-fina.netlify.app/",
    codeLink: "https://github.com/yeffreydev/gestFina-innovationProject",
    image: "/projects/gest-fina-app.png",
  },
];

function page() {
  return (
    <div className="mt-[70px] mb-10 w-11/12 mx-auto flex flex-wrap gap-3 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, index) => {
          return <ProjectItem image={project.image} codeLink={project.codeLink} deployLink={project.deployLink} key={index} description={project.description} title={project.title} />;
        })}
      </div>
    </div>
  );
}

export default page;
