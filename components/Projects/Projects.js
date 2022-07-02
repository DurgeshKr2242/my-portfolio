import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SingleProject from "./SingleProject";
import { projectInfo } from "./projectsData";
const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-40 mb-40 tablet:px-6">
      <div className="flex flex-col justify-start w-full">
        <p className="w-full pl-4 text-left text-tBlue">{`// My top projects : `}</p>
        <p className="pl-4 text-sm">{`(Hover on readme screen to see small visual of the project) `}</p>
        <p className="pl-4 text-sm">{`(Click on Readme.md to see the readme file of the project) `}</p>
      </div>

      <div className="flex flex-col items-start justify-center gap-16 px-2">
        {projectInfo.map((project, i) => {
          return (
            <SingleProject
              key={i}
              commits={project.commits}
              image={project.img}
              name={project.name}
              projectNo={project.projectNo}
              description={project.description}
              listDescription={project.listDescription}
              redmeUrl={project.redmeUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featuresImplemented={project.featuresImplemented}
              techUsed={project.techUsed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
