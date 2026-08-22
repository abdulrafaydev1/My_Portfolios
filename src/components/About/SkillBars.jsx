import { useEffect, useRef } from "react";

const skills = [
  { name: "HTML5 / CSS3", percent: 98 },
  { name: "JavaScript / TypeScript", percent: 94 },
  { name: "React & Next.js", percent: 90 },
  { name: "UI/UX Design", percent: 92 },
  { name: "Animation (GSAP, Framer)", percent: 96 },
];

function SkillBars() {
  const barsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll("[data-percent]").forEach((bar) => {
            bar.style.width = `${bar.dataset.percent}%`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills" ref={barsRef}>
      <div className="eyebrow">Core capabilities</div>
      <h3>Skills that move ideas forward</h3>
      {skills.map((skill) => (
        <div className="skill" key={skill.name}>
          <div className="skill-label"><span>{skill.name}</span><strong>{skill.percent}%</strong></div>
          <div className="skill-track"><span data-percent={skill.percent} /></div>
        </div>
      ))}
    </div>
  );
}

export default SkillBars;
