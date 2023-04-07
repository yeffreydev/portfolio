import Wave from "@/ui/Wave";
export default function HomeSection() {
  return (
    <div id="home" className="h-screen relative pt-[50px]">
      <div>
        <h1>Yeffrey ESpinoza </h1>
        <p>Hi, I am software developer,</p>
        <button>Contact Me</button>
      </div>
      <div>
        {/*eslint-disable-next-line jsx-a11y/alt-text*/}
        <img />
      </div>
      <div className="absolute bottom-0 w-screen">
        <Wave fill="#1B1B38" />
      </div>
      {/* <Image className="absolute bottom-0 w-screen" src={ola} alt="jjfie" /> */}
    </div>
  );
}
