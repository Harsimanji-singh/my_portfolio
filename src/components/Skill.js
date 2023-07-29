import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../wrapper";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-slate-900 text-white py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl w-full mt-64 text-center md:text-6xl md:mt-32">
        skills
      </h2>
      <div className="h-full h-screen relative flex items-center justify-center rounded-full bg-circularLight ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="css" x="-5vw" y="-10vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
        <Skill name="html" x="-20vw" y="-2vw" />
      </div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
