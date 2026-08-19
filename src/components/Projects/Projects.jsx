import { useEffect, useRef } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.08 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="projects" id="projects" data-scroll-section ref={sectionRef}>
      <div className="container">
        <div className="section-heading"><div><div className="eyebrow">Selected work</div><h2 className="section-title">Built with intention.</h2></div><p>Useful tools and expressive digital experiences, shaped from the first interaction to the final pixel.</p></div>
        <div className="projects-grid">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
      </div>
    </section>
  );
}
export default Projects;
