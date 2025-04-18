import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div id="Contact" className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white rounded-t-3xl flex flex-col items-center gap-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Contact
        </h1>
        <p className="text-lg md:text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Feel free to reach out!
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-10">
        {/* Left - My Profiles */}
        <div className="bg-[#1f2937] p-6 rounded-2xl w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">My Profiles</h2>
          <div className="grid grid-cols-2 gap-4 text-sm font-medium">
            <a className="btn-profile">LinkedIn</a>
            <a className="btn-profile">GitHub</a>
            <a className="btn-profile">Instagram</a>
            <a className="btn-profile">Twitter</a>
            <a className="btn-profile">LeetCode</a>
            <a className="btn-profile">GFG</a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-[#1f2937] p-6 rounded-2xl w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Get in Touch</h2>
          <form className="flex flex-col gap-4">
            <input placeholder="Your Name" className="input" />
            <input placeholder="Your Email" className="input" />
            <textarea placeholder="Your Message" className="input h-32" />
            <button type="submit" className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full">
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Contact Icons */}
      <div className="flex gap-4 mt-10">
        <a href="https://www.linkedin.com/in/snehal-suman/" className="icon-btn"><CiLinkedin size={24} /></a>
        <a href="https://github.com/snehalsuman" className="icon-btn"><FaGithub size={22} /></a>
        <a href="mailto:snehals0203@gmail.com" className="icon-btn"><MdOutlineEmail size={22} /></a>
        <a href="tel:+919142883832" className="icon-btn"><FiPhone size={20} /></a>
      </div>
    </div>
  );
};

export default Footer;
