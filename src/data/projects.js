export const projects = [
  {
    slug: "recipe-finder-app",
    title: "Recipe Finder App",
    blurb:
      "A smart recipe discovery platform that lets users search by ingredients, dietary needs, and cuisine—powered by a meal API with instant filtering.",
    description:
      "A full-stack recipe discovery experience that pairs a React front end with a Node/Express backend and the Spoonacular API. Users can search by pantry ingredients, apply dietary filters, and open detailed recipe pages with nutrition, steps, and substitutions.",
    tech: ["React", "Node.js", "Express", "Spoonacular API", "Tailwind CSS"],
    highlights: [
      "Ingredient-first search that ranks recipes by match score",
      "Saved filters and recent searches persisted in local storage",
      "Responsive card grid with quick previews and expanded steps",
      "Server-side caching for API calls to keep results snappy",
    ],
    links: {
      live: "https://example.com/recipe-finder",
      repo: "https://github.com/username/recipe-finder",
    },
    timeline: "2024 • Personal project",
    result: "Reduced average search-to-open time to ~350ms with caching and lean API payloads.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
