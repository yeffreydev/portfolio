import React, { HTMLAttributes } from "react";
import { FaGithub, FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import Image from "next/image";

const SocialLink = ({ Icon, url }: { Icon: IconType; url: string }) => {
  return (
    <div className=" grid place-items-center">
      <a className="bg-[#383c3c] w-[50px] h-[50px] rounded-[50px] grid place-items-center hover:border hover:scale-110 hover:bg-[#152c43]" href={url} target={"_blank"}>
        <Icon className="font-2xl" color="#ffff" />
      </a>
    </div>
  );
};
function page() {
  const linkClass: HTMLAttributes<HTMLLinkElement>["className"] = "text-[#383c3c] underline font-semibold hover:text-[#fff9]";
  return (
    <div className="mt-[70px] flex mb-10">
      <div className="w-11/12 md:w-8/12  lg:w-6/12 mx-auto">
        <h1 className="text-[30px] font-bold mt-3">Yeffrey Espinoza</h1>
        <span className="text-[#383c3c66]">Software Developer</span>
        <div className="overflow-auto text-justify mt-7 ">
          <div className="w-[200px] h-[200px] grid place-items-center float-right top-0">
            <Image width={150} height={150} className="w-[150px] h-[150px] rounded-[100px] object-cover" src="/my_profile.jpg" alt="" />
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
        </div>
        <h1 className="text-xl font-semibold mt-7 text-[#383c3c]">Experience</h1>
        <div className="flex items-center gap-5 mt-5">
          <SocialLink Icon={FaGithub} url={"https://github.com/yeffreydev"} />
          <SocialLink Icon={FaLinkedin} url={"https://www.linkedin.com/in/yeffreydev/"} />
          <div className="flex flex-col gap-2">
            <button className="px-5 py-1 rounded-xl bg-[#383c3c] text-white w-min whitespace-nowrap hover:bg-[#152c43]">Download CV</button>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-semibold text-[#383c3c]">Social Links</h1>
          <div className="flex gap-3 items-center flex-wrap mt-2">
            <SocialLink Icon={FaInstagram} url={"https://www.instagram.com/yeffreydev/"} />
            <SocialLink Icon={FaTiktok} url={"https://www.tiktok.com/@yeffreydev"} />
            <SocialLink Icon={FaTwitter} url={"https://twitter.com/yeffreydev"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
