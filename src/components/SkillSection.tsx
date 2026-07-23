import { useState, useEffect, useRef } from "react";

const skills = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "MUI",
    "Bootstrap",
    "Vite",
  ],
  backend: ["C#", ".NET", "ASP.NET Core", "SignalR"],
  testing: ["xUnit"],
  databases: ["MongoDB", "PostgreSQL"],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Podman",
    "Postman",
    "Azure DevOps",
    "Azure Portal",
  ],
};

function SkillSection() {
  const [skillsEnding, setSkillsEnding] = useState(false);
  const skillsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = skillsEndRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSkillsEnding(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -95% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="skills">
      <div className="container grid">
        <div className={`skills-heading ${skillsEnding ? "is-faded" : ""}`}>
          <p>Skills</p>
        </div>

        <div className="skills-list">
          {Object.entries(skills).map(([category, technologies]) => (
            <div className="skills-group" key={category}>
              <h3 className="skills-category">{category}</h3>

              <div className="skills-badges">
                {technologies.map((technology) => (
                  <span
                    className="tech-badge"
                    data-tech={technology.toLowerCase()}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div ref={skillsEndRef} className="skills-end" />
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
