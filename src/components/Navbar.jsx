import { Link } from "react-router-dom";

const navigation = [
  { name: "Work", to: "/#work" },
  { name: "Approach", to: "/#approach" },
  { name: "Background", to: "/#background" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(241, 240, 234, 0.88)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="nav-row"
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "15px var(--pad-x)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12.5,
          letterSpacing: "0.05em",
        }}
      >
        <Link to="/#top" style={{ color: "var(--ink)", display: "flex", alignItems: "center", gap: 10 }}>
          Athish&nbsp;
        </Link>
        <nav style={{ display: "flex", gap: "clamp(14px, 2vw, 24px)", alignItems: "center", color: "var(--muted)", flexWrap: "wrap" }}>
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} className="link-hover" style={{ color: "var(--muted)" }}>
              {item.name}
            </Link>
          ))}
          <a
            href="mailto:athishrs02@gmail.com"
            className="link-hover"
            style={{
              color: "var(--ink)",
              border: "1px solid var(--line2)",
              padding: "7px 15px",
              borderRadius: 999,
            }}
          >
            Say hello
          </a>
        </nav>
      </div>
    </header>
  );
}
