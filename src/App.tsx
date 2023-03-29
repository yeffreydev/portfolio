import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import Header from "./ui/Header";

function App() {
  return (
    <div className="w-full">
      <Header />
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
