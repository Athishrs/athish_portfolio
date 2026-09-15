import { Link } from "react-router-dom";
import { projects, otherProjects } from "../data/projects.js";

export default function Work() {
  return (
    <section id="work" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--section-gap) var(--pad-x) 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 24,
          borderBottom: "1px solid var(--line2)",
          paddingBottom: 16,
          marginBottom: "clamp(48px, 8vw, 84px)",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 300, fontSize: "var(--fs-h2)", letterSpacing: "-0.022em", margin: 0 }}>
          Selected work
        </h2>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--muted2)",
          }}
        >
          Three, built end to end
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(64px, 10vw, 112px)" }}>
        {projects.map((p) => (
          <article key={p.slug} style={{ position: "relative" }}>
            <div
              className="ghost-num"
              style={{
                position: "absolute",
                top: -48,
                right: -4,
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 150,
                lineHeight: 1,
                color: "var(--ghost)",
                letterSpacing: "-0.04em",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {p.num}
            </div>
            <div className="grid-2col" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px, 4vw, 52px)", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ width: 22, height: 1, background: "var(--accent)", display: "inline-block" }} />
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    {p.kind}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 400, fontSize: "var(--fs-h3)", lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.028em" }}>
                  <Link to={`/projects/${p.slug}`} className="link-hover">
                    {p.name}
                  </Link>
                </h3>
                <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: "var(--fs-tagline)", lineHeight: 1.45, color: "var(--ink2)", margin: "0 0 30px", textWrap: "pretty" }}>
                  {p.tagline}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}>
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        color: "#4a5049",
                        background: "var(--panel)",
                        border: "1px solid var(--line)",
                        padding: "5px 11px",
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, flexWrap: "wrap" }}>
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-accent"
                    style={{ padding: "10px 19px", background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 999 }}
                  >
                    View code
                  </a>
                  {p.links.live ? (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="pill-outline"
                      style={{ padding: "10px 19px", border: "1px solid var(--line2)", color: "var(--ink3)", borderRadius: 999 }}
                    >
                      Live site
                    </a>
                  ) : (
                    <Link
                      to={`/projects/${p.slug}`}
                      className="pill-outline"
                      style={{ padding: "10px 19px", border: "1px solid var(--line2)", color: "var(--ink3)", borderRadius: 999 }}
                    >
                      Case study
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <div
                  style={{
                    aspectRatio: "4 / 3",
                    border: "1px solid var(--line)",
                    borderRadius: 3,
                    backgroundImage:
                      "repeating-linear-gradient(135deg, var(--panel) 0px, var(--panel) 8px, var(--bg) 8px, var(--bg) 16px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11.5,
                      color: "var(--muted2)",
                      background: "var(--bg)",
                      padding: "7px 12px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    {p.shot}
                  </span>
                </div>
                <div style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 3, padding: "26px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <InfoRow label="The problem" text={p.problem} />
                  <div style={{ height: 1, background: "var(--line3)" }} />
                  <InfoRow label="What I did" text={p.approach} />
                  <div style={{ height: 1, background: "var(--line3)" }} />
                  <InfoRow label="Where it landed" text={p.outcome} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {otherProjects.length ? (
        <div style={{ marginTop: "clamp(72px, 10vw, 128px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, borderBottom: "1px solid var(--line2)", paddingBottom: 16, marginBottom: 36, flexWrap: "wrap" }}>
            <h3 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 300, fontSize: "clamp(1.35rem, 1.1rem + 0.9vw, 1.625rem)", letterSpacing: "-0.02em", margin: 0 }}>
              Also on GitHub
            </h3>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted2)" }}>
              {otherProjects.length} smaller projects
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }} className="grid-2col">
            {otherProjects.map((op) => (
              <a
                key={op.name}
                href={op.repo}
                target="_blank"
                rel="noreferrer"
                className="link-hover"
                style={{
                  display: "block",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontSize: 17, color: "var(--ink)", fontWeight: 500 }}>{op.name}</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--muted2)" }}>↗</span>
                </div>
                <p style={{ margin: "8px 0 10px", fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)" }}>{op.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {op.tech.map((t) => (
                    <span key={t} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "var(--muted2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function InfoRow({ label, text }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10.5,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: "var(--muted2)",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink2)", margin: 0, textWrap: "pretty" }}>{text}</p>
    </div>
  );
}
