import Link from "next/link";
import Image from "next/image";

const RightProject = () => {
  return (
    <div className="flex flex-col flex-1 gap-3">
      <div>
        <h2 className="text-xl text-center md:text-left font-semibold">Skills I use</h2>
        <ul className="list-disc mt-2 w-10/12 md:w-full mx-auto">
          <li>Rest Api</li>
          <li>Responsive Design</li>
          <li>Data Structure</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-center md:text-left">Stack</h2>
        <ul className="mt-2 w-10/12 mx-auto md:w-full">
          <li>Mongodb</li>
          <li>NextJs</li>
          <li>Nodejs</li>
          <li>Typescript</li>
        </ul>
      </div>
    </div>
  );
};
const LeftProject = () => {
  return (
    <div className="flex flex-col mx-auto md:w-5/12 gap-2 flex-1">
      <div className="text-center md:text-left">
        <h1 className="leading-5 text-2xl font-bold">Title of project</h1>
        <p className="text-[#6F9FCF]">Full Stack {/* Full Stack | forntend | backend */}</p>
      </div>
      <Link className="bg-black mx-auto md:mx-0 w-[300px] h-[150px] inline-block " href={"#"}>
        {/* image link */}
        <Image src="" alt="" />
      </Link>
      <p className="w-10/12 mx-auto md:mx-0 md:text-justify">
        {/*Project description */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quisquam quidem hic! Rem tempore, optio soluta eligendi molestias accusantium ut distinctio vitae, iste non repellat
        laudantium ex, velit cumque eum!
      </p>
      <Link className="px-3 mx-auto md:mx-0 py-1 bg-gray-800 w-min whitespace-nowrap rounded-xl" href={"#"}>
        Source code
      </Link>
    </div>
  );
};
export default function Project() {
  return (
    <div className="flex pl-5 pr-2 md:pl-0 md:pr-0 flex-col pb-3 border-b md:flex-row md:justify-start gap-10">
      <LeftProject />
      <RightProject />
    </div>
  );
}
