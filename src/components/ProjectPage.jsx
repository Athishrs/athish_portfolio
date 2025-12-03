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
  const overview = project.overview ?? {};

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
          <div className="lg:col-span-2 space-y-6">
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

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Project Overview" items={[
                { label: "Project Name", value: project.title },
                { label: "My Role", value: overview.role },
                { label: "Team Size", value: overview.teamSize },
                { label: "Duration", value: overview.duration },
              ]} />

              <div className="rounded-2xl border border-[#2B261F] bg-[#15120f] p-6">
                <h3 className="text-lg font-semibold text-white">Links</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-200">
                  {overview.figma && (
                    <a
                      href={overview.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-lg border border-transparent px-3 py-2 hover:border-[#C15903] hover:text-[#C15903] transition-colors"
                    >
                      Figma file ↗
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-lg border border-transparent px-3 py-2 hover:border-[#C15903] hover:text-[#C15903] transition-colors"
                    >
                      Live site ↗
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
            </div>

            <SectionCard title="My Contributions">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-200">Features I built</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.contributions?.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#C15903]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-200">Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
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
              </div>
            </SectionCard>

            <SectionCard title="My Journey">
              <div className="space-y-4 text-gray-300">
                {project.journey?.learned && (
                  <JourneyRow label="What I learned" text={project.journey.learned} />
                )}
                {project.journey?.challenges && (
                  <JourneyRow label="Challenges I overcame" text={project.journey.challenges} />
                )}
                {project.journey?.skills && (
                  <JourneyRow label="Skills gained" text={project.journey.skills} />
                )}
              </div>
            </SectionCard>

            {project.highlights?.length ? (
              <SectionCard title="Highlights">
                <ul className="mt-2 space-y-3 text-gray-200">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#C15903]" />
                      <span className="leading-relaxed text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ) : null}

            {project.result && (
              <SectionCard title="Outcome">
                <p className="text-gray-300 leading-relaxed">
                  {project.result}
                </p>
              </SectionCard>
            )}
          </div>

          <aside className="space-y-4">
            <SectionCard title="Visuals">
              {project.screenshots?.length ? (
                <div className="grid gap-3">
                  {project.screenshots.map((shot) => (
                    <figure key={shot.src} className="overflow-hidden rounded-xl border border-[#2B261F] bg-[#0f0d0a]">
                      <img
                        src={shot.src}
                        alt={shot.alt ?? "Project screenshot"}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                      {shot.alt && (
                        <figcaption className="px-3 py-2 text-xs text-gray-400">
                          {shot.alt}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">Add screenshots to showcase the final product.</p>
              )}
            </SectionCard>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-[#2B261F] bg-[#1A1712] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between text-sm text-gray-300">
            <dt className="text-gray-400">{item.label}</dt>
            <dd className="font-semibold text-white">
              {item.value || "—"}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-[#2B261F] bg-[#1A1712] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function JourneyRow({ label, text }) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-semibold text-gray-200">{label}</p>
      <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}
