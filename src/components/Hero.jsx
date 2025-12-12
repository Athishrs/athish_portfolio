export default function Hero() {
  const name = "Athish";
  const role = "Master's in IT @ UNC Charlotte · Web & Backend Focused";
  const tagline =
    "I build web, data, and UX-driven experiences with React, APIs, and solid fundamentals.";
  const location = "Charlotte, NC";

  return (
    <div className="relative isolate min-h-screen flex py-30 justify-center px-6 lg:px-8">


      {/* CONTENT — CENTERED */}
      <div className="my-4.5px mx-auto max-w-2xl text-center">

        {/* Location badge */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full px-4 py-1 text-sm text-orange-300 ring-1 ring-orange-400/30">
            {location}
          </div>
        </div>

        {/* NAME */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          {name}
        </h1>

        {/* ROLE */}
        <p className="mt-4 text-lg font-semibold text-orange-400 sm:text-xl">
          {role}
        </p>

        {/* TAGLINE */}
        <p className="mt-6 text-lg text-gray-300 sm:text-xl">
          {tagline}
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-black shadow hover:bg-orange-400 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-orange-300 hover:text-orange-200"
          >
            Contact Me →
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/athish-rs/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center p-2 text-white hover:text-orange-200 transition"
            aria-label="LinkedIn"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
            </svg>
          </a>
          <a
            href="https://github.com/Athishrs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center p-2 text-white hover:text-orange-200 transition"
            aria-label="GitHub"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.79-.25.79-.56v-2c-3.2.69-3.87-1.37-3.87-1.37-.52-1.31-1.28-1.66-1.28-1.66-1.05-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.12-3.13 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.18-1.18 3.18-1.18.64 1.63.24 2.83.12 3.13.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.4-5.24 5.69.41.35.77 1.05.77 2.13v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>


    </div>
  );
}
