import ContenWidth from "@/ui/ContentWidth";
import Link from "next/link";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="py-10 w-full bg-black">
      <ContenWidth>
        <div className="w-11/12 flex items-center mx-auto md:w-full">
          <div className="flex-1 gap-1 md:gap-5 flex flex-col md:flex-row">
            <Link target="_blank" className="flex items-center gap-1" href={"https://www.github.com/yeffreydev/"}>
              <GrGithub /> <span>github</span>
            </Link>
            <Link target="_blank" className="flex items-center gap-1" href={"https://www.linkedin.com/in/yeffreydev"}>
              <GrLinkedin /> <span>LinkedIn</span>
            </Link>
            <Link target="_blank" className="flex items-center gap-1" href={"https://www.instagram.com/yeffreydev/"}>
              <GrInstagram /> <span>Instagram</span>
            </Link>
          </div>
          <p>© by @yeffreydev</p>
        </div>
      </ContenWidth>
    </div>
  );
}
