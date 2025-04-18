import React from "react";
import ProjectCard from "./ProjectCard";
import ezzgrow from "../../assets/ezzgrow.png";
import chatty from "../../assets/socialink.png";
import weather from "../../assets/weather.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <ProjectCard
          title="Ezzgrow"
          main="A Next.js platform for business consulting with modern UI/UX."
          image={ezzgrow}
          demoLink="https://ezzgrow.vercel.app/"
          codeLink="https://github.com/snehalsuman/ezzgrow-main/tree/main/ezzgrow-final-main"
        />
        <ProjectCard
          title="Socialink"
          main="A real-time chat app with React, Node.js, Socket.io & MongoDB."
          image={chatty}
          demoLink="https://socialink-chat.vercel.app/"
          codeLink="https://github.com/snehalsuman/chatapp-backend/tree/main/src"
        />
        <ProjectCard
          title="Weather App"
          main="A weather forecast app using React, Tailwind & APIs to display real time weather data."
          image={weather}
          demoLink="https://weather-app-99.vercel.app/"
          codeLink="https://github.com/snehalsuman/Weather-App"
        />
      </div>
    </div>
  );
};

export default Projects;
