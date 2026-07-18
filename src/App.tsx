import "./App.css";
import Typewriter from "./Typewriter";
import { useEffect, useRef, useState } from "react";

function App() {
  const introRef = useRef<HTMLElement>(null);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = introRef.current;

      if (!section) {
        return;
      }

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollDistance = sectionHeight - window.innerHeight;
      const scrolled = window.scrollY - sectionTop;

      const progress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);

      const nextLine = progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2;

      setActiveLine(nextLine);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">
      <main>
        <section className="hero noselect">
          <div className="container grid">
            <div className="hero-content">
              <h1 className="hero-title">
                nineb<span className="one">1</span>t<span className="s">s</span>
              </h1>

              <Typewriter />
            </div>
          </div>
        </section>

        <section className="intro" ref={introRef}>
          <div className="container grid intro-sticky">
            <div className="intro-content">
              <p className={activeLine === 0 ? "active" : ""}>
                I build things.
              </p>

              <p className={activeLine === 1 ? "active" : ""}>
                Mostly with code.
              </p>

              <p className={activeLine === 2 ? "active" : ""}>
                Sometimes just because I can.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
