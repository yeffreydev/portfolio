import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeffrey Espinoza - Home",
  description: "I' Yeffrey Espinoza, software developer, this is my portfolio, I from Peru. Software Developer(frontend, backend, fullstack, nextjs, next 13, node, express)",
};

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
