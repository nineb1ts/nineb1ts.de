import { useEffect, useRef, useState } from "react";
import JourneyItem from "./JourneyItem";

const journey = [
  {
    period: "2024 – Today",
    title: "Application Development",
    description:
      "Currently completing my apprenticeship as an IT specialist for application development at adesso SE in Dortmund, gaining hands-on experience and continuing to grow as a software developer.",
  },
  {
    period: "2023",
    title: "WBS Coding School",
    description:
      "Decided to change careers and dive deeper into software development through an intensive coding program.",
  },
  {
    period: "2022",
    title: "A Different Path",
    description:
      "Worked in billing before deciding that I wanted to pursue a career that better matched my interest in technology and building things.",
  },
  {
    period: "2014 – 2020",
    title: "Business Administration",
    description:
      "Studied Business Administration at Hamm-Lippstadt University of Applied Sciences.",
  },
  {
    period: "2010 – 2013",
    title: "HTML & CSS",
    description:
      "First encountered web development during my apprenticeship in marketing communication at WESTPRESS — and wrote my first HTML and CSS.",
  },
];

function JourneySection() {
  const [journeyEnding, setJourneyEnding] = useState(false);
  const journeyEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = journeyEndRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setJourneyEnding(entry.isIntersecting);
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
    <section className="journey">
      <div className="container grid">
        <div className={`journey-heading ${journeyEnding ? "is-faded" : ""}`}>
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

          <div ref={journeyEndRef} />
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
