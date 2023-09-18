"use client";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useContext } from "react";
import CheckBox from "./CheckBox";
import { Context } from "./Provider";

interface Props extends React.PropsWithChildren {
  title: string;
  index: number;
}
const TopicContainer: React.FC<Props> = ({ children, title, index }) => {
  const { topics, handleTopicOpen } = useContext(Context);
  const currentTopic = topics.find((topic, i) => i === index);
  const handleOpenContent = () => {
    handleTopicOpen(index);
  };
  return (
    <div className="flex flex-col">
      <div onClick={handleOpenContent} className="flex mx-2 py-3 gap-2 items-center cursor-pointer px-2 relative border-b border-black">
        <CheckBox completed />
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="ml-auto">{currentTopic?.open ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      <div onClick={handleOpenContent} className="flex items-center cursor-pointer bg-[#89a2a2] rounded-b-xl"></div>
      <div className={`ml-2 pt-3 ${currentTopic?.open ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default TopicContainer;
