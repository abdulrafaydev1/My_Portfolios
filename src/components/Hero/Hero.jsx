import "./Hero.css";
import profileImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home" data-scroll-section>

      <div className="hero-container">

        <div className="hero-text">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            <span className="name-accent">
              Abdul Rafay
            </span>
          </h1>

          <h2 className="hero-title">
            creative web developer
            <br />
            & UI designer
          </h2>

          <p className="hero-desc">
            Crafting high-end digital experiences with smooth
            motion, modern aesthetics, and clean code. I'm a
            Software Engineer and Full-Stack Developer with
            expertise in scalable applications, Tech Leadership,
            and system architecture.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn outline">
              Let's Connect
            </a>
          </div>

          <div className="hero-stats">

            <div className="stat">
              <span>6+</span>
              Years
            </div>

            <div className="stat">
              <span>30+</span>
              Projects
            </div>

            <div className="stat">
              <span>12+</span>
              Global Clients
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="profile-frame">
            <img
              src={profileImage}
              alt="Abdul Rafay portrait"
              className="main-profile"
            />
          </div>

          <div className="image-bg-blob"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;