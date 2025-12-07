export const projects = [
  {
    slug: "dishcovery-smart-recipe-finder",
    title: "ThinkBridge – Dishcovery",
    blurb:
      "Smart recipe-finder backend powering ingredient, cuisine, diet, and calorie filters with clean JSON for the UI.",
    description:
      "Dishcovery is a smart recipe-finder that surfaces recipes by ingredients, cuisines, diet preferences, and calorie limits. I owned the backend: Spoonacular integration, queryable endpoints, clean data mapping, error handling, and close collaboration with frontend to keep contracts consistent and performant.",
    tech: [
      "Node.js",
      "Express.js",
      "Axios",
      "Spoonacular API",
      "Postman",
      "GitHub",
      "VS Code",
      "React (team)",
      "Vite (team)",
      "TailwindCSS (team)",
    ],
    highlights: [
      "Spoonacular integration with search keywords, cuisine, calories, and dietary filters",
      "Backend routes/controllers with Axios helpers and consistent naming",
      "Postman-tested endpoints with validated fields and calculated values",
      "Shared sample payloads to unblock frontend rendering of recipe cards/details",
    ],
    overview: {
      role: "Backend Developer (API Integration & Data Pipeline)",
      teamSize: "6",
      duration: "August 2025 – December 2025",
      figma: "[Insert your Figma link]",
      live: "https://thinkbridgedishcovery.netlify.app",
      repo: "https://github.com/username/recipe-finder",
    },
    contributions: [
      "Created Node.js/Express routes for recipes, nutrition details, and ingredient lists using Spoonacular.",
      "Implemented query params (keywords, cuisine, calories, dietary filters) with cleaned JSON for the UI.",
      "Set up backend architecture: routes, controllers, Axios utilities, naming conventions, request patterns.",
      "Validated endpoints with Postman; verified fields, formats, and calculated values for frontend filters.",
      "Shared sample API responses and worked with UI devs to ensure recipe cards and details render correctly.",
    ],
    journey: {
      learned:
        "Integrated a real-world third-party API, designed flexible routes for frontend consumption, and used Postman for thorough validation in a 6-person team.",
      challenges:
        "Handling Spoonacular’s large/inconsistent dataset, mapping complex responses, ensuring all parameters returned correct data, and debugging API key/cors issues across sprints.",
      skills:
        "REST API integration, Node.js + Express backend development, Postman testing, JSON transformation, Git workflow, and multi-sprint team communication.",
    },
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        alt: "Placeholder — add Postman tests, backend structure, sample JSON, console logs, or UI screenshots.",
      },
    ],
    links: {
      live: "https://thinkbridgedishcovery.netlify.app",
      repo: "https://github.com/username/recipe-finder",
    },
    timeline: "Aug–Dec 2025 • Team project",
    result:
      "Delivered reliable, cleaned recipe data to the frontend, enabling accurate filters and cards while keeping the API integration resilient.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
