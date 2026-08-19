import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useSmoothScroll() {
  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({ scroll: 0, limit: 0, progress: 0 });

  useEffect(() => {
    const container = document.querySelector("[data-scroll-container]");
    if (!container || scrollRef.current) return undefined;

    let latestScroll = { scroll: 0, limit: 0, progress: 0 };
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        smoothWheel: true,
        syncTouch: true,
        wheelMultiplier: 0.9,
      },
      scrollCallback: (values) => {
        latestScroll = values;
        setScrollState(values);
        ScrollTrigger.update();
      },
    });

    scrollRef.current = scroll;
    window.__portfolioScroll = scroll;
    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        if (arguments.length) {
          scroll.scrollTo(value, { duration: 0, immediate: true });
          return value;
        }
        return latestScroll.scroll;
      },
      getBoundingClientRect() { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }; },
      pinType: container.style.transform ? "transform" : "fixed",
    });

    const onRefresh = () => scroll.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();
    const anchors = document.querySelectorAll('a[href^="#"]');
    const onAnchor = (event) => {
      const target = document.querySelector(event.currentTarget.getAttribute("href"));
      if (target) {
        event.preventDefault();
        scroll.scrollTo(target, { offset: -90, duration: 0.7 });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", onAnchor));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", onAnchor));
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      scroll.destroy();
      ScrollTrigger.scrollerProxy(container, null);
      if (window.__portfolioScroll === scroll) window.__portfolioScroll = null;
      scrollRef.current = null;
    };
  }, []);

  return { scrollRef, scrollState };
}
export default useSmoothScroll;
