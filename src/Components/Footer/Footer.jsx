import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai"; // Instagram icon from react-icons
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    try {
      const response = await fetch("https://formspree.io/f/manerooo", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.current.reset();
        toast.success("Message sent successfully! ✅");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div
      id="Contact"
      className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white rounded-t-3xl flex flex-col items-center justify-center gap-10"
    >
      <ToastContainer />

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Contact
        </h1>
        <p className="text-lg md:text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Feel free to reach out!
        </p>
      </div>

      {/* Contact Form - Centered */}
      <div className="bg-[#1f2937] p-6 rounded-2xl w-full max-w-md shadow-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-purple-400 mb-4">Get in Touch</h2>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>

      {/* Bottom Contact Icons */}
      <div className="flex gap-4 mt-10">
        <a
          href="https://www.linkedin.com/in/snehal-suman/"
          className="hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin size={28} />
        </a>
        <a
          href="https://github.com/snehalsuman"
          className="hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={26} />
        </a>
        <a
          href="mailto:snehals0203@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <MdOutlineEmail size={26} />
        </a>
        <a
          href="tel:+919142883832"
          className="hover:text-purple-400 transition"
        >
          <FiPhone size={24} />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/_snehal__2919/"
          className="hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={28} />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Snehal Suman. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
