import ContenWidth from "@/ui/ContentWidth";
import Wave from "@/ui/Wave";
import Link from "next/link";
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
export default function HomeSection() {
  return (
    <div id="home" className="min-h-min pb-[300px] text-center md:text-left relative pt-[50px]">
      <ContenWidth>
        <div className="flex flex-col lg:w-9/12 mx-auto  md:flex-row gap-5 md:gap-16 lg:gap-20 mt-10 md:mt-20">
          <div className="flex-1 flex flex-col gap-3 md:gap-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold leading-5">Yeffrey Espinoza </h1>
              <p className="text-[#6F9FCF]">sofware Developer</p>
            </div>
            <div className="md:hidden flex gap-3 mx-auto">
              <SocialLinks />
            </div>
            <div className="w-[250px] md:hidden h-[250px] bg-black mx-auto"></div>
            <div>
              <p className="max-w-[400px] mx-auto text-justify px-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium natus placeat fugiat vitae eos nulla accusamus illo atque quam illum quod itaque cupiditate dicta saepe voluptas
                temporibus, provident, quisquam a?.
              </p>
            </div>
            <div className="flex ">
              <button className="text-lg mt-4 md:mt-0 mx-auto font-bold px-10 py-3 rounded-2xl bg-black">Contact Me</button>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="w-[200px] hidden md:block h-[200px] bg-black mx-auto md:mx-0"></div>
            <div className="hidden md:flex gap-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </ContenWidth>
      <div className="absolute bottom-0 -z-0 w-screen">
        <Wave fill="#393B5C" />
      </div>
    </div>
  );
}
