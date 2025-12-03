import { useState } from "react";

function ProjectCard({ project }) {
  const { title, description = "", tech = [], link = "#" } = project;
  const [expanded, setExpanded] = useState(false);

  const preview =
    expanded || description.length <= 140
      ? description
      : `${description.slice(0, 140)}...`;

  return (
    <div className="bg-[#1A1712] border border-[#2B261F] rounded-xl p-6 h-full flex flex-col hover:border-[#C15903] hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{preview}</p>
          {description.length > 140 && (
            <button
              className="mt-2 text-sm font-medium text-[#C15903] hover:text-[#e5791c] transition-colors"
              onClick={() => setExpanded((open) => !open)}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2B261F] text-[#C15903] border border-[#3a3228]">
          {tech.length} tech
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-xs bg-[#1F1B16] text-gray-200 border border-[#2F2A22]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <a
          href={link}
          className="text-sm font-semibold text-white hover:text-[#C15903] transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          View project ↗
        </a>
        <span className="text-xs text-gray-500">Interactive preview</span>
      </div>
    </div>
  );
}

export default ProjectCard;
