import DayContentCheckBox from "./DayContentCheckBox";
import WeekContainer from "./WeekContainer";
type CourseContentI = PartContentI[];
const courseContent: CourseContentI = [
  {
    title: "Primera Parte - JavaScript",
    content: [
      {
        title: "Semana 1",
        content: [
          {
            day: "1",
            title: "Fundamentos de JavaScript",
            description: "En esta clase aprenderemos los fundamentos de JavaScript",
            subContent: [
              {
                title: "¿Qué es JavaScript?",
                description: `JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas. Una página web dinámica es aquella que incorpora efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones o enlaces, etc. Este tipo de páginas web se crean con JavaScript.
                también se utiliza en aplicaciones web, aplicaciones de servidor, aplicaciones móviles y de escritorio.`,
              },
              { title: "La consola del Navegador" },
              { title: "Ejercicio Declarar Variables", description: "declarar variables de tipo string y de tipo number" },
            ],
            completed: false,
          },
          { day: "2", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "3", title: "Estructura de Datos JavaScript", subContent: [], completed: false },
          { day: "4", title: "Estructura de Datos JavaScript", subContent: [], completed: false },
          { day: "5", title: "Algoritmos con JavaScript", subContent: [], completed: false },
          { day: "6", title: "Algoritmos con JavaScript", subContent: [], completed: false },
          { day: "7", title: "Día de Practicar", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 2",
        content: [
          { day: "8", title: "Programación Orientada a Objetos JavaScript", subContent: [], completed: false },
          { day: "9", title: "Programación Orientada a Objetos JavaScript", subContent: [], completed: false },
          { day: "10", title: "Manipulación del DOM JavaScript", subContent: [], completed: false },
          { day: "11", title: "Manipulación del DOM JavaScript", subContent: [], completed: false },
          { day: "12", title: "Manipulación del DOM JavaScript", subContent: [], completed: false },
          { day: "12", title: "Manipulación del DOM JavaScript", subContent: [], completed: false },
          { day: "14", title: "Día de Práctica", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 3",
        content: [
          { day: "15", title: "Inicio Proyecto Primera Parte", subContent: [], completed: false },
          { day: "16", title: "Proyecto - Primera Parte", subContent: [], completed: false },
          { day: "17", title: "Proyecto - Primera Parte", subContent: [], completed: false },
          { day: "18", title: "Proyecto - Primera Parte", subContent: [], completed: false },
          { day: "19", title: "Proyecto - Primera Parte", subContent: [], completed: false },
          { day: "20", title: "Proyecto - Primera Parte", subContent: [], completed: false },
          { day: "20", title: "Fin Proyecto - Primera Parte", subContent: [], completed: false },
        ],
      },
    ],
  },
  {
    title: "Segunda Parte - NodeJS",
    content: [
      {
        title: "Semana 4",
        content: [
          { day: "21", title: "Fundamentos de NodeJS", subContent: [], completed: false },
          { day: "22", title: "Fundamentos de NodeJS", subContent: [], completed: false },
          { day: "23", title: "Creando una Simple REST API con NodeJS", subContent: [], completed: false },
          { day: "24", title: "Creando una  Simple REST API con NodeJS", subContent: [], completed: false },
          { day: "25", title: "Express Framework Introducción, REST API con Express", subContent: [], completed: false },
          { day: "26", title: "Express Framework, REST API con Express", subContent: [], completed: false },
          { day: "27", title: "Día de Práctica", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 5",
        content: [
          { day: "28", title: "Libreria Socket.io Introducción: ¿Qué son los Web Sockets?", subContent: [], completed: false },
          { day: "29", title: "Web Sockets con Socket.io", subContent: [], completed: false },
          { day: "30", title: "Introducción a SQL", subContent: [], completed: false },
          { day: "31", title: "Aprendiendo SQL", subContent: [], completed: false },
          { day: "32", title: "Introducción a MySQL", subContent: [], completed: false },
          { day: "33", title: "Trabajando con MySQL", subContent: [], completed: false },
          { day: "34", title: "Dia de Práctica", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 6",
        content: [
          { day: "35", title: "Introducción a Prisma-ORM", subContent: [], completed: false },
          { day: "36", title: "Trabajando con Primsa-ORM", subContent: [], completed: false },
          { day: "37", title: "API con MYSQL y Prisma", subContent: [], completed: false },
          { day: "38", title: "API con MYSQL y Prisma", subContent: [], completed: false },
          { day: "39", title: "Introducción Authenticacion con passportJS y JWT", subContent: [], completed: false },
          { day: "40", title: "Authenticando Usuarios", subContent: [], completed: false },
          { day: "41", title: "Día de Práctica-Laboratorio", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 7",
        content: [
          { day: "42", title: "Introducción a Roles con JWT", subContent: [], completed: false },
          { day: "43", title: "Creando Roles para nuestros Usuarios", subContent: [], completed: false },
          { day: "44", title: "Creando Roles para Nuestros Usuarios", subContent: [], completed: false },
          { day: "45", title: "Iniciando API demo de Usuarios", subContent: [], completed: false },
          { day: "46", title: "Proyecto demo de Usuarios", subContent: [], completed: false },
          { day: "47", title: "Iniciando Proyecto Final del Tic Tac Toe - Proyecto Final", subContent: [], completed: false },
          { day: "48", title: "Día de Práctica", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 8",
        content: [
          { day: "49", title: "Trabajando Proyecto Final - Tica Tac Toe", subContent: [], completed: false },
          { day: "50", title: "Trabajando Proyecto Final - Tica Tac Toe", subContent: [], completed: false },
          { day: "51", title: "Trabajando Proyecto Final - Tica Tac Toe", subContent: [], completed: false },
          { day: "52", title: "Trabajando Proyecto Final - Tica Tac Toe", subContent: [], completed: false },
          { day: "53", title: "Trabajando Proyecto Final - Tica Tac Toe", subContent: [], completed: false },
          { day: "54", title: "Trabajando Proyecto Final - Tica Tac Toe", subContent: [], completed: false },
          { day: "55", title: "Día de Práctica", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 9",
        content: [
          { day: "56", title: "Introducción a Git y GitHub - Trabajando en Equipo", subContent: [], completed: false },
          { day: "57", title: "Reto en Equipo con Git y GitHub", subContent: [], completed: false },
          { day: "58", title: "Reto en Equipo con Git y GitHub", subContent: [], completed: false },
          { day: "59", title: "Reto en Equipo con Git y GitHub", subContent: [], completed: false },
          { day: "60", title: "Agradecimientos y Continuacion de la comunidad", subContent: [], completed: false },
        ],
      },
    ],
  },
];
interface PartContentI {
  title: string;
  content: WeekContentI[];
}
interface SubTopicI {
  title: string;
  description?: string;
}
interface DayContentI {
  day: string;
  title: string;
  description?: string;
  completed: boolean;
  subContent: SubTopicI[];
}
interface WeekContentI {
  title: string;
  content: DayContentI[];
}

const SubContent = ({ subContent }: { subContent: SubTopicI[] }) => {
  if (!subContent.length) return null;
  return (
    <ul className="flex flex-col gap-1 list-disc ml-3 bg-[#3a4747]  p-3">
      {subContent.map((item, index) => {
        return (
          <li className="ml-3 text-white font-semibold" key={index}>
            {item.title}
            <p className="text-sm font-normal">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};
const DayContent = ({ day, title, completed, subContent }: DayContentI) => {
  return (
    <div className="text-base flex flex-col gap-2 bg-[#bcdddd] p-1 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <span className="font-bold">{`Día ${day}`}</span>
          <span>{title}</span>
        </div>
        <DayContentCheckBox completed={completed} />
      </div>
      <div className="flex flex-col gap-2">
        <SubContent subContent={subContent} />
        <a className="underline" href="#">
          Ver Grabacion
        </a>
      </div>
    </div>
  );
};
const WeekContent = ({ title, content }: WeekContentI) => {
  return (
    <WeekContainer title={title}>
      <div className="flex flex-col gap-3">
        {content.map((item, index) => {
          return <DayContent key={index} day={item.day} title={item.title} completed={item.completed} subContent={item.subContent} />;
        })}
      </div>
    </WeekContainer>
  );
};
const PartContent = ({ title, content }: PartContentI) => {
  return (
    <div className="font-semibold mt-5 text-xl flex flex-col gap-3">
      <h2>{title}</h2>
      {/*week 1*/}
      {content.map((item, index) => {
        return <WeekContent key={index} title={item.title} content={item.content}></WeekContent>;
      })}
    </div>
  );
};

const CourseContentPage = () => {
  return (
    <div className="mx-auto w-full md:w-11/12 pb-[50px]">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Course de NodeJS version 1.0 </h1>
        {/* <span>id: 38294892</span> */}
      </div>
      {courseContent.map((item, index) => {
        return <PartContent key={index} title={item.title} content={item.content} />;
      })}
    </div>
  );
};

export default CourseContentPage;
