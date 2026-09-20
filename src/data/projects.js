// Flagship, end-to-end case studies — shown in "Selected work" on the homepage
// and given their own /projects/:slug detail page.
export const projects = [
  {
    slug: "cortex",
    num: "01",
    kind: "Document intelligence",
    title: "Cortex",
    name: "Cortex",
    tagline:
      "Ask questions of your own documents, and get answers that point back to the page they came from.",
    blurb:
      "A retrieval-augmented generation API — upload documents, ask questions, get answers with cited sources — built to go deep on testing, CI/CD, Docker, and Kubernetes rather than just wiring up an LLM demo.",
    description:
      "Cortex is a Retrieval-Augmented Generation (RAG) API built with FastAPI, PostgreSQL/pgvector, Voyage AI, and Google Gemini — fully containerized, tested, and deployed via a real CI/CD pipeline into Kubernetes with Helm. Upload a document, it gets chunked and embedded, then every answer to a question is retrieved via vector similarity and returned with the sources it came from.",
    problem:
      "Search across a pile of internal documents is either keyword-literal or a black box. I wanted answers I could check.",
    approach:
      "A FastAPI retrieval service over PostgreSQL and pgvector: ingestion, recursive chunking, batched 1024-dimension embeddings and cosine-similarity retrieval, on an async routes → services → database split.",
    outcome:
      "Every response carries its sources. Containerized with Docker, running on Kubernetes, with GitHub Actions handling tests, image builds and deploys.",
    shot: "query + cited sources UI screenshot",
    tech: ["FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Voyage AI", "Gemini", "Docker", "Kubernetes", "Helm", "GitHub Actions"],
    stack: ["FastAPI", "pgvector", "SQLAlchemy", "Voyage AI", "Gemini", "Kubernetes"],
    highlights: [
      "Recursive chunking and batched 1024-dimension embeddings over PostgreSQL + pgvector.",
      "Async routes → services → database architecture for a clean, testable retrieval pipeline.",
      "Every answer returns with the source chunks it was grounded in.",
      "Containerized with Docker; deployed to Kubernetes via Helm with GitHub Actions CI/CD.",
    ],
    overview: {
      role: "Solo Developer",
      teamSize: "Solo",
      duration: "2026",
      figma: "",
      live: "",
      repo: "https://github.com/Athishrs/Cortex",
    },
    contributions: [
      "Built the FastAPI retrieval service: document ingestion, recursive chunking, and embedding pipeline.",
      "Implemented cosine-similarity retrieval over pgvector with a clean routes → services → database split.",
      "Wrote the CI/CD pipeline: automated tests, Docker image builds, and Kubernetes deploys via Helm.",
      "Wired Voyage AI for embeddings and Gemini for answer generation, with citations traced back to source chunks.",
    ],
    journey: {
      learned:
        "How to take a working RAG demo and turn it into something with real infrastructure — tests, CI/CD, containers, and orchestration.",
      challenges:
        "Getting chunking and retrieval tuned so answers stayed grounded in the right source material, and wiring a Kubernetes/Helm deploy pipeline from scratch.",
      skills:
        "Vector search, RAG architecture, FastAPI, Docker, Kubernetes, Helm, and CI/CD pipeline design.",
    },
    screenshots: [],
    links: {
      live: "",
      repo: "https://github.com/Athishrs/Cortex",
    },
    timeline: "2026 • Solo build",
    result:
      "A working, production-shaped RAG service — cited answers, containerized, and deployed through a real CI/CD pipeline into Kubernetes.",
  },
  {
    slug: "slotora",
    num: "02",
    kind: "Multi-tenant SaaS",
    title: "Slotora",
    name: "Slotora",
    tagline:
      "A booking platform where every business gets its own walled-off slice of the same system.",
    blurb:
      "A full-stack, multi-tenant appointment booking platform: businesses onboard, list staff and services, and take bookings — all strictly scoped per tenant and secured with JWT auth.",
    description:
      "Slotora is a full-stack, multi-tenant appointment booking platform built to demonstrate production-grade Java and React engineering. Users can discover businesses, book appointments with specific staff members, and manage their bookings — all secured with JWT authentication and correctly scoped so one tenant's data never leaks into another's.",
    problem:
      "Multi-tenancy is easy to get almost right and expensive to get wrong. One leaked query between tenants is the whole product.",
    approach:
      "Java 21 and Spring Boot over a five-entity schema with JWT auth, plus a three-step onboarding flow so an owner goes from signup to taking bookings without support.",
    outcome:
      "Nineteen automated tests passing against real containers via JUnit 5, Mockito and Testcontainers. Deployed on Elastic Beanstalk, RDS, S3 and CloudFront.",
    shot: "tenant booking dashboard screenshot",
    cardImage: "/Slotora/slotora-landing.png",
    tech: ["Java 21", "Spring Boot", "React", "PostgreSQL", "JWT", "Testcontainers", "JUnit 5", "Mockito", "AWS Elastic Beanstalk", "RDS", "S3", "CloudFront"],
    stack: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Testcontainers", "AWS"],
    highlights: [
      "Five-entity multi-tenant schema with strict tenant scoping enforced at the data layer.",
      "JWT authentication and a three-step self-serve onboarding flow for new businesses.",
      "19 automated tests running against real containers via JUnit 5, Mockito, and Testcontainers.",
      "Deployed on AWS: Elastic Beanstalk, RDS, S3, and CloudFront.",
    ],
    overview: {
      role: "Solo Developer",
      teamSize: "Solo",
      duration: "2026",
      figma: "",
      live: "https://slotora-steel.vercel.app",
      repo: "https://github.com/Athishrs/slotora",
    },
    contributions: [
      "Designed the multi-tenant schema and enforced tenant isolation across every query.",
      "Built JWT-based auth and a three-step onboarding flow for business owners.",
      "Wrote 19 automated tests against real containers using JUnit 5, Mockito, and Testcontainers.",
      "Deployed the full stack to AWS (Elastic Beanstalk, RDS, S3, CloudFront).",
    ],
    journey: {
      learned:
        "How to design a multi-tenant data model that's genuinely safe by default, not just safe by convention.",
      challenges:
        "Making sure tenant isolation held under every query path, and getting a smooth self-serve onboarding flow without any manual setup step.",
      skills:
        "Java/Spring Boot backend design, multi-tenant architecture, JWT auth, container-based integration testing, and AWS deployment.",
    },
    screenshots: [
      {
        src: "/Slotora/slotora-landing.png",
        alt: "Slotora landing page with booking hero, upcoming appointments panel, and trusted-salon logos.",
      },
    ],
    links: {
      live: "https://slotora-steel.vercel.app",
      repo: "https://github.com/Athishrs/slotora",
    },
    timeline: "2026 • Solo build",
    result:
      "A production-shaped multi-tenant SaaS booking platform, tested against real containers and deployed live on AWS.",
  },
  {
    slug: "roommate-harmony",
    num: "03",
    kind: "Household coordination",
    title: "Roommate Harmony",
    name: "Roommate Harmony",
    tagline:
      "Tooling for the things housemates actually argue about: money, chores and whose turn it is.",
    blurb:
      "A full-stack app for shared household life — expense splitting, chore scheduling, and issue tracking — with every piece of data strictly scoped to its group.",
    description:
      "Roommate Harmony is a full-stack web application for managing shared household life — expenses, chores, hangouts, and issue tracking — built with a strict Controller → Service backend and group-scoped data so people always see the right balances.",
    problem:
      "Shared-house apps break down when data isn't properly scoped to a group. People see the wrong balances and stop trusting it.",
    approach:
      "Group-scoped expense splitting, chore scheduling and issue tracking on a strict Controller → Service backend with Prisma over Supabase. JWT auth with HTTP-only cookies, bcrypt and route guards.",
    outcome:
      "Covered end to end with Supertest API tests and Playwright browser tests, deployed across Vercel, Render and Supabase.",
    shot: "expense split + chore schedule screenshot",
    cardImage: "/RoommateHarmony/expenses-page.png",
    tech: ["React 18", "Vite", "Shadcn UI", "Express", "Prisma", "Supabase", "JWT", "bcrypt", "Supertest", "Playwright", "Vercel", "Render"],
    stack: ["React 18", "Vite", "Shadcn UI", "Express", "Prisma", "Playwright"],
    highlights: [
      "Group-scoped expense splitting, chore scheduling, and issue tracking in one app.",
      "Strict Controller → Service backend architecture with Prisma over Supabase.",
      "JWT auth via HTTP-only cookies, bcrypt password hashing, and route guards.",
      "End-to-end coverage: Supertest for the API, Playwright for the browser.",
    ],
    overview: {
      role: "Solo Developer",
      teamSize: "Solo",
      duration: "2026",
      figma: "",
      live: "https://roomate-harmony-web-client.vercel.app",
      repo: "https://github.com/Athishrs/Roomate-harmony-web",
    },
    contributions: [
      "Built group-scoped expense splitting, chore scheduling, and issue tracking features.",
      "Designed the Controller → Service backend architecture on Prisma over Supabase.",
      "Implemented JWT auth with HTTP-only cookies, bcrypt hashing, and route guards.",
      "Wrote Supertest API tests and Playwright browser tests, then deployed to Vercel, Render, and Supabase.",
    ],
    journey: {
      learned:
        "How to keep multi-user shared-data apps trustworthy by scoping everything to a group at the architecture level, not just the UI.",
      challenges:
        "Getting balances and chore state to always reflect the right group, and building auth that was simple to use but genuinely secure.",
      skills:
        "React/Vite frontend architecture, Prisma/Supabase data modeling, JWT auth, and end-to-end testing with Playwright and Supertest.",
    },
    screenshots: [
      {
        src: "/RoommateHarmony/expenses-page.png",
        alt: "Expenses page showing total this month, unsettled/settled counts, and a receipt breakdown.",
      },
      {
        src: "/RoommateHarmony/chores-page.png",
        alt: "Chores list page for keeping the household running.",
      },
      {
        src: "/RoommateHarmony/chores-calendar.png",
        alt: "Chores calendar view with a scheduled chore on the month grid.",
      },
      {
        src: "/RoommateHarmony/hangout-page.png",
        alt: "Hangouts page for coordinating household plans.",
      },
      {
        src: "/RoommateHarmony/issues-page.png",
        alt: "Issues page for tracking household problems.",
      },
      {
        src: "/RoommateHarmony/profile-page.png",
        alt: "User profile page.",
      },
      {
        src: "/RoommateHarmony/group-settings.png",
        alt: "Group settings page for managing household members.",
      },
    ],
    links: {
      live: "https://roomate-harmony-web-client.vercel.app",
      repo: "https://github.com/Athishrs/Roomate-harmony-web",
    },
    timeline: "2026 • Solo build",
    result:
      "A trustworthy, well-tested household coordination app — group-scoped data, full auth, and end-to-end test coverage.",
  },
  {
    slug: "small-bizz",
    num: "04",
    kind: "Marketplace platform",
    title: "SmallBizz",
    name: "SmallBizz",
    tagline:
      "A place for vendors and customers to talk directly — negotiate price, build trust, leave reviews.",
    blurb:
      "A vendor–customer communication platform for one-to-one conversations, price negotiation, and reviews in a marketplace-style workflow.",
    description:
      "SmallBizz is a vendor–customer communication platform that enables one-to-one conversations, price negotiation, and reviews between vendors and customers. It focuses on building trust and transparency within a marketplace-style workflow: customers connect directly with vendors to discuss services and negotiate pricing, while vendors manage profiles and build credibility through customer feedback.",
    problem:
      "Marketplace-style vendor discovery usually stops at a listing — there's no direct channel to negotiate or build trust before committing.",
    approach:
      "A Node.js/Express backend with real one-to-one messaging, price-negotiation threads, and a review system, wired to a responsive frontend covering vendor profiles, service listings, and conversations.",
    outcome:
      "Vendors and customers can message directly, negotiate price, and leave reviews — turning a static listing into an ongoing relationship, with a modular backend ready to grow.",
    shot: "vendor–customer negotiation UI screenshot",
    cardImage: "/SmallBizz/smallbizz-landing.png",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Git", "GitHub", "GitHub Pages", ".env"],
    stack: ["Node.js", "Express", "JavaScript", "Git", "GitHub Pages"],
    highlights: [
      "One-to-one messaging between vendors and customers for direct price negotiation.",
      "Review system so vendors build credibility through customer feedback.",
      "Vendor profile management alongside service/offering listings.",
      "Modular Node.js/Express backend with environment-based configuration, ready to extend.",
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
      "Built one-to-one messaging and price-negotiation flows between vendors and customers.",
      "Implemented a review system for customer feedback and vendor credibility.",
      "Set up the Node.js + Express backend with modular structure and environment-based configuration.",
      "Managed Git/GitHub workflows and kept the repo deployment-ready.",
    ],
    journey: {
      learned:
        "Building real-time-feeling messaging and negotiation flows on top of a modular Express backend.",
      challenges:
        "Keeping negotiation state and message threads consistent per vendor-customer pair while staying deployment-ready.",
      skills:
        "Frontend-backend integration, Git workflows, environment management, and designing trust-building UX for marketplace users.",
    },
    screenshots: [
      {
        src: "/SmallBizz/smallbizz-landing.png",
        alt: "SmallBizz landing page hero with CTA, services nav, and beauty imagery.",
      },
      {
        src: "/SmallBizz/smallbizz-services.png",
        alt: "SmallBizz services overview with welcome banner and category cards.",
      },
      {
        src: "/SmallBizz/smallbizz-home-made-food.png",
        alt: "SmallBizz Home Made Food category with cards for cakes, pickles, snacks, and tiffin.",
      },
    ],
    links: {
      live: "",
      repo: "https://github.com/Athishrs/Small-BIzz",
    },
    timeline: "Nov–Dec 2024 • Solo build",
    result:
      "A working vendor–customer marketplace platform where negotiation and trust happen directly in the product, not off to the side.",
  },
  {
    slug: "thinkbridge-dishcovery",
    num: "05",
    kind: "Recipe discovery platform",
    title: "ThinkBridge — Dishcovery",
    name: "ThinkBridge — Dishcovery",
    tagline:
      "What can I cook with what I already have? Filter by ingredient, cuisine, diet, and time.",
    blurb:
      "Team redesign of a recipe-finder platform — ingredient, cuisine, diet, and calorie filters backed by the Spoonacular API, with clean JSON contracts for the UI.",
    description:
      "ThinkBridge – Dishcovery is an enhanced redesign inspired by the recipe-finding platform MyFridgeFood, identifying usability and visual-design gaps in the original to inform an improved prototype and implementation. It pairs a clean, responsive UI with performance-focused backend logic surfacing recipes by ingredients, dietary preferences, and cooking time.",
    problem:
      "The reference product had real usability and visual design limitations — filtering felt clunky and results weren't trustworthy enough to act on.",
    approach:
      "As backend/API integration lead on a 6-person team, I built Node.js endpoints over the Spoonacular API for recipes, nutrition, and ingredients, added JWT auth for sign up/sign in, and shaped query params (keyword, cuisine, calories, diet) into clean JSON the frontend could render directly.",
    outcome:
      "Endpoints were validated end-to-end in Postman before frontend integration, and sample payloads were shared with the UI team to unblock recipe card and detail rendering.",
    shot: "recipe search + filters UI screenshot",
    cardImage: "/dishcovery%20images/home%20page.png",
    tech: ["Node.js", "JWT", "Spoonacular API", "Postman", "GitHub", "VS Code", "React (team)", "Vite (team)", "TailwindCSS (team)"],
    stack: ["Node.js", "JWT", "Spoonacular API", "React", "Vite", "Tailwind"],
    highlights: [
      "Spoonacular integration with keyword, cuisine, calorie, and dietary filters.",
      "JWT-based sign up/sign in with token validation.",
      "Backend routes/controllers with consistent naming and shared helper utilities.",
      "Postman-validated endpoints with sample payloads shared to unblock the frontend team.",
    ],
    overview: {
      role: "Backend Developer (API Integration & Data Pipeline)",
      teamSize: "6",
      duration: "Aug 2025 – Dec 2025",
      figma: "https://www.figma.com/design/Ml5Sl6SDhkvTxYdSZBPcYf/ThinkBridge_WireFrames_Week7?node-id=0-1&t=mHqAm59AZCfzDDhJ-1",
      live: "https://thinkbridgedishcovery.netlify.app",
      repo: "https://github.com/Athishrs/ThinkBridge",
    },
    contributions: [
      "Created Node.js API endpoints for recipes, nutrition details, and ingredient lists via Spoonacular.",
      "Implemented sign up/sign in with JWT authentication and token validation.",
      "Shaped query params (keywords, cuisine, calories, dietary filters) into clean JSON for the UI.",
      "Validated endpoints in Postman and shared sample responses so the UI team's recipe cards/details rendered correctly.",
    ],
    journey: {
      learned:
        "Integrating a real third-party API with inconsistent data, and designing routes flexible enough for a frontend team to consume directly.",
      challenges:
        "Handling Spoonacular's large/inconsistent dataset and debugging API key/CORS issues across a 6-person, multi-sprint team.",
      skills:
        "REST API integration, Node.js backend development, JWT auth, Postman testing, JSON transformation, and cross-team Git workflow.",
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
      "Delivered reliable, cleaned recipe data to the frontend enabling accurate filters and cards, while keeping the API integration resilient across the team's sprints.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

// Everything else that's public on GitHub — smaller, earlier, or class projects.
// Linked out directly rather than given full case-study pages.
export const otherProjects = [
  {
    name: "Weather Predictor",
    description:
      "A machine learning model predicting temperature and precipitation for Chennai, India's coastal climate.",
    tech: ["Python", "Machine Learning"],
    repo: "https://github.com/Athishrs/Weather_predictor",
  },
  {
    name: "Movies App",
    description: "A movie browsing app built as a Jupyter Notebook exploration project.",
    tech: ["Python", "Jupyter"],
    repo: "https://github.com/Athishrs/MoviesApp",
  },
  {
    name: "GitHub Web Scraping",
    description: "Extracts top topics from GitHub and lists their most popular repositories.",
    tech: ["Python", "Web Scraping"],
    repo: "https://github.com/Athishrs/Github_webscraping",
  },
  {
    name: "Expense Tracker",
    description: "A simple tracker for logging spend descriptions and amounts.",
    tech: ["JavaScript"],
    repo: "https://github.com/Athishrs/expense-tracker",
  },
  {
    name: "Simon Game",
    description: "The classic Simon memory game, built with jQuery.",
    tech: ["JavaScript", "jQuery"],
    repo: "https://github.com/Athishrs/Simon-game",
  },
];
