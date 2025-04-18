import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, main, image, demoLink, codeLink }) => {
  return (
    <div className="p-6 w-[380px] md:w-[440px] bg-[#0f172a]/60 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-3xl transition duration-300 hover:shadow-[0_10px_40px_rgba(112,66,255,0.5)]">
      <img
        className="w-full h-[220px] object-cover rounded-xl mb-4 border border-white/10"
        src={image}
        alt={title}
      />
      <h3 className="text-2xl font-bold text-[#b193fa]">{title}</h3>
      <p className="text-[#cbd5e1] text-sm mt-2">{main}</p>
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#7e5bef] hover:bg-[#9b74ff] text-white font-bold py-2 px-5 rounded-full transition-all duration-300"
        >
          <FaExternalLinkAlt className="text-sm" />
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#7e5bef] hover:bg-[#9b74ff] text-white font-bold py-2 px-5 rounded-full transition-all duration-300"
        >
          <FaGithub className="text-sm" />
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;