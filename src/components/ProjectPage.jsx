import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="px-6 md:px-16 py-24">
        <div className="mx-auto max-w-4xl border hairline p-10 text-center">
          <p className="font-display text-2xl">Project not found.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            The project you&rsquo;re looking for doesn&rsquo;t exist yet. Head back and pick
            another one.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="border border-[var(--ink)] px-4 py-2 text-sm font-medium hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
            >
              ← Go back
            </button>
            <Link
              to="/projects"
              className="text-sm font-medium text-[var(--accent)] hover:text-[var(--ink)] transition-colors"
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
    <div className="pb-16">
      <div className="px-6 md:px-16 py-8 border-b hairline">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
        >
          <span aria-hidden>←</span> Back
        </button>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16 border-b hairline">
        <p className="font-mono-ed text-xs uppercase tracking-widest text-[var(--muted)]">
          {project.timeline}
        </p>
        <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-[var(--ink)]/90">
          {summary}
        </p>
        <p className="mt-4 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-3">
        <div className="lg:col-span-2 divide-y hairline border-b hairline lg:border-b-0 lg:border-r">
          <div className="grid gap-8 sm:grid-cols-2 px-6 md:px-16 py-10">
            <InfoCard title="Project Overview" items={[
              { label: "Project Name", value: project.title },
              { label: "My Role", value: overview.role },
              { label: "Team Size", value: overview.teamSize },
              { label: "Duration", value: overview.duration },
            ]} />

            <div>
              <h3 className="font-display text-lg">Links</h3>
              <div className="mt-4 space-y-2 text-sm">
                {overview.figma && (
                  <a
                    href={overview.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                  >
                    Figma file ↗
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                  >
                    Live site ↗
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                  >
                    Source code ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          <SectionCard title="My Contributions">
            <div className="space-y-4">
              <h4 className="font-mono-ed text-xs uppercase tracking-wide text-[var(--muted)]">
                Features I built
              </h4>
              <ul className="space-y-3">
                {project.contributions?.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="font-mono-ed text-xs uppercase tracking-wide text-[var(--muted)]">
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono-ed text-xs text-[var(--muted)]">
                  {project.tech?.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="My Journey">
            <div className="space-y-5">
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
              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span className="text-[var(--ink)]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          ) : null}

          {project.result && (
            <SectionCard title="Outcome">
              <p className="leading-relaxed text-[var(--ink)]/90">{project.result}</p>
            </SectionCard>
          )}
        </div>

        <aside className="px-6 md:px-16 py-10">
          <h3 className="font-display text-lg">Visuals</h3>
          {project.screenshots?.length ? (
            <div className="mt-4 grid gap-4">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="border hairline overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${shot.src.replace(/^\//, "")}`}
                    alt={shot.alt ?? "Project screenshot"}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  {shot.alt && (
                    <figcaption className="px-3 py-2 font-mono-ed text-xs text-[var(--muted)]">
                      {shot.alt}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-[var(--muted)]">
              Add screenshots to showcase the final product.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-lg">{title}</h3>
      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between gap-4 text-sm">
            <dt className="text-[var(--muted)]">{item.label}</dt>
            <dd className="text-right font-medium">{item.value || "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="px-6 md:px-16 py-10">
      <h3 className="font-display text-lg">{title}</h3>
      <div className="mt-4 text-[var(--ink)]/90">{children}</div>
    </div>
  );
}

function JourneyRow({ label, text }) {
  return (
    <div className="space-y-1">
      <p className="font-mono-ed text-xs uppercase tracking-wide text-[var(--muted)]">{label}</p>
      <p className="leading-relaxed text-[var(--ink)]/90">{text}</p>
    </div>
  );
}
