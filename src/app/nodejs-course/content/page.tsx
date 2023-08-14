import WeekContainer from "./WeekContainer";
type CourseContentI = PartContentI[];
const courseContent: CourseContentI = [
  {
    title: "Primera Parte - JavaScript",
    content: [
      {
        title: "Semana 1",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", completed: false },
          { day: "2", title: "Fundamentos de JavaScript", completed: false },
          { day: "3", title: "Fundamentos de JavaScript", completed: false },
          { day: "4", title: "Fundamentos de JavaScript", completed: false },
          { day: "5", title: "Fundamentos de JavaScript", completed: false },
        ],
      },
      {
        title: "Semana 2",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", completed: false },
          { day: "2", title: "Fundamentos de JavaScript", completed: false },
          { day: "3", title: "Fundamentos de JavaScript", completed: false },
          { day: "4", title: "Fundamentos de JavaScript", completed: false },
          { day: "5", title: "Fundamentos de JavaScript", completed: false },
        ],
      },
      {
        title: "Semana 3",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", completed: false },
          { day: "2", title: "Fundamentos de JavaScript", completed: false },
          { day: "3", title: "Fundamentos de JavaScript", completed: false },
          { day: "4", title: "Fundamentos de JavaScript", completed: false },
          { day: "5", title: "Fundamentos de JavaScript", completed: false },
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
          { day: "1", title: "Fundamentos de JavaScript", completed: false },
          { day: "2", title: "Fundamentos de JavaScript", completed: false },
          { day: "3", title: "Fundamentos de JavaScript", completed: false },
          { day: "4", title: "Fundamentos de JavaScript", completed: false },
          { day: "5", title: "Fundamentos de JavaScript", completed: false },
        ],
      },
      {
        title: "Semana 5",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", completed: false },
          { day: "2", title: "Fundamentos de JavaScript", completed: false },
          { day: "3", title: "Fundamentos de JavaScript", completed: false },
          { day: "4", title: "Fundamentos de JavaScript", completed: false },
          { day: "5", title: "Fundamentos de JavaScript", completed: false },
        ],
      },
      {
        title: "Semana 6",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", completed: false },
          { day: "2", title: "Fundamentos de JavaScript", completed: false },
          { day: "3", title: "Fundamentos de JavaScript", completed: false },
          { day: "4", title: "Fundamentos de JavaScript", completed: false },
          { day: "5", title: "Fundamentos de JavaScript", completed: false },
        ],
      },
    ],
  },
];
interface PartContentI {
  title: string;
  content: WeekContentI[];
}
interface DayContentI {
  day: string;
  title: string;
  completed: boolean;
}
interface WeekContentI {
  title: string;
  content: DayContentI[];
}
const DayContent = ({ day, title, completed }: DayContentI) => {
  return (
    <div className="text-base flex justify-between items-center gap-5 bg-black bg-opacity-5 p-1 rounded-md">
      <div className="flex gap-3">
        <span className="font-bold">{`Día ${day}`}</span>
        <span>{title}</span>
      </div>
      <input className="cursor-pointer w-[15px] h-[15px]" checked={completed} type="checkbox" />
    </div>
  );
};
const WeekContent = ({ title, content }: WeekContentI) => {
  return (
    <WeekContainer title={title}>
      <div className="flex flex-col gap-3">
        {content.map((item, index) => {
          return <DayContent key={index} day={item.day} title={item.title} completed={item.completed} />;
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
const content: DayContentI[] = [
  { day: "1", title: "Introducción al Curso, Fundamentos de JavaScript", completed: false },
  { day: "2", title: "Introducción al Curso, Fundamentos de JavaScript", completed: false },
  { day: "3", title: "Introducción al Curso, Fundamentos de JavaScript", completed: false },
  { day: "4", title: "Introducción al Curso, Fundamentos de JavaScript", completed: false },
  { day: "5", title: "Introducción al Curso, Fundamentos de JavaScript", completed: false },
];
const CourseContentPage = () => {
  return (
    <div className="mx-auto w-full md:w-11/12 pb-[50px]">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Course de NodeJS version 1.0 </h1>
        <span>id: 38294892</span>
      </div>
      {/*part 1*/}
      {courseContent.map((item, index) => {
        return <PartContent key={index} title={item.title} content={item.content} />;
      })}
    </div>
  );
};

export default CourseContentPage;
