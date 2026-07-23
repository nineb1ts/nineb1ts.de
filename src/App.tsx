import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/intro.css";
import "./styles/journey.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/contact.css";
import "./styles/footer.css";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import JourneySection from "./components/JourneySection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <main>
        <Hero />
        <IntroSection />
        <JourneySection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
