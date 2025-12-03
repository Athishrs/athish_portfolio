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
      </div>


    </div>
  );
}

