"use client";
import { ReactNode, createContext, useState } from "react";
import { readTopics } from "./courseProvider";
import { ITopic } from "./course";

interface ITopicProps extends ITopic {
  open: boolean;
}
interface IProviderProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  topics: ITopicProps[];
  handleTopicOpen: (index: number) => void;
}
const topics = readTopics();
const initialState: IProviderProps = {
  openMenu: false,
  setOpenMenu: () => {},
  topics: topics.map((topic) => ({ ...topic, open: false })),
  handleTopicOpen: () => {},
};
export const Context = createContext(initialState);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(initialState.openMenu);
  const [topics, setSubtopics] = useState(initialState.topics);

  const handleTopicOpen = (index: number) => {
    const newTopics = topics.map((topic, i) => {
      if (i === index) {
        return { ...topic, open: !topic.open };
      }
      return { ...topic, open: false };
    });
    setSubtopics(newTopics);
  };

  return <Context.Provider value={{ topics, handleTopicOpen, openMenu, setOpenMenu }}>{children}</Context.Provider>;
};
