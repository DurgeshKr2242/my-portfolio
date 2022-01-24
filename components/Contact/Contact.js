import React from "react";

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col w-[440px] gap-2 ">
      <div className="min-w-xl text-tWhiteSec">
        <p className="">{`// Find me in : `}</p>
        <div className="border-l-[1px] pl-4  border-tWhiteSec/10 ">
          <p className="flex items-center gap-3 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec">
            * LinkedIn <FaLinkedinIn className="group-hover:text-blue-500" />
            <p className="group-hover:hidden">{`--> @durgesh-kr`}</p>
            <p className="hidden text-sm group-hover:inline ">{`--> linkedin.com/in/durgesh-kr`}</p>
          </p>
          <p className="flex items-center gap-3 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec">
            * GitHub <BsGithub className="group-hover:text-white" />
            {/* <p>{`--> @DurgeshKr2242`}</p> */}
            <p className="group-hover:hidden">{`--> @DurgeshKr2242`}</p>
            <p className="hidden text-sm group-hover:inline">{`--> github.com/DurgeshKr2242`}</p>
          </p>
          <p className="flex items-center gap-3 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec pb">
            * Twitter <BsTwitter className="group-hover:text-red-500" />
            {/* <p>{`--> @Durgesh2242`}</p> */}
            <p className="group-hover:hidden">{`--> @Durgesh2242`}</p>
            <p className="hidden text-sm group-hover:inline">{`--> twitter.com/Durgesh2242`}</p>
          </p>

          <p>{`*/`}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
