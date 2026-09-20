import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Work", to: "/#work" },
  { name: "Approach", to: "/#approach" },
  { name: "Background", to: "/#background" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

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
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12.5,
          letterSpacing: "0.05em",
        }}
      >
        <Link
          to="/#top"
          onClick={() => setOpen(false)}
          style={{ color: "var(--ink)", display: "flex", alignItems: "center", gap: 10 }}
        >
          Athish&nbsp;
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: "flex", gap: "clamp(14px, 2vw, 24px)", alignItems: "center", color: "var(--muted)", flexWrap: "wrap" }}>
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            padding: 8,
            margin: "-8px",
            display: "none",
            color: "var(--ink)",
            cursor: "pointer",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          className="nav-mobile-panel"
          style={{
            borderTop: "1px solid var(--line)",
            background: "var(--bg)",
            padding: "8px var(--pad-x) 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setOpen(false)}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid var(--line)",
                color: "var(--ink)",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 13.5,
              }}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="mailto:athishrs02@gmail.com"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16,
              textAlign: "center",
              color: "var(--ink)",
              border: "1px solid var(--line2)",
              padding: "10px 15px",
              borderRadius: 999,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
            }}
          >
            Say hello
          </a>
        </nav>
      )}
    </header>
  );
}
