import React from "react";
import {
  FaCss3, FaFigma, FaHtml5, FaJs, FaReact,
  FaJava, FaPython, FaNodeJs, FaAndroid, FaAmazon, FaGoogle, FaGithub
} from "react-icons/fa";
import {
  SiRedis, SiMongodb, SiExpress, SiSpringboot,
  SiMysql, SiTypescript, SiC, SiCplusplus, SiKotlin,
  SiCanva, SiNextdotjs, SiPostgresql, SiOracle, SiSqlite, SiDocker
} from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-start justify-around">

        {/* Frontend Technologies */}
        <div className="flex flex-col gap-4 md:w-2/5 p-4">
          <h2 className="text-white text-lg font-semibold">Frontend</h2>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<FaHtml5 color="#E34F26" size={50} />} />
            <Skill icon={<FaCss3 color="#1572B6" size={50} />} />
            <Skill icon={<FaJs color="#F7DF1E" size={50} />} />
            <Skill icon={<FaReact color="#61DAFB" size={50} />} />
            <Skill icon={<SiNextdotjs color="white" size={50} />} />
            <Skill icon={<SiTypescript color="#3178C6" size={50} />} />
            <Skill icon={<FaFigma color="#F24E1E" size={50} />} />
            <Skill icon={<SiCanva color="#00C4CC" size={50} />} />
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="flex flex-col gap-4 md:w-2/5 p-4">
          <h2 className="text-white text-lg font-semibold">Backend</h2>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<FaNodeJs color="#339933" size={50} />} />
            <Skill icon={<SiExpress color="#000000" size={50} />} />
            <Skill icon={<SiSpringboot color="#6DB33F" size={50} />} />
            <Skill icon={<SiRedis color="#FF4438" size={50} />} />
          </div>
        </div>

        {/* Databases */}
        <div className="flex flex-col gap-4 md:w-2/5 p-4">
          <h2 className="text-white text-lg font-semibold">Database</h2>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<SiMongodb color="#47A248" size={50} />} />
            <Skill icon={<SiMysql color="#00758F" size={50} />} />
            <Skill icon={<SiPostgresql color="#336791" size={50} />} />
            <Skill icon={<SiOracle color="#F80000" size={50} />} />
            <Skill icon={<SiSqlite color="#003B57" size={50} />} />
          </div>
        </div>

        {/* Other Skills */}
        <div className="flex flex-col gap-4 md:w-2/5 p-4">
          <h2 className="text-white text-lg font-semibold">Other Skills</h2>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<SiC color="#A8B9CC" size={50} />} />
            <Skill icon={<SiCplusplus color="#00599C" size={50} />} />
            <Skill icon={<FaJava color="#007396" size={50} />} />
            <Skill icon={<FaPython color="#3776AB" size={50} />} />
            <Skill icon={<SiKotlin color="#7F52FF" size={50} />} />
            <Skill icon={<FaAndroid color="#3DDC84" size={50} />} />
            <Skill icon={<SiDocker color="#0db7ed" size={50} />} />
            <Skill icon={<FaGithub color="white" size={50} />} />
          </div>
        </div>

        {/* Experience section commented out */}
        {/*
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

// Reusable Skill icon block
const Skill = ({ icon }) => (
  <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
    {icon}
  </span>
);

export default Experience;