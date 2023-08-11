import React from "react";

const ContentContainer: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className="w-11/12 pt-[70px] mx-auto">{children}</div>;
};

export default ContentContainer;
