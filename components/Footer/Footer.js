import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex justify-around w-full ">
      <div className="flex flex-col items-center ">
        <p>Projects</p>
        <AiFillCaretDown />
      </div>
      <div className="flex flex-col items-center ">
        <p>Experiences</p>
        <AiFillCaretDown />
      </div>
    </div>
  );
};

export default Footer;
