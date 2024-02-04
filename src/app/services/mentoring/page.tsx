import MentoringCard from "./MentoringCard";

const content = [
  {
    title: "Mentor Personal",
    price: "$50 / mes",
    description: `
      Ideal si has estado luchando por alcanzar tus objetivos en este campo y aún no lo has logrado. No significa que no tengas la capacidad innata para ello; más bien, son los miedos y la falta de disciplina los que te están limitando. En esta mentoría mensual, me comprometo a ayudarte a superar esos miedos, a cultivar la constancia y la disciplina en tu programación, guiándote hasta que alcances la meta de convertirte en un desarrollador exitoso capaz de crear productos y servicios impactantes para el mundo.`,
    link: "#",
  },
  {
    title: "Comunidad Premium.",
    price: "$10 / mes",
    description:
      "Todos los miembros de la comunidad premium tienen la oportunidad de participar de retos de programación y ganar premios, colaborar en proyectos, además de tener charlas de más de una hora por Meet o Discord. Durante estas sesiones, podrán compartir y escuchar experiencias como desarrolladores. Ver mas informacionn, (el dinero de esta membresia es para dar premios y financiar algunos eventos de la comunidad)",
    link: "#",
  },
  {
    title: "Asesoria Vence Tus Miedos y gana oportunidades.",
    price: "$30, 1 hora + 1 mes comunidad premium.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Asesoria Monetiza tus habilidades.",
    price: "$30 / 1 hora.+ 1 mes comunida premium",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Desarrolla conmigo un proyecto Full Stack.",
    price: "$30",
    description:
      "En este curso aprenderas a crear un proyecto con Next, Tailwind, MongoDB, NodeJS, Auth de usuarios con google, facebook y email, chat en tiempo real, subir archivos, estilos cont tailwind. tipo red social. sistema de likes y comentarios. ",
    link: "#",
  },
  {
    title: "Comunidad de whatsapp",
    price: "$Free",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
  {
    title: "Comunidad de discord",
    price: "$Free",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium error optio maiores consectetur vitae voluptatibus, fugit magni iure suscipit corporis a beatae sint ex
    quibusdam? Expedita voluptates modi dolorum?`,
    link: "#",
  },
];
export default function MentoringPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 w-11/12 mx-auto md:w-10/12 lg:w-9/12  gap-5">
      {content.map((item, i) => {
        return <MentoringCard key={i} title={item.title} price={item.price} description={item.description} link={item.link} />;
      })}
    </div>
  );
}
