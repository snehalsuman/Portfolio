import React from "react";
import AboutImg from "../../assets/img1.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-64" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Passionate about crafting responsive and user-friendly web interfaces using technologies like <strong>HTML5, CSS3, JavaScript, React.js, Next.js</strong>, and <strong>TypeScript</strong>. Experienced in turning design systems into fully functional, pixel-perfect web applications with a focus on performance and accessibility. Skilled with tools like <strong>Figma</strong> and <strong>Canva</strong> for seamless UI/UX collaboration.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Skilled in developing scalable and secure backend systems using <strong>Node.js, Express.js</strong>, and <strong>Spring Boot</strong>. Proficient in designing RESTful APIs and integrating them with robust databases like <strong>MongoDB, MySQL</strong>. Comfortable working with technologies like <strong>Docker</strong>, and applying clean code principles in backend architecture.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;