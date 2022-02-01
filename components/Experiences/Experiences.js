import React, { useState, useEffect } from "react";

import { AiOutlineCaretDown } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import SingleExperience from "./SingleExperience";

const EXPERIENCE_DATA = [
  {
    type: "Programs",
    date: "Jan 2022 - Present · 1 mos",
    position: "Developer Champ",
    company: "SAWO Labs",
  },
  {
    type: "Society",
    date: "Aug 2021 - Present · 7 mos",
    position: "Executive",
    company: "KIIT E-CELL",
    details: [
      "As a Front-end React Developer currently redesigning the whole KIIT E-CELL website with a team in a very professional atmosphere.",
      "Worked with a team to develop the website for KSK (KIIT Startup Conclave) which is one of the flagship events of our college.",
      "Worked as the coordinator aiding in the recruitment for new candidates for the E-Cell Tech team",
    ],
  },

  {
    type: "Programs",
    date: "Dec 2021 - Present · 2 mos",
    position: "Postman Student Expert",
    company: "Postman",
    details: [
      "Postman Student Experts are proficient in the essential skills involved in building and testing API requests in Postman.",
      "Build and successfully send requests in Postman using a variety of methods including GET, POST, PUT, and DELETE. Include query and path parameters, authorization, and body data in request.",
      "Added documentation for a collection.",
      "Wrote a basic test assertion script.",
    ],
  },

  {
    type: "Society",
    date: "Nov 2021 - Present · 3 mos",
    position: "Web Developer",
    company: "DSC KIIT",
  },

  {
    type: "Internship",
    date: "Oct 2021 - Dec 2021 · 3 mos",
    position: "Web Developer",
    company: "Think Act Rise Foundation · Internship",
    details: [
      "Developed the entire backend for a web app using MongoDB Atlas, ExpressJs, and NodeJs. ",
      "Developed session-based authentication and authorization using JWT.",
      "Used Firebase Storage to store Images.",
      " Assisted the frontend team with conditional rendering in React.",
    ],
  },
  {
    type: "Society",
    date: "Sep 2021 - Present · 5 mos",
    position: "Project Member (Web Developer)",
    company: "Microsoft Learn Student Ambassadors KiiT",
    details: [
      "Working together with a team of 7 individuals to develop a Chrome Extension that would make a REST API call, do NLP, and provide a summary of any YouTube video along with some useful insights.",
      "Tech Stack used : React Js, HTML, CSS, JavaScript, Mui, Python, Flask, NLP, SAWO Api",
    ],
  },
  {
    type: "Education",
    date: "2020 - 2024",
    position: "Computer Science and Engineering",
    company: "Kaling Institute Of Industrial Technology",
    details: ["Current CGPA : 9.1"],
  },
];

const Experiences = () => {
  const [filter, setFilter] = useState("all");
  const [dropdownActive, setDropdownActive] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(EXPERIENCE_DATA);

    const filteredList = EXPERIENCE_DATA.filter((item) => item.type == filter);
    setFilteredList(filteredList);
  }, [filter]);

  return (
    <div className="flex flex-col gap-8 mt-40 mb-40 tablet:px-28">
      <p className="pl-4">{`// My past experiences : `}</p>

      <div className="flex flex-col items-start gap-8">
        <div>
          <button
            onClick={() => setDropdownActive(!dropdownActive)}
            className="flex items-center gap-2 px-4 py-2 bg-bgBlackSec border-[1px] border-tWhiteSec/20 text-sm rounded-xl"
          >
            <BiGitBranch /> {filter} <AiOutlineCaretDown />
          </button>

          {dropdownActive && (
            <div className="absolute flex flex-col items-start gap-4 px-4 py-4 mt-2 w-40 text-sm bg-bgBlackSec rounded-lg shadow-lg shadow-black/100 border-[1px] border-tWhiteSec/20">
              <p className="border-b-[1px] border-tWhiteSec/20 w-full">
                Filter
              </p>
              <ul className="flex flex-col w-full">
                <li
                  onClick={() => {
                    setFilter("all");
                    setDropdownActive(false);
                  }}
                  className="w-full px-2 py-1 cursor-pointer hover:bg-gray-900"
                >
                  all
                </li>
                <li
                  onClick={() => {
                    setFilter("Society");
                    setDropdownActive(false);
                  }}
                  className="w-full px-2 py-1 cursor-pointer hover:bg-gray-900"
                >
                  society
                </li>
                <li
                  onClick={() => {
                    setFilter("Programs");
                    setDropdownActive(false);
                  }}
                  className="w-full px-2 py-1 cursor-pointer hover:bg-gray-900"
                >
                  programs
                </li>
                <li
                  onClick={() => {
                    setFilter("Internship");
                    setDropdownActive(false);
                  }}
                  className="w-full px-2 py-1 cursor-pointer hover:bg-gray-900"
                >
                  internships
                </li>
                <li
                  onClick={() => {
                    setFilter("Education");
                    setDropdownActive(false);
                  }}
                  className="w-full px-2 py-1 cursor-pointer hover:bg-gray-900"
                >
                  educations
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="ml-6">
          {filter === "all"
            ? EXPERIENCE_DATA.map((experience, i) => {
                return (
                  <SingleExperience
                    key={i}
                    date={experience.date}
                    position={experience.position}
                    company={experience.company}
                    details={experience.details}
                  />
                );
              })
            : filteredList.map((experience, i) => {
                return (
                  <SingleExperience
                    key={i}
                    date={experience.date}
                    position={experience.position}
                    company={experience.company}
                    details={experience.details}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
