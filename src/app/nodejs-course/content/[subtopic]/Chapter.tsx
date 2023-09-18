import { Topic } from "./Topic";
import { ITopic } from "../course";
export const Chapter = ({ title, topics }: { title: string; topics: ITopic[] }) => {
  return (
    <div className="flex flex-col">
      <h1 className="py-3 text-xl font-semibold">{title}</h1>
      {topics.map((topic, index) => {
        return <Topic key={index} title={topic.title} subtopics={topic.subtopics} />;
      })}
    </div>
  );
};
