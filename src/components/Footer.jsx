export default function Footer() {
  return (
    <footer id="footer" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--section-gap) var(--pad-x) clamp(56px, 8vw, 84px)" }}>
      <div
        className="grid-2col"
        style={{
          border: "1px solid var(--line)",
          background: "var(--panel)",
          borderRadius: 3,
          padding: "clamp(36px, 6vw, 58px) clamp(24px, 5vw, 44px)",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "clamp(28px, 4vw, 48px)",
          alignItems: "end",
        }}
      >
        <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 200, fontSize: "var(--fs-h2)", lineHeight: 1.12, margin: 0, letterSpacing: "-0.028em" }}>
          If any of this sounds like your team, I&rsquo;d love to talk.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: "#4a5049" }}>
          <a
            href="mailto:athishrs02@gmail.com"
            className="link-hover"
            style={{ color: "var(--ink)", borderBottom: "1px solid #a9b5ae", paddingBottom: 4 }}
          >
            athishrs02@gmail.com
          </a>
          <a
            href="tel:+19104031429"
            className="link-hover"
            style={{ color: "#4a5049", borderBottom: "1px solid var(--line3)", paddingBottom: 4 }}
          >
            +1 (910) 403-1429
          </a>
          <a
            href="https://github.com/Athishrs"
            target="_blank"
            rel="noreferrer"
            className="link-hover"
            style={{ color: "#4a5049", borderBottom: "1px solid var(--line3)", paddingBottom: 4 }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/athish-rs/"
            target="_blank"
            rel="noreferrer"
            className="link-hover"
            style={{ color: "#4a5049", borderBottom: "1px solid var(--line3)", paddingBottom: 4 }}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p
        style={{
          marginTop: 32,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          color: "var(--muted2)",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Athish Radhika Srinivasa Perumal.
      </p>
    </footer>
  );
}
