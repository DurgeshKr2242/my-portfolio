import React, { useState, useRef } from "react";
import { FaGreaterThan } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Mail = () => {
  const [terminalActive, setTerminalActive] = useState(true);
  const [senderName, setSenderName] = useState("");
  const [senderMail, setSenderMail] = useState("");
  const [senderFeedback, setSenderFeedback] = useState("");

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const sentMail = {
      from_name: senderName,
      sender_email: senderMail,
      message: senderFeedback,
    };

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLET_ID,
        sentMail,
        process.env.NEXT_PUBLIC_USER_ID
      );

      console.log(res);
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <div className="flex flex-col gap-3 mobileM:gap-6">
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

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-start w-full gap-3 pl-6 mobileM:gap-4"
      >
        <p className=" text-tBlue">{`/**feedback ~/@DURGESH`}</p>
        <div className="flex flex-col justify-start w-full">
          <label className="text-sm text-tWhiteSec" htmlFor="name">
            your name here:{""}
          </label>
          <div className=" flex w-full gap-4 justify-start items-center text-[#B9A4E3]">
            <p className="">$</p>
            <input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              name="from_name"
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
              value={senderMail}
              onChange={(e) => setSenderMail(e.target.value)}
              name="sender_email"
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
              value={senderFeedback}
              onChange={(e) => setSenderFeedback(e.target.value)}
              name="message"
              id="feedback"
              type="text"
              placeholder="start typing..."
              className="placeholder:text-sm bg-transparent caret-[#B9A4E3] placeholder:text-[#b9a4e3a4] outline-none w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-3 mobileM:mt-6 bg-bgBlack"
        >
          @submit
        </button>
      </form>
    </div>
  );
};

export default Mail;
