import { courseData } from "./course";
import { redirect } from "next/navigation";

const CourseContentPage = () => {
  const firstSubTopic = courseData.chapters[0].topics[0].subtopics[0];
  if (firstSubTopic) {
    redirect(`/nodejs-course/content/${firstSubTopic.slug}`);
  }
  return (
    <div className="mt-[100px]">
      <span className="font-bold text-xl text-center mx-auto">Cargando contenido...</span>
    </div>
  );
};

export default CourseContentPage;
