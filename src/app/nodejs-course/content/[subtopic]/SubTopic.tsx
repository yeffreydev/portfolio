import Link from "next/link";
import CheckBox from "../CheckBox";

export const SubTopic = ({ slug, title, length, index }: { title: string; length: number; index: number; slug: string }) => {
  return (
    <Link href={`/nodejs-course/content/${slug}`} className="flex py-2 cursor-pointer relative hover:bg-red-100 items-stretch">
      <div className="w-[30px] flex justify-center items-center flex-shrink-0 overflow-hidden">
        {length === 1 || index === 0 ? null : <div className="absolute bg-black border border-black h-[calc((100%-15px)/2)] top-0"></div>}
        {length === 1 || index === length - 1 ? null : <div className="absolute bg-black border border-black h-[calc((100%-15px)/2)] bottom-0"></div>}
        <CheckBox completed />
      </div>
      <h3 className="">{title}</h3>
    </Link>
  );
};
