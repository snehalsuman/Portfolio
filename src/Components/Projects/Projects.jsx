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
        />
        <ProjectCard
          title="chatty"
          main="A real-time chat application built with React, Node.js, Socket.io, MongoDB and supports live chat and private/group messaging."
          image={chatty}
        />
        <ProjectCard
          title="Weather App"
          main="A responsive weather forecast app built using React, Tailwind CSS and provides real-time weather updates using API calls."
          image={weather}
        />
      </div>
    </div>
  );
};

export default Projects;
