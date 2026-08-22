import SkillBars from "./SkillBars";
import ExperienceSummary from "./ExperienceSummary";

import "./About.css";

function About() {
  return (
    <section className="about" id="about" data-scroll-section>

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-grid">

          <div className="about-bio">

            <p className="bio-highlight">
              I blend minimal design with buttery animations
              to build digital products that feel alive —
              leading teams, defining architecture, and
              delivering production-ready solutions.
            </p>


            <p className="bio-text">
              As a Tech Lead and Full-Stack Developer, I've
              managed teams, coordinated with global clients,
              and built scalable web applications from frontend
              to backend. My passion lies in bridging business
              goals with technical excellence while mentoring
              developers.
            </p>

            <ExperienceSummary />

          </div>

          <SkillBars />

        </div>

      </div>

    </section>
  );
}

export default About;