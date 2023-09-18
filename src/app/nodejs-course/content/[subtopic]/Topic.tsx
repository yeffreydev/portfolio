import TopicContainer from "../TopicContainer";
import { SubTopic } from "./SubTopic";
import { ISubtopic } from "../course";
export const Topic = ({ title, subtopics, index }: { title: string; subtopics: ISubtopic[]; index: number }) => {
  return (
    <TopicContainer index={index} title={title}>
      {subtopics.map((subtopic, index) => {
        return <SubTopic slug={subtopic.slug} key={index} title={subtopic.title} length={subtopics.length} index={index} />;
      })}
    </TopicContainer>
  );
};
