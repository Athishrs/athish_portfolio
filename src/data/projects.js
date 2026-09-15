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
    screenshots: [],
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
      live: "",
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
    screenshots: [],
    links: {
      live: "",
      repo: "https://github.com/Athishrs/Roomate-harmony-web",
    },
    timeline: "2026 • Solo build",
    result:
      "A trustworthy, well-tested household coordination app — group-scoped data, full auth, and end-to-end test coverage.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

// Everything else that's public on GitHub — smaller, earlier, or class projects.
// Linked out directly rather than given full case-study pages.
export const otherProjects = [
  {
    name: "SmallBizz",
    description:
      "A vendor–customer platform for one-to-one negotiation, messaging, and reviews in a marketplace-style workflow.",
    tech: ["Node.js", "Express", "JavaScript"],
    repo: "https://github.com/Athishrs/Small-BIzz",
  },
  {
    name: "ThinkBridge — Dishcovery",
    description:
      "Team redesign of a recipe-finder platform: ingredient/cuisine/diet filters backed by the Spoonacular API.",
    tech: ["React", "Node.js", "Vite", "Tailwind"],
    repo: "https://github.com/Athishrs/ThinkBridge",
  },
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
