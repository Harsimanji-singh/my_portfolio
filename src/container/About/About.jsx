import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer",
//     imageUrl: images.about01,
//   },
//   {
//     title: "web design",
//     description: "I am a good web developer",
//     imageUrl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good web developer",
//     imageUrl: images.about03,
//   },
//   {
//     title: "Animations",
//     description: "I am a good web developer",
//     imageUrl: images.about04,
//   },
// ];
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        I Know that
        <span>Good Design</span>
        <br></br>
        means
        <span>Good Bussiness</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
