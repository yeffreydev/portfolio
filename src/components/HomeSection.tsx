import ContenWidth from "@/ui/ContentWidth";
import Wave from "@/ui/Wave";
export default function HomeSection() {
  return (
    <div id="home" className="min-h-screen relative pt-[50px]">
      <ContenWidth>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <div className="flex-1 flex flex-col gap-3">
            <div className="">
              <h1 className="text-3xl font-bold leading-5">Yeffrey Espinoza </h1>
              <p className="text-[#6F9FCF]">sofware Developer</p>
            </div>
            <div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium natus placeat fugiat vitae eos nulla accusamus illo atque quam illum quod itaque cupiditate dicta saepe voluptas
                temporibus, provident, quisquam a?
              </p>
            </div>
            <div>
              <button className="text-lg font-bold px-10 py-3 rounded-xl bg-black">Contact Me</button>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="w-[200px] h-[200px] bg-black"></div>
            <div>
              <span>Linkedin</span>
              <span>github</span>
            </div>
          </div>
        </div>
      </ContenWidth>
      <div className="absolute bottom-0 w-screen">
        <Wave fill="#393B5C" />
      </div>
    </div>
  );
}
