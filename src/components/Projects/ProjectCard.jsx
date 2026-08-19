import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;
    VanillaTilt.init(card, { max: 7, speed: 325, glare: false, gyroscope: true });
    const move = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 7}deg)`;
    };
    const reset = () => { card.style.transform = "perspective(900px) rotateX(0) rotateY(0)"; };
    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", reset);
    return () => { card.removeEventListener("mousemove", move); card.removeEventListener("mouseleave", reset); card.vanillaTilt?.destroy(); };
  }, []);

  return (
    <article className="project-card" ref={cardRef} data-tilt>
      <div className="project-image-wrap"><img src={project.image} alt={`${project.title} preview`} loading="lazy" /></div>
      <div className="project-content">
        <div><span className="project-number">0{project.id}</span><h3>{project.title}</h3><p>{project.description}</p></div>
        <a className="project-link" href={project.link} aria-label={`Explore ${project.title}`}>Explore <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export default ProjectCard;
