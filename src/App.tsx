import "./App.css";
import Typewriter from "./Typewriter";
import { useEffect, useRef, useState } from "react";
import ProjectItem from "./components/ProjectItem";
import JourneyItem from "./components/JourneyItem";

function App() {
  const introRef = useRef<HTMLElement>(null);
  const [activeLine, setActiveLine] = useState(0);
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
  const journey = [
    {
      period: "Today",
      title: "Application Development",
      description:
        "Currently completing my apprenticeship as an IT specialist for application development and continuing to grow as a software developer.",
    },
    {
      period: "Career Change",
      title: "WBS Coding School",
      description:
        "Decided to change careers and dive deeper into software development through an intensive coding program.",
    },
    {
      period: "Professional Experience",
      title: "A Different Path",
      description:
        "Worked in billing before deciding that I wanted to pursue a career that better matched my interest in technology and building things.",
    },
    {
      period: "Studies",
      title: "Business Administration",
      description:
        "Studied Business Administration at Hamm-Lippstadt University of Applied Sciences.",
    },
    {
      period: "The Beginning",
      title: "HTML & CSS",
      description:
        "First encountered web development during my apprenticeship in marketing communication at WESTPRESS — and wrote my first HTML and CSS.",
    },
  ];

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

        <section className="journey">
          <div className="journey-sticky">
            <div className="container grid">
              <div className="journey-heading">
                <p>My Journey</p>
              </div>

              <div className="journey-content">
                {journey.map((item) => (
                  <JourneyItem
                    key={`${item.period}-${item.title}`}
                    period={item.period}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="projects-sticky">
            <div className="container grid">
              <div className="projects-heading">
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
              </div>
            </div>
          </div>
        </section>

        <section className="contact noselect">
          <div className="container grid">
            <div className="contact-content">
              <p className="contact-label">Get in touch</p>

              <h2>Have something in mind?</h2>

              <a className="contact-link" href="#">
                Email coming soon ↗
              </a>
            </div>
          </div>
        </section>
        <footer className="footer noselect">
          <div className="container footer-inner">
            <span>nineb1ts © 2026</span>

            <a
              href="https://github.com/nineb1ts"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
