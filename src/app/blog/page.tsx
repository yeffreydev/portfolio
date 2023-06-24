import React from "react";
import BlogItem from "./BlogItem";

const Item = () => {
  return (
    <div className="w-11/12 flex flex-col hover:bg-gray-600 p-2">
      <div className="w-full grid place-items-center">
        <div className="w-full h-[200px] bg-black"></div>
      </div>
      <div className="w-full">
        <h3 className="text-white">Item Name</h3>
        <p>S/ 100</p>
      </div>
    </div>
  );
};

function page() {
  return (
    <div className="mt-[60px] w-11/12 mx-auto flex gap-3">
      <div className="flex-1">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
