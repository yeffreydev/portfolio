import React from "react";
import BlogItem from "./BlogItem";

const Item = () => {
  return (
    <div className="w-11/12 flex flex-col hover:bg-[#6bc1c1] hover:bg-opacity-30 p-2">
      <div className="w-full grid place-items-center">
        <div className="w-full h-[200px] bg-black"></div>
      </div>
      <div className="w-full">
        <h3 className="text-[#383c3c]">Item Name</h3>
        <p>S/ 100</p>
      </div>
    </div>
  );
};

function page() {
  return (
    <div className="mt-[80px] mb-[40px] w-11/12 mx-auto flex gap-3">
      <div className="flex-1">
        <BlogItem id="ensayo-comu-3" title="La influencia de la educación en la corrupción" year="2023" />
      </div>
      <div className="w-[300px] hidden md:block">
        <h2 className="my-3 text-2xl w-11/12 mx-auto">last merch</h2>
        <div className="flex flex-col gap-5 items-center">
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default page;
