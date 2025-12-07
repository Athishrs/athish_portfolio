import { useEffect } from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import ProjectList from "./ProjectList.jsx";
import Contact from "./contact.jsx";
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
    <div className="px-4 md:px-8 pb-10 space-y-16">
      <section id="home">
        <Hero />
      </section>

      <About />
      <ProjectList title="Featured Projects" />
      <Contact />

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
