import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const SocialMedia = () => {
  const handleClick = () => {
    // window.location.replace("https:google.com");
    window.open("https://github.com/Harsimanji-singh", "_blank");
  };
  const handleLeet = () => {
    window.open("https://leetcode.com/Harsimranjit-singh", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/harsimranjit-singh-775781278",
      "_blank"
    );
  };
  return (
    <div className="app__social">
      <div onClick={handleClick}>
        <AiFillGithub />
      </div>
      <div onClick={handleLeet}>
        {/* <FaFacebook /> */}
        <SiLeetcode />
      </div>
      <div onClick={handleLinkedin}>
        {/* <BsInstagram /> */}
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
