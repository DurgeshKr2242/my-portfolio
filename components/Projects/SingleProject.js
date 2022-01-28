import React from "react";
import Image from "next/image";
const SingleProject = ({
  commits,
  name,
  image,
  description,
  listDescription,
  redmeUrl,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="flex flex-col gap-4 w-72 mobileM:w-96">
      <div className="border-[1px]  text-sm font-bold rounded-lg flex flex-col bg-bgBlack border-tWhiteSec/20 w-72 mobileM:w-96 h-60 p-4">
        <div className="flex justify-between ">
          <p
            onClick={() => window.open(redmeUrl, "_blank")}
            className="cursor-pointer text-yellow hover:text-blue-500"
          >
            Readme.md
          </p>
          <p className="text-gray-500 ">{commits}</p>
        </div>
        <div className="flex flex-col items-start justify-center h-full mt-2 text-gray-500 transition-all duration-300 rounded-lg shadow-sm group drop-shadow-md shadow-black bg-bgBlackSec">
          <p className="pl-3 transition-all duration-300 group-hover:scale-0">{`/**`}</p>
          {listDescription.map((item, i) => {
            return (
              <p
                key={i}
                className="transition-all text-sm duration-300 group-hover:scale-0 pl-4 ml-3 border-l-[1px] border-tWhiteSec/20"
              >{`* ${item}`}</p>
            );
          })}

          <p className="w-full mt-6 transition-all duration-300 group-hover:scale-0 pl-7 bg-yellow text-bgBlackSec">
            {name}
          </p>
          <div className="absolute w-full h-full overflow-scroll transition-all duration-300 scale-0 group-hover:scale-100">
            <Image src={image} alt="Site SS" />
          </div>
        </div>
      </div>

      <p className="text-sm text-left text-tWhiteSec">{description}</p>

      <div className="flex justify-between px-6 border-b-[1px] border-gray-800/20 pb-8">
        <button
          onClick={() => window.open(liveUrl, "_blank")}
          className="px-4 py-1 text-tBlue border-[1px] rounded-xl border-tWhiteSec/20"
        >
          Live
        </button>
        <button
          onClick={() => window.open(githubUrl, "_blank")}
          className="px-4 py-1 text-tBlue border-[1px] rounded-xl border-tWhiteSec/20"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
