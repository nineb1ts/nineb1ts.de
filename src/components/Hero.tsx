import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero noselect">
      <div className="container grid">
        <div className="hero-content">
          <h1 className="hero-title">
            nineb<span className="one">1</span>t<span className="s">s</span>
          </h1>

          <Typewriter />
        </div>
      </div>
      <p
        className={`hero-scroll-indicator ${
          showScrollIndicator ? "visible" : ""
        }`}
      >
        Scroll <span>↓</span>
      </p>
    </section>
  );
}

export default Hero;
