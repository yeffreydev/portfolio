import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

export default function TopInfo() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="w-max">
          <Image className="w-[200px] h-[200px] object-cover   rounded-full" src={"/my_profile.jpg"} width={200} height={200} alt="Yeffrey Espinoza" />
        </div>
        <div className="flex flex-col justify-center md:justify-start md:gap-3 flex-1">
          <div>
            <h1 className="text-center md:text-left text-2xl font-bold">Yeffrey Espinoza</h1>
            <p className="text-sm text-center md:text-left">Software Developer - Entrepreneur</p>
          </div>
          <div className="md:pl-5 md:gap-2 flex flex-col w-full">
            <p className="uppercase text-center md:text-left">Web & Mobile Developer</p>
            <div className="flex justify-center mt-10 md:mt-0 md:justify-end gap-2">
              <Link target="_blank" className="bg-gray-600 text-2xl p-3 rounded" href={"https://github.com/yeffreydev"}>
                <FaGithub />
              </Link>
              <Link target="_blank" className="bg-gray-600 text-2xl p-3 rounded" href={"https://www.instagram.com/yeffreydev/"}>
                <FaInstagram />
              </Link>
              <Link target="blank" className="bg-gray-600 text-2xl p-3 rounded" href={"https://www.tiktok.com/@yeffreydev"}>
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mt-0 flex justify-center md:justify-end gap-2">
        <Link target="_blank" href={"https://chat.whatsapp.com/HsA13xs8kIhIsEOOINVDrH"} className="bg-cyan-600 p-2 rounded-xl">
          Whatsapp Room
        </Link>
      </div>
    </div>
  );
}
