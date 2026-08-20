import skills from "../../data/skills";
import SkillCard from "./SkillCard";
import "./skills.css";

function Skills() {
    return (
        <section className="skills-section" id="skills" data-scroll-section>
            <div className="skills-container container">
                <div className="skills-heading">
                    <h2>Skills &amp; Technologies</h2>
                    <span className="section-line" aria-hidden="true" />
                </div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills
