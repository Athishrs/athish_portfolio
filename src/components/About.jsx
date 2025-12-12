export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 md:px-8 lg:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
          I’m <span className="text-orange-300 font-semibold">Athish</span>, a
          Master’s in IT student at UNC Charlotte focused on web and backend
          development. I build clean interfaces and reliable APIs using React,
          Node.js, Express, and MongoDB.
        </p>

        <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
          I enjoy working at the intersection of{" "}
          <span className="text-orange-300">web, data, and user experience</span>,
          creating projects that are fast, intuitive, and meaningful. I’m always
          looking for opportunities to learn, collaborate, and contribute to
          impactful work.
        </p>

      </div>
    </section>
  );
}
