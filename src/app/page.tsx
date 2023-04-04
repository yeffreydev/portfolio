import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <div>
      <div className="w-full md:w-9/12 lg:w-8/12 mx-auto px-2">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
