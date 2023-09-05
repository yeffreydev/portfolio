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
          { day: "1", title: "Fundamentos de JavaScript", subContent: [{ title: "subtema 1" }, { title: "subtema 2" }, { title: "subtema 3" }], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 2",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 3",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
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
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 5",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
        ],
      },
      {
        title: "Semana 6",
        content: [
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
          { day: "1", title: "Fundamentos de JavaScript", subContent: [], completed: false },
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
}
interface DayContentI {
  day: string;
  title: string;
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
