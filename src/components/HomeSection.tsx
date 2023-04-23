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
      className="w-full h-full object-cover rounded-full"
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
        <div className="flex flex-col md:pl-5 md:flex-row gap-5 md:gap-16 lg:gap-20 mt-10 md:mt-20">
          <div className="flex-1 lg:flex-auto flex flex-col gap-3 md:gap-10 md:mt-[100px] lg:mt-[200px]">
            <div className="w-[200px] md:hidden h-[200px] mx-auto border-2 border-cyan-300 rounded-full">
              <ProfileImage />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold leading-5">Yeffrey Espinoza </h1>
              <p className="text-cyan-300">sofware Developer</p>
            </div>
            <div className="md:hidden mx-auto md:mx-0 flex gap-3">
              <SocialLinks />
            </div>
            <div className="mt-3 md:mt-0">
              <p className="w-10/12 md:w-11/12 md:ml-3 mx-auto text-justify mt-[50px] md:mt-0  px-0 [&>b]:text-cyan-300">
                A creative developer with a <br className="hidden md:block lg:hidden" />
                strong track record of <br className="hidden lg:block" /> developing custom software solutions for businesses .
              </p>
            </div>
            <div className="flex mx-auto md:mx-0 md:ml-3">
              <a href={"#contact"} className=" mt-4 md:mt-0 font-semibold px-10 py-2 rounded-3xl bg-gray-900">
                Contact Me
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-4 md:mt-[70px] lg:mt-[150px]">
            <div className="md:w-[150px]  hidden md:block md:h-[150px]  border-2 border-cyan-300 rounded-full mx-auto md:mx-0">
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
