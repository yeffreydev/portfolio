import TopicContainer from "../TopicContainer";
import { SubTopic } from "./SubTopic";
import { ISubtopic } from "../course";
export const Topic = ({ title, subtopics }: { title: string; subtopics: ISubtopic[] }) => {
  return (
    <TopicContainer title={title}>
      {subtopics.map((subtopic, index) => {
        return <SubTopic slug={subtopic.slug} key={index} title={subtopic.title} length={subtopics.length} index={index} />;
      })}
    </TopicContainer>
  );
};
