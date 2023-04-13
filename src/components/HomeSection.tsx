import ContenWidth from "@/ui/ContentWidth";
import Wave from "@/ui/Wave";
import Link from "next/link";
import Image from "next/image";
import { GrGithub, GrLinkedin } from "react-icons/gr";
const SocialLinks = () => {
  return (
    <>
      <Link href={"https://www.linkedin.com/in/yeffreydev/"} target="_blank" className="text-4xl">
        <GrLinkedin />
      </Link>
      <Link href={"https://www.github.com/yeffreydev"} target="_blank" className="text-4xl">
        <GrGithub />
      </Link>
    </>
  );
};

export const ProfileImage = () => {
  return (
    <Image
      className="w-full h-full object-cover rounded-xl"
      width={455}
      height={610}
      src={"https://media.discordapp.net/attachments/1038833828682272930/1095971212359897098/Screenshot_20230413_021750.jpg?width=455&height=610"}
      alt=""
    />
  );
};
export default function HomeSection() {
  return (
    <div id="home" className="min-h-min flex flex-col text-center md:text-left relative pt-[50px]">
      <ContenWidth>
        <div className="flex flex-col lg:w-9/12 mx-auto  md:flex-row gap-5 md:gap-16 lg:gap-20 mt-10 md:mt-20">
          <div className="flex-1 flex flex-col gap-3 md:gap-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold leading-5">Yeffrey Espinoza </h1>
              <p className="text-cyan-300">sofware Developer</p>
            </div>
            <div className="md:hidden flex gap-3 mx-auto">
              <SocialLinks />
            </div>
            <div className="w-[250px] md:hidden h-[250px] mx-auto border-2 border-cyan-300 rounded-xl">
              <ProfileImage />
            </div>
            <div>
              <p className="w-11/12 mx-auto md:w-full text-justify px-0 [&>b]:text-cyan-300">
                As a <b>web developer</b>, you possess a diverse range of technical skills that enable you to create <b>dynamic and interactive websites.</b> <br /> Your proficiency in{" "}
                <b>object-oriented programming</b>, modern web technologies such as <b>React</b> and <b>Next</b>, and familiarity with <b>databases</b> and <b>server-side</b> technologies such as
                <b> MongoDB</b>, <b>Express</b>, and <b>Node</b> enable you to build powerful and efficient <b>backend systems</b>. <br />
                Your expertise in front-end technologies such as <b>JavaScript</b>, <b>Css3</b>, and <b>Tailwind</b> allows you to create responsive and visually appealing <b>user interfaces.</b>
                <br />
                Overall, your skills make you a valuable asset to any organization seeking to <b>build high-quality web applications</b>.
              </p>
            </div>
            <div className="flex ">
              <a href={"#contact"} className="text-lg mt-4 md:mt-0 mx-auto font-bold px-10 py-3 rounded-2xl bg-black">
                Contact Me
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="w-[250px] hidden md:block h-[270px] border-2 border-cyan-300 rounded-xl mx-auto md:mx-0">
              <ProfileImage />
            </div>
            <div className="hidden md:flex gap-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </ContenWidth>
      <div className="w-screen">
        <Wave fill="#393B5C" />
      </div>
    </div>
  );
}
