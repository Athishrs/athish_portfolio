function Contact()
{ return (
<section
      id="contact"
      className="py-12 md:py-16 border-t border-[#2B261F] space-y-4 fade-in"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        Contact
      </h2>

      <p className="text-sm md:text-base text-[#C8C3B8] max-w-xl">
        I’m open to internships, part-time roles, and collaborations on web, backend, or UX-driven projects.
        Feel free to reach out if you’d like to connect.
      </p>

      <div className="space-y-2 text-sm md:text-base">
        <p>
          <span className="text-[#8B8577]">Email:</span>{" "}
          <a
            href="mailto:your.email@uncc.edu"
            className="text-[#C15903] hover:text-[#E77B1A] transition-colors"
          >
            your.email@uncc.edu
          </a>
        </p>

        <p>
          <span className="text-[#8B8577]">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            rel="noreferrer"
            className="text-[#C15903] hover:text-[#E77B1A] transition-colors"
          >
            linkedin.com/in/your-handle
          </a>
        </p>

        <p>
          <span className="text-[#8B8577]">GitHub:</span>{" "}
          <a
            href="https://github.com/your-handle"
            target="_blank"
            rel="noreferrer"
            className="text-[#C15903] hover:text-[#E77B1A] transition-colors"
          >
            github.com/your-handle
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;