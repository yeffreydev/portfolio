import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Pomodoro and Timer App",
    features: [],
    description: `This project was developed using only HTML, CSS, and JavaScript. It is a simple app with basic pomodoro and timer functionality that I built to practice my skills.`,
    deployLink: "https://yeffreydev.github.io/timer-and-pomo-app/",
    codeLink: "https://github.com/yeffreydev/timer-and-pomo-app",
    image: "/projects/timer-and-pomo.png",
    images: [],
  },
  {
    title: "Catalo de Productos",
    description:
      "Este proyecto ha sido creado para tener un catalago de productos simple, con una interfaz agradable y limpia, y que puedas iniciar tu emprendimiento de tienda digital desde ahora gracias a que puedes iniciar solo con un whatsapp y sin más cosas complejas, el usuario podra enviarte un mensaje de los productos que desea, también tiene un sistema de carrito que facilitara al usuario gestionar sus compras.",
    features: [],
    deployLink: "https://fillbox.shop",
    codeLink: "",
    image: "/projects/cat-products.png",
  },
  {
    title: "Gest Fina",
    features: [],
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
