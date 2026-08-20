function SkillCard({ skill }) {
  const { icon, name } = skill;

  return (
    <article className="skill-card">
      <div className="skill-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path d={icon.path} fill={`#${icon.hex}`} />
        </svg>
      </div>
      <h3>{name}</h3>
    </article>
  );
}

export default SkillCard;