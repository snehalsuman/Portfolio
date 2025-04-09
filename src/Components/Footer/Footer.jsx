import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-6"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      {/* Circular Icon Buttons Only */}
      <div className="flex gap-6 pt-4">
        <a
          href="https://www.linkedin.com/in/snehal-suman/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#465697] transition-all duration-300"
        >
          <CiLinkedin size={24} />
        </a>
        <a
          href="https://github.com/snehalsuman"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#465697] transition-all duration-300"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="mailto:snehals0203@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#465697] transition-all duration-300"
        >
          <MdOutlineEmail size={22} />
        </a>
      </div>
    </div>
  );
};

export default Footer;