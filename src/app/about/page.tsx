import React, { HTMLAttributes } from "react";
import { FaGithub } from "react-icons/fa";
function page() {
  const linkClass: HTMLAttributes<HTMLLinkElement>["className"] = "text-[#fff] underline font-semibold hover:text-[#fff9]";
  return (
    <div className="mt-[50px] flex">
      <div className="w-11/12 md:w-8/12  lg:w-6/12 mx-auto">
        <h1 className="text-[30px] font-bold mt-3">Yeffrey Espinoza</h1>
        <span className="text-[#fff6]">Software Developer</span>
        <p className="overflow-auto text-justify mt-7 ">
          <div className="w-[200px] h-[200px] grid place-items-center float-right top-0">
            <img className="w-[150px] h-[150px] rounded-[100px] object-cover" src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </div>
          I am a software developer, born in{" "}
          <a className={linkClass} href="https://en.wikipedia.org/wiki/Per%c3%ba" target={"_blank"}>
            Peru
          </a>
          , who has a passion for crafting solutions and thrives on the challenges of programming.
          <br /> <br />
          My most advanced skills revolve around full-stack web development, with expertise in technologies such as{" "}
          <a className={linkClass} href="https://en.wikipedia.org/wiki/JavaScript" target={"_blank"}>
            JavaScript
          </a>
          ,{" "}
          <a className={linkClass} href="https://en.wikipedia.org/wiki/React_(software)" target={"_blank"}>
            React
          </a>
          ,{" "}
          <a className={linkClass} href="https://en.wikipedia.org/wiki/Tailwind_CSS" target={"_blank"}>
            Tailwind
          </a>
          , and{" "}
          <a className={linkClass} href="https://en.wikipedia.org/wiki/Node.js" target={"_blank"}>
            Node.js
          </a>{" "}
          However, I am not limited to these tools when it comes to problem-solving.
          <br /> <br />
          I have brought numerous projects to life, a process that has led me to learn new things and gain a deeper understanding of the web. This understanding has inspired me to conceive the idea of
          developing a web service, a project on which I am currently focused.
          <br /> <br />
          With all this learning under my belt, I feel prepared to work for a company in the realm of web development, as well as take on new challenges.
          <br />
          <br />
          I&#39;ve always been fond of technology; then I discovered programming and software development in 2020. Since then, this wonderful journey has unfolded, and I am eager to explore more of
          this world, potentially delving into artificial intelligence.
        </p>
        <h1 className="text-xl mt-7 text-white">Expirence</h1>

        <div className="flex items-center gap-5">
          <div className="mt-2 grid place-items-center">
            <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev" target={"_blank"}>
              <FaGithub className="font-2xl" color="#ffff" />
            </a>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <button className="px-5 py-1 rounded-xl bg-black text-white w-min whitespace-nowrap">Download CV</button>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-xl text-white">Social Links</h1>
          <div className="flex gap-3 items-center flex-wrap mt-2">
            <div className=" grid place-items-center">
              <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
                <FaGithub className="font-2xl" color="#ffff" />
              </a>
            </div>
            <div className="grid place-items-center">
              <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
                <FaGithub className="font-2xl" color="#ffff" />
              </a>
            </div>
            <div className="grid place-items-center">
              <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
                <FaGithub className="font-2xl" color="#ffff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
