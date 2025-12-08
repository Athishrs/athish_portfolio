export const projects = [
  {
    slug: "dishcovery-smart-recipe-finder",
    title: "ThinkBridge – Dishcovery",
    blurb:
      "Smart recipe-finder backend powering ingredient, cuisine, diet, and calorie filters with clean JSON for the UI.",
    description:
      "Dishcovery is a modern, intelligent recipe-discovery platform that helps people answer a daily question: “What can I cook with the ingredients I already have?” It pairs a clean, responsive UI with performance-focused backend logic to surface recipes that match ingredients, dietary preferences, and cooking time. Users explore with dynamic filters, see high-quality images, ingredient breakdowns, and step-by-step instructions—whether they’re beginners or seasoned cooks.",
    tech: [
      "Node.js",
      "JWT",
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
      "Backend routes/controllers with consistent naming and helper utilities",
      "Postman-tested endpoints with validated fields and calculated values",
      "Shared sample payloads to unblock frontend rendering of recipe cards/details",
    ],
    overview: {
      role: "Backend Developer (API Integration & Data Pipeline)",
      teamSize: "6",
      duration: "August 2025 – December 2025",
      figma:
        "https://www.figma.com/design/Ml5Sl6SDhkvTxYdSZBPcYf/ThinkBridge_WireFrames_Week7?node-id=0-1&t=mHqAm59AZCfzDDhJ-1",
      live: "https://thinkbridgedishcovery.netlify.app",
      repo: "https://github.com/Athishrs/ThinkBridge",
    },
    contributions: [
      "Created Node.js API endpoints for recipes, nutrition details, and ingredient lists using Spoonacular.",
      "Implemented sign up/sign in flows with JWT authentication and token validation.",
      "Implemented query params (keywords, cuisine, calories, dietary filters) with cleaned JSON for the UI.",
      "Validated endpoints with Postman; verified fields, formats, and calculated values for frontend filters.",
      "Shared sample API responses and worked with UI devs to ensure recipe cards and details render correctly.",
    ],
    journey: {
      learned:
        "Integrated a real-world third-party API, designed flexible routes for frontend consumption, and used Postman for thorough validation in a 6-person team.",
      challenges:
        "Handling Spoonacular’s large/inconsistent dataset, mapping complex responses, ensuring all parameters returned correct data, and debugging API key/cors issues across sprints.",
      skills:
        "REST API integration, Node.js backend development, JWT auth, Postman testing, JSON transformation, Git workflow, and multi-sprint team communication.",
    },
    screenshots: [
      {
        src: "/dishcovery%20images/home%20page.png",
        alt: "Dishcovery home page with hero CTA and recipe filters.",
      },
      {
        src: "/dishcovery%20images/Recipes%20page.png",
        alt: "Recipe search grid with cuisine, diet, and time filters.",
      },
      {
        src: "/dishcovery%20images/Recipe%20detail%20page.png",
        alt: "Recipe detail view showing nutrition, ingredients, and tags.",
      },
      {
        src: "/dishcovery%20images/Cooking%20instructions.png",
        alt: "Cooking instructions page with numbered steps.",
      },
      {
        src: "/dishcovery%20images/Guided%20cooking.png",
        alt: "Guided cooking step with timer and next-step action.",
      },
      {
        src: "/dishcovery%20images/Profile.png",
        alt: "User profile form with dietary options and skill level selectors.",
      },
    ],
    links: {
      live: "https://thinkbridgedishcovery.netlify.app",
      repo: "https://github.com/Athishrs/ThinkBridge",
    },
    timeline: "Aug–Dec 2025 • Team project",
    result:
      "Delivered reliable, cleaned recipe data to the frontend, enabling accurate filters and cards while keeping the API integration resilient.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
