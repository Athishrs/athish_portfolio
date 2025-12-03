import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function ProjectList({ title = "Projects" }) {
  return (
    <section id="projects" className="min-h-screen px-4 md:px-8 lg:px-10 py-16">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          {title}
        </h2>
        <p className="mt-3 text-center text-gray-400">
          A selection of work I’ve built and contributed to.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug ?? project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
