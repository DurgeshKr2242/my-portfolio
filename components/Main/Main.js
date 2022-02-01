import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import About from "../About/About";
import Skills from "../About/Skills";
import Contact from "../Contact/Contact";
import Mail from "../Contact/Mail";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import CodeSection from "./CodeSection";

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

      {/* About */}

      <AnimatePresence>
        {activeScreen === "about" && (
          <motion.div
            initial={{ x: "-100%", scale: 1 }}
            animate={{
              x: 0,
              scale: 1,
              transition: {
                stiffness: 100,
                duration: 0.2,
              },
            }}
            exit={{
              x: "-100%",
              scale: 0,
              transition: { duration: 0.2 },
            }}
            className="flex items-center justify-center w-full h-screen "
          >
            <Head>
              <title>About Durgesh</title>
            </Head>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariantsAbout}
              className="flex flex-col w-full h-full gap-10 tablet:gap-20 tablet:flex-row"
            >
              <div className="flex justify-center grow-[3]">
                <About />
              </div>
              <div className="grow-[1] w-full tablet:max-w-xs">
                <Skills />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}

      <AnimatePresence>
        {activeScreen === "contact" && (
          <motion.div
            initial={{ x: "100%", scale: 0 }}
            animate={{
              x: 0,
              scale: 1,
              transition: { stiffness: 100, duration: 0.2 },
            }}
            exit={{
              x: "100%",
              scale: 0,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center justify-center w-full h-screen "
          >
            <Head>
              <title>Contact Durgesh</title>
            </Head>
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
              <div className="grow-[1] w-full max-h-[320px] mobileM:max-h-[350px] bg-black">
                <Mail />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects */}

      <AnimatePresence>
        {activeScreen === "projects" && (
          <motion.div
            initial={{ y: "100%", scale: 0 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { stiffness: 100, duration: 0.2 },
            }}
            exit={{
              y: "100%",
              scale: 0,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center justify-center w-full h-full "
          >
            <Head>
              <title>Durgesh Projects</title>
            </Head>
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

      {/* Experiences */}

      <AnimatePresence>
        {activeScreen === "experiences" && (
          <motion.div
            initial={{ y: "100%", scale: 0 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { stiffness: 100, duration: 0.2 },
            }}
            exit={{
              y: "100%",
              scale: 0,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center justify-center w-full h-full "
          >
            <Head>
              <title>Durgesh Experiences</title>
            </Head>
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

      {/* Main Screen */}

      {activeScreen === "main" && (
        <div className="flex items-center justify-center w-full h-screen tabletS:justify-between ">
          {/* Left */}
          <Head>
            <title>Durgesh Portfolio</title>
          </Head>
          <div
            className="absolute left-0 flex flex-col items-center px-2 transition-colors duration-300 rotate-90 cursor-pointer top-10 hover:bg-tWhiteSec hover:text-bgBlackSec tabletS:relative"
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
            <CodeSection />
            {/* <div className="flex flex-col items-start gap-2">
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
            </div> */}
          </div>

          {/* Right */}

          <div
            className="absolute right-0 flex flex-col items-center px-2 transition-colors duration-300 -rotate-90 cursor-pointer top-10 hover:bg-tWhiteSec hover:text-bgBlackSec tabletS:relative"
            onClick={() => setActiveScreen("contact")}
          >
            <p>Contact</p>
            <AiFillCaretDown />
          </div>

          {/* BOTTOM */}

          <div className="absolute flex justify-between w-full tabletS:justify-around bottom-4 ">
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
