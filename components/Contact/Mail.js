import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";

const Mail = () => {
  const [terminalActive, setTerminalActive] = useState(true);

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-start w-full gap-6 py-2 pl-6 bg-bgBlackSec">
        <button
          onClick={() => setTerminalActive(true)}
          className={`text-xs  ${
            terminalActive && "text-white underline underline-offset-8"
          } text-tWhiteSec`}
        >
          TERMINAL
        </button>
        <button
          onClick={() => setTerminalActive(false)}
          className={`text-xs text-tWhiteSec ${
            !terminalActive && "text-white underline underline-offset-8"
          }`}
        >
          OUTPUT
        </button>
        {/* <p>TERMINAL</p> */}
      </div>

      <form className="flex flex-col items-start w-full gap-4 pl-6">
        <p className=" text-tBlue">{`/**feedback ~/@DURGESH`}</p>
        <div className="flex flex-col justify-start w-full">
          <label className="text-sm text-tWhiteSec" htmlFor="name">
            your name here:{""}
          </label>
          <div className=" flex w-full gap-4 justify-start items-center text-[#B9A4E3]">
            <p className="">$</p>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="start typing..."
              className="placeholder:text-sm bg-transparent w-full caret-[#B9A4E3] placeholder:text-[#b9a4e3a4] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <label className="text-sm text-tWhiteSec" htmlFor="email">
            your email id here:{" "}
          </label>
          <div className=" flex gap-4 justify-start items-center text-[#B9A4E3]">
            <p className="">$</p>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="start typing..."
              className="placeholder:text-sm bg-transparent caret-[#B9A4E3] placeholder:text-[#b9a4e3a4] outline-none w-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start w-full">
          <label className="text-sm text-tWhiteSec" htmlFor="feedback">
            your fedback here:{" "}
          </label>
          <div className=" flex gap-4 justify-start items-center text-[#B9A4E3]">
            <p className="">$</p>
            <input
              name="feedback"
              id="feedback"
              type="text"
              placeholder="start typing..."
              className="placeholder:text-sm bg-transparent caret-[#B9A4E3] placeholder:text-[#b9a4e3a4] outline-none w-full"
            />
          </div>
        </div>

        <button className="px-4 py-2 mt-6 bg-bgBlack">@submit</button>
      </form>
    </div>
  );
};

export default Mail;
