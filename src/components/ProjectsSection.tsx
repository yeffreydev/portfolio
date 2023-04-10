import ContenWidth from "@/ui/ContentWidth";
import Wave from "@/ui/Wave";
export default function ProjectsSection() {
  return (
    <div id="projects" className="relative min-h-screen bg-[#393B5C] pt-[50px]">
      <ContenWidth>
        <div>
          <h1 className="text-3xl font-bold">My Projects </h1>
        </div>
      </ContenWidth>
      <div className="absolute bottom-0 w-screen">
        <Wave fill="#252638" />
      </div>
    </div>
  );
}
