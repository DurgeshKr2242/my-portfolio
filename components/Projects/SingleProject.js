import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CgChevronRight } from "react-icons/cg";

const SingleProject = ({
  commits,
  name,
  image,
  description,
  listDescription,
  redmeUrl,
  githubUrl,
  liveUrl,
  featuresImplemented,
  techUsed,
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full flex-col rounded-lg border-[1px] border-tWhiteSec/20 ">
      <p className="w-full mt-3 text-lg text-center bg-yellow text-bgBlackSec ">
        {name}
      </p>
      <div className="flex min-h-[470px]  flex-col gap-3  p-2 laptop:flex-row tabletS:p-3 ">
        {/* ---------LEFT--------- */}
        <div className="flex flex-col justify-center gap-5 border-b-[1px] border-gray-800/40 pb-4  laptop:border-b-0 laptop:border-r-[1px] laptop:pr-4 ">
          <div className="flex  h-[300px] w-full  flex-col rounded-lg border-[1px] border-tWhiteSec/20 bg-bgBlack  p-2 text-sm font-bold laptop:w-96 tabletS:p-3">
            <div className="flex justify-between ">
              <p
                onClick={() => window.open(redmeUrl, "_blank")}
                className="cursor-pointer text-yellow hover:text-blue-500"
              >
                Readme.md
              </p>
              <p className="text-gray-500 ">{commits}</p>
            </div>
            <div className="flex flex-col items-start justify-center h-full mt-2 text-gray-500 transition-all duration-300 rounded-lg shadow-sm group bg-bgBlackSec shadow-black drop-shadow-md">
              <p className="pl-3 transition-all duration-300 group-hover:scale-0">{`/**`}</p>
              {listDescription.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="ml-3 border-l-[1px] border-tWhiteSec/20 pl-4 text-sm transition-all duration-300 group-hover:scale-0"
                  >{`* ${item}`}</p>
                );
              })}

              <div className="absolute w-full h-full overflow-scroll transition-all duration-300 scale-0 group-hover:scale-100">
                {image && <Image src={image} alt="Site SS" />}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => window.open(liveUrl, "_blank")}
              className="rounded-xl border-[1px] border-tWhiteSec/20 px-4 py-1 text-tBlue hover:bg-tBlue hover:text-bgBlack"
            >
              Live
            </button>
            <button
              onClick={() => window.open(githubUrl, "_blank")}
              className="rounded-xl border-[1px] border-tWhiteSec/20 px-4 py-1 text-tBlue hover:bg-tBlue hover:text-bgBlack"
            >
              Github
            </button>
          </div>
        </div>

        {/* ---------RIGHT--------- */}

        <div className="flex flex-col w-full max-w-xl ">
          <ul className="flex flex-col flex-wrap items-center justify-between gap-1 pt-1 pb-4 tabletS:flex-row">
            <li
              className={`${
                active === 0 && "font-semibold"
              } flex cursor-pointer items-center gap-2 `}
              onClick={() => setActive(0)}
            >
              <CgChevronRight
                className={`${
                  active === 0 && "rotate-90"
                } text-xl transition-all duration-300`}
              />
              <div className="flex flex-col">
                <p>Description</p>
                <div
                  className={`${
                    active === 0 ? "w-full" : "w-0"
                  } h-1 bg-yellow transition-all duration-300`}
                ></div>
              </div>
            </li>
            <li
              className={`${
                active === 1 && "font-semibold"
              } flex cursor-pointer items-center gap-2 `}
              onClick={() => setActive(1)}
            >
              <CgChevronRight
                className={`${
                  active === 1 && "rotate-90"
                } text-xl transition-all duration-300`}
              />
              <div className="flex flex-col">
                <p>Features Implemented</p>
                <div
                  className={`${
                    active === 1 ? "w-full" : "w-0"
                  } h-1 bg-yellow transition-all duration-300`}
                ></div>
              </div>
            </li>
            <li
              className={`${
                active === 2 && "font-semibold"
              } flex cursor-pointer items-center gap-2 `}
              onClick={() => setActive(2)}
            >
              <CgChevronRight
                className={`${
                  active === 2 && "rotate-90"
                } text-xl transition-all duration-300`}
              />
              <div className="flex flex-col">
                <p>Tech Used</p>
                <div
                  className={`${
                    active === 2 ? "w-full" : "w-0"
                  } h-1 bg-yellow transition-all duration-300`}
                ></div>
              </div>
            </li>
          </ul>
          <ul className="w-full text-sm">
            <li className="w-full">
              {active == 0 && <p className="text-justify">{description}</p>}
            </li>

            <li className="w-full">
              <AnimatePresence>
                {active === 2 && (
                  <ul className="flex flex-col gap-1">
                    {techUsed.map((item, i) => {
                      return (
                        <motion.li
                          variants={{
                            hidden: {
                              x: -100,
                              opacity: 0,
                            },
                            visible: (i) => ({
                              x: 0,
                              opacity: 1,
                              transition: {
                                delay: i * 0.05,
                              },
                            }),
                          }}
                          initial="hidden"
                          animate="visible"
                          custom={i}
                          key={item}
                          className="pl-2"
                        >
                          <span>-</span> {item}
                        </motion.li>
                      );
                    })}
                  </ul>
                )}
              </AnimatePresence>
            </li>
            <li className="w-full">
              <AnimatePresence>
                {active === 1 && (
                  <ul className="flex flex-col gap-1">
                    {featuresImplemented.map((item, i) => {
                      return (
                        <motion.li
                          variants={{
                            hidden: {
                              x: -100,
                              opacity: 0,
                            },
                            visible: (i) => ({
                              x: 0,
                              opacity: 1,
                              transition: {
                                delay: i * 0.05,
                              },
                            }),
                          }}
                          initial="hidden"
                          animate="visible"
                          custom={i}
                          key={item}
                          className="pl-2"
                        >
                          <span>-</span> {item}
                        </motion.li>
                      );
                    })}
                  </ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
