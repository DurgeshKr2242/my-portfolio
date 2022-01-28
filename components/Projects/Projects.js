import React from "react";
import { motion } from "framer-motion";
import subsSS from "./subsSS.png";
import anime from "./anime.png";
import cocktails from "./cocktails.png";
import Image from "next/image";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projectInfo = [
    {
      projectNo: "project 1",
      commits: "26 Commits",
      name: "Subscription Tracker",
      img: subsSS,
      description:
        "SUBS (short for Subscription) is a progressive web app that lets you track all your subscriptions. You can even keep a track of all the people you shared your subscriptions with.",
      listDescription: [
        "Progressive Web App",
        "Perfect lighthouse score",
        "Dark/Light mode switch",
        "MERN, NextJs, Tailwind, Framer and Firebase",
      ],
      redmeUrl: "https://github.com/DurgeshKr2242/Subscription-Tracker#readme",
      githubUrl: "https://github.com/DurgeshKr2242/Subs-Tracker-Backend",
      liveUrl: "https://subscriptions-tracker.vercel.app/",
    },
    {
      projectNo: "project 2",
      commits: "21 Commits",
      name: "Hold My Anime",
      img: anime,
      description:
        "Why hold my beer when you can Hold My Anime! Social media for all the Anime lovers out there. You can post reviews on your latest watch along with your rating, your fav character, your favourite quote and many more.",
      listDescription: [
        "Realtime CRUD application",
        "Integration of comments feature",
        "MERN, MUI, Firebase and JikanAPI",
      ],
      redmeUrl:
        "https://github.com/DurgeshKr2242/hold-my-anime/tree/dev#readme",
      githubUrl: "https://github.com/DurgeshKr2242/hold-my-anime/tree/dev",
      liveUrl: "https://holdmyanime.netlify.com/",
    },
    {
      projectNo: "project 3",
      commits: "129 Commits",
      name: "Cocktails Website",
      img: cocktails,
      description:
        "Cocktails website to display list of all the cocktails along with their details. Developed using cocktails DB api. ",
      listDescription: [
        "Api integration with Error handling",
        "Loading spinner ",
        "ReactJS, React Router, Context API",
      ],
      redmeUrl: "https://github.com/DurgeshKr2242/cocktails#readme",
      githubUrl: "https://github.com/DurgeshKr2242/cocktails",
      liveUrl: "https://cocktails-11.netlify.app/",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-40 mb-40 tablet:px-28">
      <p className="pl-4">{`// My top projects : `}</p>

      <div className="flex flex-wrap items-start justify-center tablet:justify-between gap-14">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
