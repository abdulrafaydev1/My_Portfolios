import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);






export function runPageAnimations(root) {
  const context = gsap.context(() => {
    gsap.from(".nav-links", { opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: "power3.out" });
    gsap.from(".hero-greeting, .hero-name, .hero-title, .hero-desc, .hero-btns, .hero-stats", { opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: "power3.out" });
    gsap.from(".profile-frame", { opacity: 0, scale: 0.85, duration: 1.2, delay: 0.25, ease: "elastic.out(1, 0.65)" });
    gsap.from(".skills-heading h2", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".skills-section", scroller: "[data-scroll-container]", start: "top 84%", once: true } });
    gsap.from(".skills-section .section-line", { opacity: 0, scaleX: 0, duration: 0.8, delay: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".skills-section", scroller: "[data-scroll-container]", start: "top 84%", once: true } });
    gsap.from(".skill-card", { opacity: 0, y: 40, duration: 0.75, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".skills-grid", scroller: "[data-scroll-container]", start: "top 84%", once: true } });
    gsap.utils.toArray(".section-title, .about-bio, .skills, .project-card").forEach((element) => {
      gsap.from(element, { opacity: 0, y: 55, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, scroller: "[data-scroll-container]", start: "top 84%", once: true } });
    });
  }, root);
  return () => context.revert();

}
