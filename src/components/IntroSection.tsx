import { useEffect, useRef, useState } from "react";

const introLines = [
  "I build things.",
  "Mostly with code.",
  " Sometimes just because I can.",
];

function IntroSection() {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="intro" ref={introRef}>
      <div className="container grid intro-sticky">
        <div className="intro-content">
          {introLines.map((line, index) => (
            <p key={line} className={activeLine === index ? "active" : ""}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
