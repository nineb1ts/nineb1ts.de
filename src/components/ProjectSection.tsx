import { useEffect, useRef, useState } from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    index: "01",
    title: "nineb1ts.de",
    description: "Personal portfolio and playground.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    url: "https://nineb1ts.de",
    github: "https://github.com/nineb1ts/nineb1ts.de",
    year: "2026",
  },
  {
    index: "02",
    title: "Definitely Not Tic-Tac-Toe",
    description:
      "A 4×4 strategy game where the goal is to avoid getting three in a row.",
    technologies: ["JavaScript", "HTML", "CSS"],
    url: "https://definetlynottictactoe.netlify.app/",
    github: "https://github.com/nineb1ts/definitely-not-tic-tac-toe",
    year: "2024",
  },
  // {
  //   index: "03",
  //   title: "Project Three",
  //   description: "Short description of the project.",
  //   technologies: ["/"],
  //   url: "",
  //   github: "",
  //   year: "",
  // },
];

function ProjectSection() {
  const [projectsEnding, setProjectsEnding] = useState(false);
  const projectsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = projectsEndRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setProjectsEnding(entry.isIntersecting);
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
    <section className="projects">
      <div className="container grid">
        <div className={`projects-heading ${projectsEnding ? "is-faded" : ""}`}>
          <p>Selected Projects</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectItem
              key={project.index}
              index={project.index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
              github={project.github}
              year={project.year}
            />
          ))}

          <div ref={projectsEndRef} />
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
