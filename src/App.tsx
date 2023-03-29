import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import Header from "./ui/Header";

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full md:w-9/12 lg:w-8/12 mx-auto px-2">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
