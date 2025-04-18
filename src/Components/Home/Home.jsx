import React from "react";
import avatarImg from "../../assets/img.png";
import TextChange from "../TextChange";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 pt-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* Left - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-3/5"
      >
        <TextChange />
        <p className="text-sm md:text-xl mt-4 font-extralight tracking-wide text-white/90 leading-relaxed">
          Pursuing B.Tech (Hons) in Full Stack Software Development and looking forward
          to learning and enhancing my skills as a passionate full stack developer.
          I have a good analytical and problem-solving ability with a keen and enthusiastic
          nature of acquiring knowledge.
        </p>

        <a
          href="https://drive.google.com/file/d/1GrhLzslE_0vzKarOjE0Db7nJrTfTN73T/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 md:mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-900/40"
        >
          Download CV
        </a>
      </motion.div>

      {/* Right - Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 p-1 backdrop-blur-sm shadow-2xl shadow-purple-900/50 hover:scale-105 transition-transform duration-300">
          <img
            src={avatarImg}
            alt="avatar"
            className="w-full h-full object-cover rounded-full border-4 border-white/10"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;