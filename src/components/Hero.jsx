const heroFacts = [
  { big: "10.4s → 0.25s", label: "API RESPONSE TIME, AFTER ONE\nRETRY BOTTLENECK FIX" },
  { big: "3,000", label: "LINES OF LEGACY CODE REMOVED\nCONSOLIDATING TWO BACKENDS" },
  { big: "4.0", label: "GPA, MS INFORMATION TECHNOLOGY\nUNC CHARLOTTE" },
];

export default function Hero() {
  return (
    <section id="top" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "clamp(56px, 10vw, 92px) var(--pad-x) 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.35fr 1fr",
          gap: "clamp(32px, 5vw, 56px)",
          alignItems: "end",
        }}
        className="grid-2col"
      >
        <div>
          <h1
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontWeight: 200,
              fontSize: "var(--fs-h1)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              margin: "0 0 clamp(20px, 3vw, 30px)",
              textWrap: "pretty",
            }}
          >
            The problems that live{" "}
            <em style={{ fontWeight: 300, fontStyle: "italic", color: "var(--accent)" }}>behind</em> the interface.
          </h1>
          <p style={{ fontSize: "var(--fs-body)", lineHeight: 1.6, color: "var(--ink3)", margin: 0, maxWidth: 560, textWrap: "pretty" }}>
            I&rsquo;m Athish — a full-stack developer drawn to databases, APIs, deploy pipelines, and the auth flow
            nobody wants to open. Two years on teams small enough that all of it was mine to figure out.
          </p>
        </div>
        <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: "clamp(22px, 3vw, 34px)", display: "flex", flexDirection: "column", gap: "clamp(18px, 2.5vw, 26px)" }}>
          {heroFacts.map((f) => (
            <div key={f.label}>
              <div
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: "var(--fs-stat)",
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  color: "var(--accent)",
                }}
              >
                {f.big}
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  marginTop: 9,
                  letterSpacing: "0.03em",
                  whiteSpace: "pre-line",
                }}
              >
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "clamp(40px, 6vw, 74px)",
          height: "clamp(180px, 28vw, 300px)",
          border: "1px solid var(--line)",
          borderRadius: 3,
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--panel) 0px, var(--panel) 8px, var(--bg) 8px, var(--bg) 16px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            color: "var(--muted2)",
            background: "var(--bg)",
            padding: "8px 14px",
            border: "1px solid var(--line)",
          }}
        >
          wide screenshot or workspace photo
        </span>
      </div>
    </section>
  );
}
