import "./App.css";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import JourneySection from "./components/JourneySection";
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
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
