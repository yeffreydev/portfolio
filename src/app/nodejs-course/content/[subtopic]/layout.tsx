import { Menu } from "./Menu";
import { courseData } from "../course";
import { OpenMenu } from "./MenuController";
import { Chapter } from "./Chapter";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto w-full md:w-11/12 pb-[50px]">
      <Menu />
      <div className="flex flex-col md:flex-row  py-2 items-center justify-between">
        <OpenMenu />
      </div>
      <div className="flex min-h-[300px]">
        <div className="w-4/12 hidden md:block ">
          <h1 className="py-3 text-2xl font-bold">{courseData.title}</h1>
          {courseData.chapters.map((chapter, index) => {
            return <Chapter key={index} title={chapter.title} topics={chapter.topics} />;
          })}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
