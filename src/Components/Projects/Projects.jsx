import React from "react";
import ProjectCard from "./ProjectCard";
import ezzgrow from "../../assets/ezzgrow.png"; 
import chatty from "../../assets/chatapp.png";
import weather from "../../assets/weather.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Ezzgrow"
          main="EzzGrow is a Next.js based platform offering technical services and business consultancy with modern UI/UX."
          image={ezzgrow}
          demoLink="https://ezzgrow.vercel.app/"
          codeLink="https://github.com/snehalsuman/ezzgrow-main/tree/main/ezzgrow-final-main"
        />
        <ProjectCard
          title="Chatty"
          main="A real-time chat application built with React, Node.js, Socket.io, MongoDB and supports live chat and private/group messaging."
          image={chatty}
          demoLink=""
          codeLink="https://github.com/snehalsuman/chatapp-backend/tree/main/src"
        />
        <ProjectCard
          title="Weather App"
          main="A responsive weather forecast app built using React, Tailwind CSS and provides real-time weather updates using API calls."
          image={weather}
          demoLink="https://weather-app-99.vercel.app/"
          codeLink="https://github.com/snehalsuman/Weather-App"
        />
      </div>
    </div>
  );
};

export default Projects;