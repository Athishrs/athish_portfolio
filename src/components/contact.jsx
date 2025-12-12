import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", note: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpointLooksInvalid =
      !FORMSPREE_ENDPOINT ||
      FORMSPREE_ENDPOINT.includes("@") ||
      !FORMSPREE_ENDPOINT.includes("/f/");

    if (endpointLooksInvalid) {
      setStatus({
        state: "error",
        note: "Email service not configured yet. Add a valid Formspree endpoint to VITE_FORMSPREE_ENDPOINT in .env",
      });
      return;
    }

    setStatus({ state: "loading", note: "" });
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus({
        state: "success",
        note: "Thanks for reaching out! I’ll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        state: "error",
        note: "Something went wrong. Please email me directly at athishrs02@gmail.com.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 border-t border-[#2B261F] space-y-6 fade-in"
    >
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="text-sm md:text-base text-[#C8C3B8] max-w-2xl">
          I’m open to internships, part-time roles, and collaborations on web, backend, or UX-driven projects.
          Drop a message here and I’ll respond by email.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-[#2B261F] bg-[#1A1712] p-6"
        >
          <div className="space-y-2">
            <label className="text-sm text-[#C8C3B8]" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-[#13110E] border border-[#2B261F] px-3 py-2 text-sm text-white focus:border-[#C15903] focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#C8C3B8]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-[#13110E] border border-[#2B261F] px-3 py-2 text-sm text-white focus:border-[#C15903] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-[#C8C3B8]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-[#13110E] border border-[#2B261F] px-3 py-2 text-sm text-white focus:border-[#C15903] focus:outline-none"
              placeholder="What would you like to work on?"
            />
          </div>

          <button
            type="submit"
            disabled={status.state === "loading"}
            className="w-full md:w-auto inline-flex justify-center rounded-lg bg-[#C15903] px-5 py-2 text-sm font-semibold text-white hover:bg-[#e5791c] transition-colors disabled:opacity-60"
          >
            {status.state === "loading" ? "Sending..." : "Send message"}
          </button>

          {status.note ? (
            <p
              className={`text-sm ${
                status.state === "success" ? "text-white-400" : "text-white-400"
              }`}
            >
              {status.note}
            </p>
          ) : null}

        </form>

        <div className="space-y-3 text-sm md:text-base">
          <p className="text-[#C8C3B8]">Prefer email or social?</p>
          <div className="space-y-2">
            <p>
              <span className="text-[#8B8577]">Email:</span>{" "}
              <a
                href="mailto:athishrs02@gmail.com"
                className="text-[#C15903] hover:text-[#E77B1A] transition-colors"
              >
                athishrs02@gmail.com
              </a>
            </p>
            <p>
              <span className="text-[#8B8577]">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/athish-rs/"
                target="_blank"
                rel="noreferrer"
                className="text-[#C15903] hover:text-[#E77B1A] transition-colors"
              >
                linkedin.com/in/athish-rs
              </a>
            </p>
            <p>
              <span className="text-[#8B8577]">GitHub:</span>{" "}
              <a
                href="https://github.com/Athishrs"
                target="_blank"
                rel="noreferrer"
                className="text-[#C15903] hover:text-[#E77B1A] transition-colors"
              >
                github.com/Athishrs
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
