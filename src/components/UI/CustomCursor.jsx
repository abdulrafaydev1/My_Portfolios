import { useEffect } from "react";
import { gsap } from "gsap";


function CustomCursor() {
    
    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return undefined;
        const dot = document.querySelector(".cursor-dot");
        const outline = document.querySelector(".cursor-outline");

        const move = (event) => { gsap.to(dot, { x: event.clientX, y: event.clientY, duration: 0.08 }); gsap.to(outline, { x: event.clientX, y: event.clientY, duration: 0.35, ease: "power3.out" }); };
        const enter = () => gsap.to(outline, { scale: 1.6, borderColor: "var(--accent)", duration: 0.25 });
        const leave = () => gsap.to(outline, { scale: 1, borderColor: "var(--primary)", duration: 0.25 });
        document.addEventListener("mousemove", move);
        const targets = document.querySelectorAll("a, button, .project-card, .theme-toggle, .back-top");
        targets.forEach((target) => { target.addEventListener("mouseenter", enter); target.addEventListener("mouseleave", leave); });
        return () => { document.removeEventListener("mousemove", move); targets.forEach((target) => { target.removeEventListener("mouseenter", enter); target.removeEventListener("mouseleave", leave); }); };
    }, []);
    return <><span className="cursor-dot" /><span className="cursor-outline" /></>;
}


export default CustomCursor;






