import React from "react";
import Header from "@/ui/Header";
import TopInfo from "./TopInfo";

function page() {
  return (
    <>
      <div className="h-[70px]">
        <Header />
      </div>
      <div className="w-full md:w-10/12 lg:w-7/12 mx-auto">
        <TopInfo />
      </div>
    </>
  );
}

export default page;
