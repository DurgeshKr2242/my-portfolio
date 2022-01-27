import React from "react";
import { motion } from "framer-motion";
import subsSS from "./subsSS.png";
import anime from "./anime.png";
import Image from "next/image";

const Projects = () => {
  const projectInfo = [
    {
      project: "Project 1",
      commits: "129 Commits",
      name: "Subscription Tracker",
      img: subsSS,
    },
    {
      project: "Project 2",
      commits: "19 Commits",
      name: "Hold My Anime",
      img: anime,
    },
    {
      project: "Project 1",
      commits: "129 Commits",
      name: "Subscription Tracker",
      img: subsSS,
    },
    {
      project: "Project 1",
      commits: "129 Commits",
      name: "Subscription Tracker",
      img: subsSS,
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-40 mb-40 tablet:px-28">
      <p className="pl-4">{`// My top projects : `}</p>

      <div className="flex flex-wrap items-center justify-center tablet:justify-between gap-14">
        {projectInfo.map((project) => {
          return (
            <div
              key={project.name}
              className="flex flex-col gap-4 w-72 mobileM:w-96"
            >
              <div className="border-[1px]  text-sm font-bold rounded-lg flex flex-col bg-bgBlack border-tWhiteSec/20 w-72 mobileM:w-96 h-60 p-4">
                <div className="flex justify-between ">
                  <p className=" text-yellow">Readme.md</p>
                  <p className="text-gray-500 ">{project.commits}</p>
                </div>
                <div className="flex flex-col items-start justify-center h-full mt-2 text-gray-500 transition-all duration-300 rounded-lg shadow-sm group drop-shadow-md shadow-black bg-bgBlackSec">
                  <p className="pl-3 transition-all duration-300 group-hover:scale-0">{`/**`}</p>
                  <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Dark/Light mode switch`}</p>
                  <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Progressive Web App*`}</p>
                  <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* NextJs Tailwind Framer`}</p>
                  <p className="w-full mt-6 transition-all duration-300 group-hover:scale-0 pl-7 bg-yellow text-bgBlackSec">
                    {project.name}
                  </p>
                  <div className="absolute w-full h-full overflow-scroll transition-all duration-300 scale-0 group-hover:scale-100">
                    <Image src={project.img} alt="Site SS" />
                  </div>
                </div>
              </div>

              <p className="text-tWhiteSec">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas, expedita doloremque vel dolore modi cum tempora est
                quas? Quo, quaerat.
              </p>

              <div className="flex justify-between px-6 border-b-[1px] border-gray-800/20 pb-8">
                <button className="px-4 py-1 text-tBlue border-[1px] rounded-xl border-tWhiteSec/20">
                  Live
                </button>
                <button className="px-4 py-1 text-tBlue border-[1px] rounded-xl border-tWhiteSec/20">
                  Github
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
