import { ISubtopic, ITopic, courseData } from "./course";
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

export const readSubTopics = (): ISubtopic[] => {
  let subtopics: ISubtopic[] = [];
  courseData.chapters.forEach((chapter) => {
    chapter.topics.forEach((topic) => {
      topic.subtopics.forEach((st) => {
        subtopics.push(st);
      });
    });
  });
  return subtopics;
};

export const readTopics = (): ITopic[] => {
  let topics: ITopic[] = [];
  courseData.chapters.forEach((chapter) => {
    chapter.topics.forEach((topic) => {
      topics.push(topic);
    });
  });
  return topics;
};
