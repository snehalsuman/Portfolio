import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaRocket, FaTrophy } from "react-icons/fa";

const Achievements = () => {
  return (
    <div
      id="Achievements"
      className="text-white px-4 py-16 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
        Achievements
      </h2>

      <div className="md:flex items-start justify-between gap-12">
        {/* Achievement 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-yellow-500/30 hover:scale-[1.02] transition-all mb-8 md:mb-0"
        >
          <div className="flex items-start gap-4">
            <div className="flex gap-2 text-yellow-400 text-3xl mt-1">
              <SiLeetcode />
              <SiGeeksforgeeks />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                DSA Proficiency
              </h3>
              <p className="text-sm md:text-md text-gray-200">
                Solved <strong>450+ DSA problems</strong> on LeetCode and achieved a coding score of <strong>1215</strong> on GeeksforGeeks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-pink-500/30 hover:scale-[1.02] transition-all mb-8 md:mb-0"
        >
          <div className="flex items-start gap-4">
            <FaRocket size={28} className="text-pink-400 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-pink-300 mb-2">
                Startup Journey
              </h3>
              <p className="text-sm md:text-md text-gray-200">
                Received <strong>INR 20K seed funding</strong> for <strong>EzzGrow</strong> and generated <strong>INR 77K in revenue</strong> through real-world clients.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-green-500/30 hover:scale-[1.02] transition-all"
        >
          <div className="flex items-start gap-4">
            <FaTrophy size={28} className="text-green-400 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-green-300 mb-2">
                Hackathon Finalist
              </h3>
              <p className="text-sm md:text-md text-gray-200">
                Ranked in <strong>Top 5</strong> in AIESEC Hackathon, organized in collaboration with <strong>GeeksforGeeks</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
