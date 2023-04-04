import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeffrey Espinoza - Home",
  description: "I' Yeffrey, from Peru. Software Developer(frontend, backend, fullstack, nextjs, next 13, node, express)",
};

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
