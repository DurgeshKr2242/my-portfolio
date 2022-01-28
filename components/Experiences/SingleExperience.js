import React, { useState } from "react";
import { BiCode } from "react-icons/bi";
import { FiGitCommit } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
const SingleExperience = ({ company, position, details, date }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <motion.div
      animate={{ height: "100%", duration: 1000 }}
      initial={{ height: 0 }}
      exit={{ height: 0 }}
      className="flex flex-col items-start"
    >
      <p className="flex items-center gap-4 -ml-1 text-tWhiteSec">
        <FiGitCommit /> {date}
      </p>
      <div className="w-full border-l-2 border-tWhiteSec/20">
        <div
          onClick={() => details && setDetailsOpen(!detailsOpen)}
          className="tabletS:ml-8 -ml-4 border-[1px] border-tWhiteSec/20 bg-bgBlack rounded-lg px-6 py-4 mb-8 mt-4 
          max-w-[550px] w-full hover:bg-bgBlackSec cursor-pointer"
          // className="tabletS:ml-8 -ml-4 border-[1px] border-tWhiteSec/20 bg-bgBlack rounded-lg px-6 py-4 mb-8 mt-4
          // w-[300px] mobileM:w-[360px] mobileL:w-[440px] tabletM:w-[550px] hover:bg-bgBlackSec cursor-pointer"
        >
          <div className="flex justify-between">
            <div className="flex flex-col items-start gap-1">
              <p className="text-base tracking-wide uppercase text-tWhite">
                {company}
              </p>
              <p className="text-sm text-tWhiteSec">{position}</p>
            </div>
            {details && (
              <button
                className="mobileL:inline hidden px-4 bg-bgBlackSec border-[1px] border-tWhiteSec/20 text-sm rounded-xl"
                onClick={() => setDetailsOpen(!detailsOpen)}
              >
                <BiCode />
              </button>
            )}
          </div>
          <AnimatePresence>
            {detailsOpen && (
              <ul className="mt-4 text-sm list-disc list-inside font-extralight">
                {details.map((detail, index) => {
                  return (
                    <motion.li
                      variants={{
                        hidden: {
                          y: -100,
                          opacity: 0,
                        },
                        visible: (i) => ({
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: index * 0.05,
                          },
                        }),
                      }}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      key={detail}
                    >
                      {detail}
                    </motion.li>
                  );
                })}
              </ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
