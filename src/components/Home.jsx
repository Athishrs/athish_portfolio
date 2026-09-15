import { useEffect } from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Background from "./Background.jsx";
import Footer from "./Footer.jsx";

export default function Home({ initialSection }) {
  useEffect(() => {
    if (!initialSection) return;
    const target = document.getElementById(initialSection);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [initialSection]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", fontFamily: "'IBM Plex Sans', system-ui, sans-serif", color: "var(--ink)", overflowX: "hidden" }}>
      <Hero />
      <Work />
      <About />
      <Background />
      <Footer />
    </div>
  );
}
