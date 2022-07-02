import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
const CodeSection = () => {
  const [codeInput, setCodeInput] = useState("");

  useEffect(() => {
    if (codeInput.toLowerCase() === "downloadcv") {
      saveAs(
        "https://drive.google.com/file/d/1wrYDaLTQSyshlioENT8XSNptPaxas134/view?usp=sharing",
        "resume.pdf"
      );
      setCodeInput("");
    }
  }, [codeInput]);

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-base font-normal lowercase text-tWhiteSec">
        {`// Write a code below to continue`}
      </p>
      <div className=" flex gap-4 justify-center items-center text-[#B9A4E3]">
        <p className="text-2xl ">
          <FaGreaterThan />
        </p>
        <input
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          type="text"
          placeholder="whois"
          className="text-2xl bg-transparent caret-[#B9A4E3] placeholder:text-[#b9a4e3a4] outline-none max-w-[240px]"
        />
      </div>
      <div className="relative cursor-pointer group">
        <p className="flex items-center gap-3 mt-3 text-sm text-tWhiteSec">
          <AiFillInfoCircle /> Hover to get the code
        </p>

        <ul className="absolute hidden px-2 py-2 mt-2 bg-black shadow-lg w-max group-hover:inline shadow-black/50">
          <li className="text-sm tabletS:text-base">
            - Download CV :
            <span className="px-2 py-1 bg-gray-700 rounded-lg">downloadCv</span>
          </li>
          <li className="text-sm tabletS:text-base">
            - My Personal Blog Site :
            <span className="px-2 py-1 bg-gray-700 rounded-lg">blog</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodeSection;
