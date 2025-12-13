export const projects = [
  {
    slug: "small-bizz",
    title: "Small Bizz",
    blurb:
      "Modern web platform that gives local businesses a polished, responsive site with clean navigation, services, and easy contact paths.",
    description:
      "Small Bizz helps neighborhood and local businesses establish a professional online presence without extra technical overhead. It focuses on a clean, responsive layout so visitors can quickly understand services, browse offerings, and reach out—while staying scalable for future additions like auth, dashboards, analytics, or payments.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Git",
      "GitHub",
      "GitHub Pages",
      ".env",
    ],
    highlights: [
      "Responsive design tuned for desktop, tablet, and mobile for a consistent UX.",
      "Clear sections for business details, services/offerings, and brand messaging.",
      "Straightforward navigation and contact entry points to reduce friction.",
      "Modular structure ready for future features (auth, dashboards, analytics, payments).",
    ],
    overview: {
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo",
      duration: "Nov–Dec 2024",
      figma: "",
      live: "",
      repo: "https://github.com/Athishrs/Small-BIzz",
    },
    contributions: [
      "Designed and built a responsive layout with clean navigation for services, offerings, and contact details.",
      "Set up Node.js + Express backend with modular structure and environment-based configuration.",
      "Managed Git/GitHub workflows, resolving merge conflicts and keeping the repo deployment-ready.",
      "Deployed via GitHub Pages/hosting, debugging domain and environment variable configuration.",
    ],
    journey: {
      learned:
        "Building and deploying a full web application with clean file organization and modular code.",
      challenges:
        "Debugging deployment and domain configuration issues while keeping the site performant and accessible.",
      skills:
        "Frontend-backend integration, Git workflows, environment management, and designing user-friendly layouts for real users.",
    },
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Small Bizz dashboard showing pipeline and quick actions.",
      },
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        alt: "Invoice and payment link flow for a local shop.",
      },
    ],
    links: {
      live: "",
      repo: "https://github.com/Athishrs/Small-BIzz",
    },
    timeline: "Nov–Dec 2024 • Solo build",
    result:
      "Shipped a ready-to-grow foundation that gives small businesses a polished, responsive web presence and a path to layer in future capabilities.",
  },
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
  {
    slug: "unc-charlotte-admissions-redesign",
    title: "UNC Charlotte Admissions & Financial Aid Redesign",
    blurb:
      "High-fidelity redesign that centralizes finances, personalizes content, and clarifies terminology for a clearer, more trustworthy admissions experience.",
    description:
      "Redesigned UNC Charlotte’s admissions and financial aid experience to reduce confusion and build trust. The work centers on a unified financial hub (tuition, scholarships, assistantships/jobs, living costs), personalized filters, and clearer terminology/credibility cues so students can compare scholarships, estimate tuition, and understand requirements with confidence.",
    tech: [
      "Figma",
      "High-fidelity prototyping",
      "Design system tokens",
      "Accessibility pass",
      "Information architecture",
      "Usability testing plan",
    ],
    highlights: [
      "Reworked IA into a financial hub with clear paths to Compare / Estimate / Apply.",
      "Key flows: scholarship discovery → comparison → tuition impact; admissions → program details → credibility checks.",
      "Page upgrades: dedicated scholarship/assistantship pages, tuition estimator with semester breakdown, back/breadcrumbs, scrollable layouts.",
      "Visual/accessibility: UNC Charlotte green/gold/white, higher contrast, larger hierarchy, consistent cards/buttons/filters, clearer affordances.",
    ],
    overview: {
      role: "Product Designer (Solo)",
      teamSize: "Solo",
      duration: "Fall 2025",
      figma:
        "https://www.figma.com/design/EToax7P94y0vN4WJOzvvlW/High-FIdelity?node-id=0-1&t=iY2Rd9v3RdSb5d32-1",
      live: "",
      repo: "",
    },
    contributions: [
      "Centralized tuition, scholarships, assistantships/jobs, and living costs into one hub with clear paths to Compare / Estimate / Apply.",
      "Designed scholarship discovery → comparison → tuition impact flows with personalized filtering.",
      "Built tuition estimator with semester-wise breakdown and clearer back/breadcrumb controls to keep users oriented.",
      "Refined visual system (UNC Charlotte green/gold/white) with higher contrast, consistent cards/buttons/filters, and clearer affordances.",
      "Ran 3 usability sessions (international applicants); improved task success and perceived credibility; identified need for stronger credibility signals and deeper terminology support.",
    ],
    journey: {
      learned:
        "How to pair admissions clarity with financial transparency while keeping flows scannable and conversion-friendly.",
      challenges:
        "Combining academic, financial, and deadline content without overwhelming first-time visitors.",
      skills:
        "High-fidelity UI design, component systems, IA restructuring, accessibility-first layout decisions, and prototype storytelling.",
    },
    screenshots: [
      {
        src: "/uncc/uncc-home.png",
        alt: "Redesigned UNC Charlotte admissions landing page with clear pathways to financial info and applications.",
      },
      {
        src: "/uncc/uncc-financial-hub.png",
        alt: "Unified financial hub showing tuition, scholarships, assistantships, and living costs.",
      },
      {
        src: "/uncc/uncc-scholarship-compare.png",
        alt: "Scholarship comparison view with personalized filters and impact on tuition.",
      },
      {
        src: "/uncc/uncc-terminology.png",
        alt: "Terminology and credibility cues clarifying financial aid and admissions terms.",
      },
    ],
    links: {
      live: "",
      repo: "",
    },
    timeline: "Fall 2025 • Solo redesign",
    result:
      "Delivered a clearer admissions + financial aid journey that emphasizes cost transparency, eligibility clarity, and a guided application path.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
