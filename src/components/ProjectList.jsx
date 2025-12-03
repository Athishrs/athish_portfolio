import ProjectCard from "./ProjectCard.jsx";
export default function ProjectList() {
  const projects = [
    {
      title: "Recipe Finder App",
      description:
        "A smart recipe search platform built with React, Node.js, and the Spoonacular API. Users can explore meals, filter by ingredients, and view nutritional details.",
      tech: ["React", "Node.js", "Express", "API Integration"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive developer portfolio built using React and Tailwind CSS with custom hero sections, animations, and reusable components.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#",
    },
    {
      title: "Smart Meal Planner",
      description:
        "An intelligent meal-planning tool with dynamic filters, user preferences, and a clean UI designed with UX best practices.",
      tech: ["React", "MongoDB", "UX Design"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 md:px-8 lg:px-10 py-16">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Projects
        </h2>
        <p className="mt-3 text-center text-gray-400">
          A selection of work I’ve built and contributed to.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
