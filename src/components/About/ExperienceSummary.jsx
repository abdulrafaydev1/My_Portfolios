const experience = [
  { title: "Tech Leadership", detail: "Team & Project Lead" },
  { title: "Full-Stack", detail: "React, Node, Python" },
  { title: "Motion Design", detail: "GSAP, WebGL" },
];

function ExperienceSummary() {
  return (
    <div className="experience-summary">
      {experience.map((item) => (
        <div className="experience-item" key={item.title}>
          <span className="experience-marker" />
          <div><strong>{item.title}</strong><span>{item.detail}</span></div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSummary;
