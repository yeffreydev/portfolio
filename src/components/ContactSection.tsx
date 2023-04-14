import ContenWidth from "@/ui/ContentWidth";
import Link from "next/link";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import ContactForm from "./ContactForm";

export default function FooterSection() {
  return (
    <div id="contact" className="h-min pt-[50px]">
      <ContenWidth>
        <div className="flex flex-col md:flex-row gap-14 pb-[20px] md:pb-[50px]">
          <div className="flex flex-col gap-5 md:gap-10 flex-1">
            <h1 className="text-3xl md:text-left text-center font-bold">Contact Me</h1>
            <p className="text-justify w-11/12 md:mx-0 mx-auto">
              If you are interested in collaborating in any project, hire me or just want to say hello. <br />
            </p>

            <div className="flex gap-3 mx-auto md:mx-0">
              <Link href={"https://www.linkedin.com/in/yeffreydev/"} target="_blank" className="text-4xl">
                <GrLinkedin />
              </Link>
              <Link href={"https://www.github.com/yeffreydev"} target="_blank" className="text-4xl">
                <GrGithub />
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </ContenWidth>
    </div>
  );
}
