import Typewriter from "typewriter-effect";
import React from "react";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Web Developer",
          "Backend Web Developer",
          "Web Design",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
