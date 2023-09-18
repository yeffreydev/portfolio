import { courseData } from "./course";
import { redirect } from "next/navigation";

const CourseContentPage = () => {
  const firstSubTopic = courseData.chapters[0].topics[0].subtopics[0];
  if (firstSubTopic) {
    redirect(`/nodejs-course/content/${firstSubTopic.slug}`);
  }
  return <div></div>;
};

export default CourseContentPage;
