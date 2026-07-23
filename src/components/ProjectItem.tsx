import { useEffect, useRef, useState } from "react";

type ProjectItemProps = {
  index: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  year?: string;
};

function ProjectItem({
  index,
  title,
  description,
  technologies,
  url,
  github,
  year,
}: ProjectItemProps) {
  const itemRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={itemRef}
      className={`project-item ${visible ? "visible" : ""}`}
    >
      <span className="project-index">{index}</span>

      <div className="project-title-row">
        <h2>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>

        {year && <span className="project-year">{year}</span>}
      </div>

      <p>{description}</p>

      <div className="project-meta">
        <ul className="project-technologies">
          {technologies.map((technology) => (
            <li key={technology}>
              <span className="tech-badge" data-tech={technology.toLowerCase()}>
                {technology}
              </span>
            </li>
          ))}
        </ul>

        {github && (
          <a
            className="project-link"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectItem;
