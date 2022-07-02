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
        "durgesh-resume.pdf"
      );
      setCodeInput("");
    }
    if (codeInput.toLowerCase() === "blog") {
      window.open("https://www.ourweb.blog", "_blank");
      setCodeInput("");
    }
  }, [codeInput]);

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-base font-normal lowercase text-tWhiteSec">
        {`// Write a code below to continue`}
      </p>
      <div className=" flex items-center justify-center gap-4 text-[#B9A4E3]">
        <p className="text-2xl ">
          <FaGreaterThan />
        </p>
        <input
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          type="text"
          placeholder="whois"
          className="max-w-[240px] bg-transparent text-2xl caret-[#B9A4E3] outline-none placeholder:text-[#b9a4e3a4]"
        />
      </div>
      <div className="relative cursor-pointer group">
        <p className="flex items-center gap-3 mt-3 text-sm text-tWhiteSec">
          <AiFillInfoCircle className="text-base text-blue-400" /> Hover to get
          the code
        </p>

        <ul className="absolute hidden px-2 py-2 mt-2 bg-black shadow-lg w-max shadow-black/50 group-hover:inline">
          <li className="text-sm tabletS:text-base">
            - Download CV :
            <span className="px-2 py-1 bg-gray-700 rounded-lg">downloadCv</span>
          </li>
          <li className="text-sm tabletS:text-base">
            - My Blog Site :
            <span className="px-2 py-1 bg-gray-700 rounded-lg">blog</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodeSection;
