import React, { useState } from "react";

// import { FiChevronDown } from "react-icons/fc";
import { HiChevronDown } from "react-icons/hi";
import { FaFolderOpen } from "react-icons/fa";
const Skills = () => {
  const [skillsOn, setSkillsOn] = useState("true");
  //   const [skillsOn, setSkillsOn] = useState("true");
  //   const [skillsOn, setSkillsOn] = useState("true");
  //   const [skillsOn, setSkillsOn] = useState("true");
  //   const [skillsOn, setSkillsOn] = useState("true");

  return (
    <div className="flex flex-col h-full gap-2 p-4 text-sm bg-black text-tWhiteSec">
      <div>
        <p>EXPLORER</p>
      </div>

      <div
        onClick={() => setSkillsOn(!skillsOn)}
        className="flex items-center max-w-[200px] gap-1 cursor-pointer"
      >
        {skillsOn && <HiChevronDown className="text-xl" />}
        {!skillsOn && <HiChevronDown className="text-xl -rotate-90" />}
        <p>MY SKILLS</p>
      </div>

      {skillsOn && (
        <div className="flex flex-col gap-1 pl-6">
          <p className="flex items-center gap-1">
            <FaFolderOpen className="text-orange-300" />
            React
          </p>
          <p className="flex items-center gap-1">
            <FaFolderOpen className="text-green-300" />
            Next
          </p>
          <p className="flex items-center gap-1">
            <FaFolderOpen className="text-red-300" />
            Tailwind CSS
          </p>
          <p className="flex items-center gap-1">
            <FaFolderOpen className="text-blue-300" />
            Node
          </p>
          <p className="flex items-center gap-1">
            <FaFolderOpen className="text-green-300" />
            Express
          </p>
        </div>
      )}
    </div>
  );
};

export default Skills;
