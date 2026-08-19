import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import CustomCursor from "./components/UI/CustomCursor";
import ProgressBar from "./components/UI/ProgressBar";
import ThemeToggle from "./components/UI/ThemeToggle";
import BackToTop from "./components/UI/BackToTop";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { runPageAnimations } from "./animations/gsapAnimations";
import { useEffect, useRef } from "react";

import "./App.css";

function App() {
  const appRef = useRef(null);
  const { scrollRef, scrollState } = useSmoothScroll();

  useEffect(() => runPageAnimations(appRef.current), []);

  return (
    <div ref={appRef}>
      <CustomCursor />
      <ProgressBar scrollState={scrollState} />
      <ThemeToggle />
      <BackToTop scrollRef={scrollRef} scrollState={scrollState} />

      <div data-scroll-container id="main-scroll">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;