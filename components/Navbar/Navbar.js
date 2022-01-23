import React, { useState } from "react";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState(2);

  return (
    <div className="w-full pb-3 shadow-md shadow-[#010409]/50 text-gray-500 text-sm font-bold">
      <ul className="flex w-full border-b-[1px] border-tWhiteSec/20 bg-[#010409]">
        <li
          onClick={() => setActiveNavLink(0)}
          className={`${
            activeNavLink === 0 &&
            "border-t-[3px] border-pink-500 bg-bgBlack border-b-0 shadow-md shadow-bgBlack text-yellow"
          } tablet:px-12 px-4  py-2 `}
        >
          <button className="font-bold"> _hello</button>
        </li>
        <li
          onClick={() => setActiveNavLink(1)}
          className={`${
            activeNavLink === 1 &&
            "border-t-[3px] border-x-0 border-pink-500 bg-bgBlack border-b-0 shadow-md shadow-bgBlack text-yellow"
          } border-x-[1px] border-tWhiteSec/20 tablet:px-12 px-4   py-2`}
        >
          <button className="font-bold"> _about me </button>
        </li>
        <li
          onClick={() => setActiveNavLink(2)}
          className={`${
            activeNavLink === 2 &&
            "border-t-[3px] border-r-0 border-t-pink-500 bg-bgBlack border-b-0 shadow-md shadow-bgBlack text-yellow"
          } border-r-[1px] tablet:px-12 px-4   py-2 border-tWhiteSec/20`}
        >
          <button className="font-bold"> _projects</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
