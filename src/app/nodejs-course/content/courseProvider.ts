import { ISubtopic, courseData } from "./course";
export const findSubTopicBySlug = (slug: string): ISubtopic | undefined => {
  let subtopic: ISubtopic | undefined = undefined;
  courseData.chapters.forEach((chapter) => {
    chapter.topics.forEach((topic) => {
      topic.subtopics.forEach((st) => {
        if (st.slug === slug) {
          subtopic = st;
        }
      });
    });
  });
  return subtopic;
};
