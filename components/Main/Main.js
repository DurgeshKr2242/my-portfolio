import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../About/Skills";
import Mail from "../Contact/Mail";
import Projects from "../Projects/Projects";
import Experiences from "../Experiences/Experiences";

const sideVariantsAbout = {
  closed: {
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 1,
      staggerDirection: 1,
    },
  },
};
const sideVariantsContact = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const Main = () => {
  const [activeScreen, setActiveScreen] = useState("main");

  // const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      {activeScreen != "main" && (
        <button
          onClick={() => setActiveScreen("main")}
          className="absolute z-10 top-5 right-5 hover:bg-tWhiteSec hover:text-bgBlackSec"
        >
          <HiOutlineArrowNarrowRight className="text-3xl font-bold " />
        </button>
      )}

      <AnimatePresence>
        {activeScreen === "about" && (
          <motion.div
            initial={{ x: "-100%", scale: 1 }}
            animate={{
              x: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.2,
              },
            }}
            exit={{
              x: "-100%",
              scale: 0,
              transition: { duration: 0.3 },
            }}
            className="flex items-center justify-center w-full h-screen "
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariantsAbout}
              className="flex flex-row w-full h-full gap-20"
            >
              <div className="flex justify-center grow-[3]">
                <About />
              </div>
              <div className="grow-[1] max-w-xs">
                <Skills />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeScreen === "contact" && (
          <motion.div
            initial={{ x: "100%", scale: 0 }}
            animate={{
              x: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 100, duration: 0.2 },
            }}
            exit={{
              x: "100%",
              scale: 0,
              transition: { duration: 0.3 },
            }}
            className="flex flex-col items-center justify-center w-full h-screen "
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariantsContact}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className="flex justify-center items-center grow-[3] w-full">
                <Contact />
              </div>
              <div className="grow-[1] w-full max-h-[350px] bg-black">
                <Mail />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeScreen === "projects" && (
          <motion.div
            initial={{ y: "100%", scale: 0 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 100, duration: 0.2 },
            }}
            exit={{
              y: "100%",
              scale: 0,
              transition: { duration: 0.3 },
            }}
            className="flex flex-col items-center justify-center w-full h-full "
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariantsContact}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className="flex items-center justify-center w-full h-full ">
                <Projects />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeScreen === "experiences" && (
          <motion.div
            initial={{ y: "100%", scale: 0 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 100, duration: 0.2 },
            }}
            exit={{
              y: "100%",
              scale: 0,
              transition: { duration: 0.3 },
            }}
            className="flex flex-col items-center justify-center w-full h-full "
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariantsContact}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className="flex items-center justify-center w-full h-full ">
                <Experiences />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {activeScreen === "main" && (
        <div className="flex items-center justify-between w-full h-screen ">
          {/* Left */}

          <div
            className="flex flex-col items-center px-2 transition-colors duration-300 rotate-90 cursor-pointer hover:bg-tWhiteSec hover:text-bgBlackSec"
            onClick={() => setActiveScreen("about")}
          >
            <p>About</p>
            <AiFillCaretDown />
          </div>

          {/* Center */}

          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-tWhiteSec fourK:text-xl">
                Hello! I am
              </p>
              <p className="text-4xl tablet:text-6xl ">Durgesh Kumar</p>
              <p className="text-4xl text-tBlue">Web Developer</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-base lowercase text-tWhiteSec">
                {`// Write a code below to continue`}
              </p>
              <div className=" flex gap-4 justify-center items-center text-[#B9A4E3]">
                <p className="text-2xl ">
                  <FaGreaterThan />
                </p>
                <input
                  type="text"
                  placeholder="whois"
                  className="text-2xl bg-transparent caret-[#B9A4E3] placeholder:text-[#b9a4e3a4] outline-none max-w-[240px]"
                />
              </div>
            </div>
          </div>

          {/* Right */}

          <div
            className="flex flex-col items-center -rotate-90"
            onClick={() => setActiveScreen("contact")}
          >
            <p>Contact</p>
            <AiFillCaretDown />
          </div>

          {/* BOTTOM */}

          <div className="absolute flex justify-around w-full bottom-4 ">
            <div className="flex flex-col items-center ">
              <p
                className="flex flex-col items-center px-2 transition-colors duration-300 cursor-pointer hover:bg-tWhiteSec hover:text-bgBlackSec"
                onClick={() => setActiveScreen("projects")}
              >
                Projects
                <AiFillCaretDown />
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <p
                onClick={() => setActiveScreen("experiences")}
                className="flex flex-col items-center px-2 transition-colors duration-300 cursor-pointer hover:bg-tWhiteSec hover:text-bgBlackSec"
              >
                Experiences
                <AiFillCaretDown />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
