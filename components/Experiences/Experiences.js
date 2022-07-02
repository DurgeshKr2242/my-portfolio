import React, { useState, useEffect } from "react";

import { AiOutlineCaretDown } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import SingleExperience from "./SingleExperience";

import { EXPERIENCE_DATA } from "./ExperiencesData";

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
      <div className="flex flex-col gap-2">
        <p className="pl-4 text-tBlue">{`// My past experiences : `}</p>
        <p className="pl-4 text-sm">{`(Click on individual experience to get details) `}</p>
      </div>
      <div className="flex flex-col items-start gap-8">
        <div>
          <button
            onClick={() => setDropdownActive(!dropdownActive)}
            className="flex items-center gap-2 rounded-xl border-[1px] border-tWhiteSec/20 bg-bgBlackSec px-4 py-2 text-sm"
          >
            <BiGitBranch /> {filter} <AiOutlineCaretDown />
          </button>

          {dropdownActive && (
            <div className="absolute mt-2 flex w-40 flex-col items-start gap-4 rounded-lg border-[1px] border-tWhiteSec/20 bg-bgBlackSec px-4 py-4 text-sm shadow-lg shadow-black/100">
              <p className="w-full border-b-[1px] border-tWhiteSec/20">
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
