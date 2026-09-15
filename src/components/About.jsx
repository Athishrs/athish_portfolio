const principles = [
  {
    title: "Measure before rewriting.",
    body: "At Holiday Channel an endpoint took 10.4 seconds. The instinct is to rewrite the query; the cause was a global database retry swallowing failures upstream. Fixing that brought it to 0.25 seconds without touching feature code.",
  },
  {
    title: "Delete more than you add.",
    body: "The same project ran two competing backends. Consolidating them meant removing about 3,000 lines of legacy code and rebuilding auth with self-healing Auth0 provisioning, so the next person has one path to read.",
  },
  {
    title: "Caching is a last step, not a first one.",
    body: "On AAtek's robot telemetry platform I tuned PostgreSQL queries first, then added Redis where it earned its keep. Together they took 70% off status-endpoint latency and halved dashboard load time.",
  },
  {
    title: "Accessibility isn't a checklist someone else runs.",
    body: "TA'ing Integrated Design at UNC Charlotte meant reviewing other students' UI code against WCAG AA all semester — where contrast quietly fails, where a component decision comes back to bite later. I run that same review on my own work now; this site's muted text color exists because it didn't clear 4.5:1 the first time.",
  },
];

export default function About() {
  return (
    <section id="approach" style={{ background: "var(--dark)", color: "#eceae2", marginTop: "var(--section-gap)", padding: "clamp(56px, 9vw, 96px) 0" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--pad-x)" }}>
        <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "clamp(32px, 5vw, 56px)", alignItems: "start" }}>
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--dark-accent)",
              }}
            >
              How I work
            </span>
            <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 200, fontSize: "var(--fs-h2)", lineHeight: 1.1, letterSpacing: "-0.028em", margin: "18px 0 0" }}>
              Four habits that keep showing up.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {principles.map((pr) => (
              <div key={pr.title} style={{ borderTop: "1px solid var(--dark-line)", padding: "30px 0" }}>
                <h3 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 400, fontSize: "clamp(1.35rem, 1.1rem + 1vw, 1.7rem)", lineHeight: 1.22, margin: "0 0 12px", color: "#f3f1e9" }}>
                  {pr.title}
                </h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.62, color: "var(--dark-muted)", margin: 0, textWrap: "pretty" }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
