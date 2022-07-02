import React, { useState } from "react";

// import { FiChevronDown } from "react-icons/fc";
import { HiChevronDown } from "react-icons/hi";
import { FaFolderOpen } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
const Skills = () => {
  const [skillsOn, setSkillsOn] = useState("true");
  const [languagesOn, setLanguagesOn] = useState("true");
  const [frameworksOn, setFrameworksOn] = useState("true");
  const [toolsOn, setToolsOn] = useState("true");
  const [softSkillsOn, setSoftSkillsOn] = useState("true");
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
        className="flex max-w-[200px] cursor-pointer items-center gap-1"
      >
        {skillsOn && <HiChevronDown className="text-xl" />}
        {!skillsOn && <HiChevronDown className="text-xl -rotate-90" />}
        <p>MY SKILLS</p>
      </div>

      {skillsOn && (
        <div className="flex flex-col gap-1 pl-6">
          {/* ----FRAMEWORKS---- */}

          <div
            onClick={() => setFrameworksOn(!frameworksOn)}
            className="flex max-w-[200px] cursor-pointer items-center gap-1"
          >
            {frameworksOn && <HiChevronDown className="text-xl" />}
            {!frameworksOn && <HiChevronDown className="text-xl -rotate-90" />}
            <p className="flex items-center gap-2">
              <GoFileSubmodule />
              Frameworks
            </p>
          </div>

          {frameworksOn && (
            <div className="flex flex-col gap-1 pl-8">
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-orange-300" />
                ReactJS
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-green-300" />
                NextJS
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-red-300" />
                TailwindCSS
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-blue-300" />
                Firebase
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-gray-300" />
                NodeJS
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-orange-300" />
                ExpressJS
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-green-300" />
                MongoDB
              </p>
            </div>
          )}

          {/* ----TOOLS---- */}

          <div
            onClick={() => setToolsOn(!toolsOn)}
            className="flex max-w-[200px] cursor-pointer items-center gap-1 pt-2"
          >
            {toolsOn && <HiChevronDown className="text-xl" />}
            {!toolsOn && <HiChevronDown className="text-xl -rotate-90" />}
            <p className="flex items-center gap-2">
              <GoFileSubmodule />
              Tools
            </p>
          </div>

          {toolsOn && (
            <div className="flex flex-col gap-1 pl-8">
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-orange-300" />
                GIT
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-green-300" />
                MDX
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-red-300" />
                Cloudinary CDN
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-blue-300" />
                Mail Chimp
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-gray-300" />
                Framer Motion
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-orange-300" />
                Linux
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-green-300" />
                Vercel
              </p>
            </div>
          )}

          {/* ----LANGUAGES---- */}

          <div
            onClick={() => setLanguagesOn(!languagesOn)}
            className="flex max-w-[200px] cursor-pointer items-center gap-1 pt-2"
          >
            {languagesOn && <HiChevronDown className="text-xl" />}
            {!languagesOn && <HiChevronDown className="text-xl -rotate-90" />}
            <p className="flex items-center gap-2">
              <GoFileSubmodule />
              Languages
            </p>
          </div>

          {languagesOn && (
            <div className="flex flex-col gap-1 pl-8">
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-orange-300" />
                JavaScript (ES6)
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-green-300" />
                C++
              </p>
            </div>
          )}

          {/* ----SOFT SKILLS---- */}

          <div
            onClick={() => setSoftSkillsOn(!softSkillsOn)}
            className="flex max-w-[200px] cursor-pointer items-center gap-1 pt-2"
          >
            {softSkillsOn && <HiChevronDown className="text-xl" />}
            {!softSkillsOn && <HiChevronDown className="text-xl -rotate-90" />}
            <p className="flex items-center gap-2">
              <GoFileSubmodule />
              Soft Skills
            </p>
          </div>

          {softSkillsOn && (
            <div className="flex flex-col gap-1 pl-8">
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-orange-300" />
                SEO
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-green-300" />
                Blogging
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-red-300" />
                Leadership
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-blue-300" />
                Content Writing
              </p>
              <p className="flex items-center gap-1">
                <FaFolderOpen className="text-gray-300" />
                Time Management
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
