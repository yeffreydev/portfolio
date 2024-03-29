import Link from "next/link";
import React from "react";

function BlogItem({ title, year, id }: { title: string; year: string; id: string }) {
  return (
    <Link href={`/blog/${id}`} className="flex items-center py-3 border-b border-[#383c3c] border-opacity-20 hover:text-[#131515] cursor-pointer pl-2 hover:bg-[#6bc1c1] hover:bg-opacity-20">
      <div className="flex flex-col flex-1">
        <span className="flex-1 text-xl font-semibold">{title}</span>
        <span className="w-[100px] text-sm text-gray-400">{year}</span>
      </div>
      <div>
        <span className="italic text-sm">+100 views</span>
      </div>
    </Link>
  );
}

export default BlogItem;
