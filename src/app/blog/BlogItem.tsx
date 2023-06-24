import React from "react";

function BlogItem() {
  return (
    <div className="flex items-center py-3 border-b hover:text-white cursor-pointer pl-2 hover:bg-gray-600 hover:bg-opacity-40">
      <div className="flex flex-col flex-1">
        <span className="flex-1 text-xl">this is good title</span>
        <span className="w-[100px] text-sm text-gray-400">2023</span>
      </div>
      <div>
        <span className="italic text-sm">100 views</span>
      </div>
    </div>
  );
}

export default BlogItem;
