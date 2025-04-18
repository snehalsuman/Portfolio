import React from "react";
import {
  FaCss3, FaFigma, FaHtml5, FaJs, FaReact,
  FaJava, FaPython, FaNodeJs, FaAndroid, FaGithub
} from "react-icons/fa";
import {
  SiRedis, SiMongodb, SiExpress, SiSpringboot, SiDjango, SiFlask,
  SiMysql, SiTypescript, SiC, SiCplusplus, SiKotlin,
  SiCanva, SiNextdotjs, SiPostgresql, SiOracle, SiSqlite, SiDocker, SiGo
} from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-12">
        {skillSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:shadow-purple-500/20 transition-all"
          >
            <h2 className="text-white text-xl font-semibold mb-4">{section.title}</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {section.icons.map((item, index) => (
                <Skill icon={item.icon} name={item.name} key={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Reusable compact Skill icon with name
const Skill = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex flex-col items-center justify-center w-20 h-20 p-2 bg-zinc-900/60 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:shadow-purple-400/20 text-center"
  >
    <div className="text-2xl mb-1">{icon}</div>
    <p className="text-xs text-white text-center">{name}</p>
  </motion.div>
);

const skillSections = [
  {
    title: "Frontend",
    icons: [
      { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
      { icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
      { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
      { icon: <FaReact color="#61DAFB" />, name: "React.js" },
      { icon: <SiNextdotjs color="white" />, name: "Next.js" },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
      { icon: <SiCanva color="#00C4CC" />, name: "Canva" },
    ],
  },
  {
    title: "Backend",
    icons: [
      { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
      { icon: <SiExpress color="#000000" />, name: "Express.js" },
      { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
      { icon: <SiRedis color="#FF4438" />, name: "Redis" },
      { icon: <SiDjango color="#092E20" />, name: "Django" },
      { icon: <SiFlask color="#000000" />, name: "Flask" },
      { icon: <SiGo color="#00ADD8" />, name: "Go" },
    ],
  },
  {
    title: "Database",
    icons: [
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
      { icon: <SiMysql color="#00758F" />, name: "MySQL" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <SiOracle color="#F80000" />, name: "Oracle" },
      { icon: <SiSqlite color="#003B57" />, name: "SQLite" },
    ],
  },
  {
    title: "Other Skills",
    icons: [
      { icon: <SiC color="#A8B9CC" />, name: "C" },
      { icon: <SiCplusplus color="#00599C" />, name: "C++" },
      { icon: <FaJava color="#007396" />, name: "Java" },
      { icon: <FaPython color="#3776AB" />, name: "Python" },
      { icon: <SiKotlin color="#7F52FF" />, name: "Kotlin" },
      { icon: <FaAndroid color="#3DDC84" />, name: "Android" },
      { icon: <SiDocker color="#0db7ed" />, name: "Docker" },
      { icon: <FaGithub color="white" />, name: "GitHub" },
    
    ],
  },
];

export default Experience;