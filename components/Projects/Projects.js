import React from "react";
import { motion } from "framer-motion";
import subsSS from "./subsSS.png";
import anime from "./anime.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 px-2 mt-96 tablet:mt-0">
      <p className="pl-4">{`// My top projects : `}</p>

      <div className="flex flex-wrap items-center justify-center gap-14">
        <div className="border-[1px]  text-sm font-bold rounded-lg flex flex-col bg-bgBlack border-tWhiteSec/20 w-72 mobileM:w-96 h-60 p-4">
          <div className="flex justify-between ">
            <p className=" text-yellow">Project 1</p>
            <p className="text-gray-500 ">129 Commits</p>
          </div>
          <div className="flex flex-col items-start justify-center h-full mt-2 text-gray-500 transition-all duration-300 rounded-lg shadow-sm group drop-shadow-md shadow-black bg-bgBlackSec">
            <p className="pl-3 transition-all duration-300 group-hover:scale-0">{`/**`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Dark/Light mode switch`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Progressive Web App*`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* NextJs Tailwind Framer`}</p>
            <p className="w-full mt-6 transition-all duration-300 group-hover:scale-0 pl-7 bg-yellow text-bgBlackSec">
              Subscription Tracker
            </p>
            <div className="absolute w-full h-full overflow-scroll transition-all duration-300 scale-0 group-hover:scale-100">
              <Image src={subsSS} alt="Site SS" />
            </div>
          </div>
        </div>

        <div className="border-[1px]  text-sm font-bold rounded-lg flex flex-col w-72 bg-bgBlack border-tWhiteSec/20 mobileM:w-96 h-60 p-4">
          <div className="flex justify-between ">
            <p className=" text-yellow">Project 1</p>
            <p className="text-gray-500 ">129 Commits</p>
          </div>
          <div className="flex flex-col items-start justify-center h-full mt-2 text-gray-500 transition-all duration-300 rounded-lg shadow-sm group drop-shadow-md shadow-black bg-bgBlackSec">
            <p className="pl-3 transition-all duration-300 group-hover:scale-0">{`/**`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Dark/Light mode switch`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Progressive Web App*`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* NextJs Tailwind Framer`}</p>
            <p className="w-full mt-6 transition-all duration-300 group-hover:scale-0 pl-7 bg-yellow text-bgBlackSec">
              Hold my Anime
            </p>
            <div className="absolute w-full h-full overflow-scroll transition-all duration-300 scale-0 group-hover:scale-100">
              <Image src={anime} alt="Site SS" />
            </div>
          </div>
        </div>

        <div className="border-[1px]  text-sm font-bold rounded-lg flex flex-col w-72 bg-bgBlack border-tWhiteSec/20 mobileM:w-96 h-60 p-4">
          <div className="flex justify-between ">
            <p className=" text-yellow">Project 1</p>
            <p className="text-gray-500 ">129 Commits</p>
          </div>
          <div className="flex flex-col items-start justify-center h-full mt-2 text-gray-500 transition-all duration-300 rounded-lg shadow-sm group drop-shadow-md shadow-black bg-bgBlackSec">
            <p className="pl-3 transition-all duration-300 group-hover:scale-0">{`/**`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Dark/Light mode switch`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* Progressive Web App*`}</p>
            <p className="transition-all duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20">{`* NextJs Tailwind Framer`}</p>
            <p className="w-full mt-6 transition-all duration-300 group-hover:scale-0 pl-7 bg-yellow text-bgBlackSec">
              see the project
            </p>
            <div className="absolute w-full h-full overflow-scroll transition-all duration-300 scale-0 group-hover:scale-100">
              <Image src={subsSS} alt="Site SS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
