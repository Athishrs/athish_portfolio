const history = [
  { what: "Software Engineer Intern, Holiday Channel", when: "2026 — now" },
  {
    what: "Teaching Assistant, Integrated Design — UNC Charlotte",
    when: "Jan 2025 — May 2026",
    detail:
      "Guided students building accessible, WCAG AA–compliant UI/UX across the full project lifecycle — code review, grading, and running group discussions.",
  },
  { what: "MS Information Technology, UNC Charlotte", when: "2024 — 2026" },
  { what: "Software Engineer, AAtek", when: "2022 — 2024" },
  { what: "Software Engineer, Velocita Racing", when: "2021 — 2022" },
];

export default function Background() {
  return (
    <section id="background" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "clamp(64px, 9vw, 100px) var(--pad-x) 0" }}>
      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "clamp(28px, 4vw, 48px)" }}>
        <div>
          <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 300, fontSize: "clamp(1.6rem, 1.3rem + 1.2vw, 2.125rem)", letterSpacing: "-0.02em", margin: "0 0 14px" }}>
            Background
          </h2>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
            Full detail on the{" "}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="link-hover"
              style={{ color: "var(--ink)", borderBottom: "1px solid #a9b5ae", paddingBottom: 2 }}
            >
              résumé (PDF)
            </a>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {history.map((h) => (
            <div
              key={h.what}
              style={{
                padding: "16px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 24,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: 16.5, color: "var(--ink2)" }}>{h.what}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: "var(--muted2)", whiteSpace: "nowrap" }}>
                  {h.when}
                </span>
              </div>
              {h.detail ? (
                <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--muted)", maxWidth: 620, textWrap: "pretty" }}>
                  {h.detail}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
