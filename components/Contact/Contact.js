import React from "react";

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FcReadingEbook } from "react-icons/fc";
import { SiLeetcode } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="flex w-[440px] flex-col gap-2 pl-3 text-sm tabletS:pl-0 mobileM:text-base">
      <div className="min-w-xl text-tWhiteSec">
        <p className="text-tBlue">{`// Find me on : `}</p>
        <div className="border-l-[1px] border-tWhiteSec/10 pl-4 text-sm mobileL:text-base ">
          <p
            onClick={() =>
              window.open("mailto:code.durgesh@gmail.com", "_blank")
            }
            className="flex items-center gap-1 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec mobileM:gap-3"
          >
            * Mail <AiFillMail className="group-hover:text-green-500" />
            <p className="mobileL:group-hover:hidden">{`--> code.durgesh@gmail.com`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline ">{`--> code.durgesh@gmail.com`}</p>
          </p>
          <p
            onClick={() =>
              window.open("https://www.linkedin.com/in/durgesh-kr/", "_blank")
            }
            className="flex items-center gap-1 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec mobileM:gap-3"
          >
            * LinkedIn <FaLinkedinIn className="group-hover:text-blue-500" />
            <p className="mobileL:group-hover:hidden">{`--> @durgesh-kr`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline ">{`--> linkedin.com/in/durgesh-kr`}</p>
          </p>
          <p
            onClick={() =>
              window.open("https://github.com/DurgeshKr2242", "_blank")
            }
            className="flex items-center gap-1 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer group hover:bg-bgBlackSec mobileM:gap-3"
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
            className="flex items-center gap-1 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer pb group hover:bg-bgBlackSec mobileM:gap-3"
          >
            * Twitter <BsTwitter className="group-hover:text-red-500" />
            {/* <p>{`--> @Durgesh2242`}</p> */}
            <p className="mobileL:group-hover:hidden">{`--> @Durgesh2242`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline">{`--> twitter.com/Durgesh2242`}</p>
          </p>

          <p
            onClick={() => window.open("https://www.ourweb.blog", "_blank")}
            className="flex items-center gap-1 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer pb group hover:bg-bgBlackSec mobileM:gap-3"
          >
            * Blog <FcReadingEbook className="group-hover:text-red-500" />
            {/* <p>{`--> @Durgesh2242`}</p> */}
            <p className="mobileL:group-hover:hidden">{`--> ourweb.blog`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline">{`--> www.ourweb.blog`}</p>
          </p>
          <p
            onClick={() =>
              window.open("https://leetcode.com/durgeshKr/", "_blank")
            }
            className="flex items-center gap-1 px-3 py-2 transition-all duration-300 rounded-sm cursor-pointer pb group hover:bg-bgBlackSec mobileM:gap-3"
          >
            * Leetcode <SiLeetcode className="group-hover:text-yellow" />
            {/* <p>{`--> @Durgesh2242`}</p> */}
            <p className="mobileL:group-hover:hidden">{`--> durgeshKr`}</p>
            <p className="hidden text-sm mobileL:group-hover:inline">{`--> leetcode.com/durgeshKr`}</p>
          </p>

          <p className="pl-3">{`*/`}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
