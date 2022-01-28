import React from "react";

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col w-[440px] gap-2 tabletS:pl-0 pl-3 mobileM:text-base text-sm">
      <div className="min-w-xl text-tWhiteSec">
        <p className="">{`// Find me in : `}</p>
        <div className="border-l-[1px] pl-4 mobileL:text-base text-sm border-tWhiteSec/10 ">
          <p
            onClick={() =>
              window.open("https://www.linkedin.com/in/durgesh-kr/", "_blank")
            }
            className="flex items-center gap-3 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec"
          >
            * LinkedIn <FaLinkedinIn className="group-hover:text-blue-500" />
            <p className="mobileL:group-hover:hidden">{`--> @durgesh-kr`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline ">{`--> linkedin.com/in/durgesh-kr`}</p>
          </p>
          <p
            onClick={() =>
              window.open("https://github.com/DurgeshKr2242", "_blank")
            }
            className="flex items-center gap-3 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec"
          >
            * GitHub <BsGithub className="group-hover:text-white" />
            {/* <p>{`--> @DurgeshKr2242`}</p> */}
            <p className="mobileL:group-hover:hidden">{`--> @DurgeshKr2242`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline">{`--> github.com/DurgeshKr2242`}</p>
          </p>
          <p
            onClick={() =>
              window.open("https://twitter.com/Durgesh2242", "_blank")
            }
            className="flex items-center gap-3 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec pb"
          >
            * Twitter <BsTwitter className="group-hover:text-red-500" />
            {/* <p>{`--> @Durgesh2242`}</p> */}
            <p className="mobileL:group-hover:hidden">{`--> @Durgesh2242`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline">{`--> twitter.com/Durgesh2242`}</p>
          </p>

          <p className="pl-3">{`*/`}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
