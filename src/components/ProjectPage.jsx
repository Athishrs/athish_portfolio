import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="px-4 md:px-8 lg:px-10 pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#2B261F] bg-[#1A1712] p-10 text-center">
          <p className="text-lg font-semibold text-white">Project not found.</p>
          <p className="mt-2 text-sm text-gray-400">
            The project you’re looking for doesn’t exist yet. Head back and pick
            another one.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-lg border border-[#2B261F] px-4 py-2 text-sm font-semibold text-white hover:border-[#C15903] hover:text-[#C15903] transition-colors"
            >
              ← Go back
            </button>
            <Link
              to="/#projects"
              className="rounded-lg bg-[#C15903] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e5791c] transition-colors"
            >
              View all projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const summary = project.blurb ?? project.description;

  return (
    <div className="px-4 md:px-8 lg:px-10 pb-16">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-[#C15903] transition-colors"
        >
          <span aria-hidden>←</span> Back
        </button>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#2B261F] px-3 py-1 text-xs font-semibold text-[#C15903] border border-[#3a3228]">
                {project.timeline}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {project.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              {summary}
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[#C15903] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e5791c] transition-colors"
                >
                  View live ↗
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[#2B261F] px-4 py-2 text-sm font-semibold text-white hover:border-[#C15903] hover:text-[#C15903] transition-colors"
                >
                  View code
                </a>
              )}
              <Link
                to="/#projects"
                className="rounded-lg border border-transparent px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white"
              >
                Back to projects
              </Link>
            </div>

            <div className="rounded-2xl border border-[#2B261F] bg-[#1A1712] p-6">
              <h2 className="text-xl font-semibold text-white">Highlights</h2>
              <ul className="mt-4 space-y-3 text-gray-200">
                {project.highlights?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#C15903]" />
                    <span className="leading-relaxed text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.result && (
              <div className="rounded-2xl border border-[#2B261F] bg-[#15120f] p-6">
                <h3 className="text-lg font-semibold text-white">Outcome</h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  {project.result}
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#2B261F] bg-[#1A1712] p-6">
              <h3 className="text-lg font-semibold text-white">Tech stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#2F2A22] bg-[#1F1B16] px-3 py-1 text-xs text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#2B261F] bg-[#14110e] p-6">
              <h3 className="text-lg font-semibold text-white">Project links</h3>
              <div className="mt-3 space-y-2 text-sm text-gray-300">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-transparent px-3 py-2 hover:border-[#C15903] hover:text-[#C15903] transition-colors"
                  >
                    Live preview ↗
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-transparent px-3 py-2 hover:border-[#C15903] hover:text-[#C15903] transition-colors"
                  >
                    Source code ↗
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
