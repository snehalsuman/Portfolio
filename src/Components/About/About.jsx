import React from "react";
import AboutImg from "../../assets/img1.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="text-white px-4 py-16 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
        About Me
      </h2>

      <div className="md:flex items-center justify-between gap-12">
        {/* Left Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:w-1/3 mb-10 md:mb-0"
        >
          <img
            src={AboutImg}
            alt="About"
            className="rounded-3xl w-72 h-72 object-cover shadow-2xl border border-gray-700"
          />
        </motion.div>

        {/* Right Cards Section */}
        <div className="md:w-2/3 space-y-10">
          {/* Frontend Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-purple-500/30 hover:scale-[1.02] transition-all"
          >
            <div className="flex items-start gap-4">
              <IoArrowForward size={28} className="text-purple-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  Frontend Developer
                </h3>
                <p className="text-sm md:text-md text-gray-200">
                  Passionate about crafting responsive and user-friendly web interfaces using technologies like <strong>HTML5, CSS3, JavaScript, React.js, Next.js</strong>, and <strong>TypeScript</strong>. Experienced in turning design systems into fully functional, pixel-perfect web applications with a focus on performance and accessibility. Skilled with tools like <strong>Figma</strong> and <strong>Canva</strong> for seamless UI/UX collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
          >
            <div className="flex items-start gap-4">
              <IoArrowForward size={28} className="text-cyan-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                  Backend Developer
                </h3>
                <p className="text-sm md:text-md text-gray-200">
                  Skilled in developing scalable and secure backend systems using <strong>Node.js, Express.js</strong>, and <strong>Spring Boot</strong>. Proficient in designing RESTful APIs and integrating them with robust databases like <strong>MongoDB, MySQL</strong>. Comfortable working with technologies like <strong>Docker</strong>, and applying clean code principles in backend architecture.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;