// import React from "react";
// import "./Header.scss";
// import { motion } from "framer-motion";
// import { images } from "../../constants";
// const scaleVariance = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };
// const Header = () => {
//   return (
//     <div id="home" className="app__header app_flex">
//       <motion.div
//         whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//         transition={{ duration: 0.5 }}
//         className="app__header-info"
//       >
//         <div className="app__header-badge">
//           <div className="bagde-cmp app__flex">
//             <span>👋</span>
//             <div style={{ marginLeft: 20 }}>
//               <p className="p-text">Hello , i am </p>
//               <h1 className="head-text">Harsimran</h1>
//             </div>
//           </div>
//           <div className="tag-cmp app__flex">
//             <p className="p-text">web Developer</p>
//             <p className="p-text">Freelancer</p>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         whileInView={{ opacity: [0, 1] }}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__header-img"
//       >
//         <img src={images.profile} alt="profile_bg" />
//         <motion.img
//           whileInView={{ scale: [0, 1] }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           src={images.circle}
//           alt="profile_circle"
//           className="overlay_circle"
//         />
//       </motion.div>

//       <motion.div
//         variants={scaleVariance}
//         whileInView={scaleVariance.whileInView}
//         className="app__header-circles"
//       >
//         {[images.flutter, images.redux, images.sass, images.sass].map(
//           (circle, index) => (
//             <div className="circle-cmp app__flex" key={`circle-${index}`}>
//               <img src={circle} alt="circle" />
//             </div>
//           )
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { client, getUrlFromId } from "../../client";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [portfolio, setPortfolio] = useState();
  const [url, setUrl] = useState();
  let daata;
  useEffect(() => {
    const query = '*[_type == "manuscript"]';
    client.fetch(query).then((data) => {
      setPortfolio(data);
      // console.log(data)
      getFile(data);
      // console.log(data.portfolio[0]);
      // setUrl(data.portfolio?.[0].portfolio.asset._ref);
    });
  }, []);
  let file;
  function getFile(data) {
    const link = data[0].portfolio.asset._ref;
    // console.log(link);
    setUrl(link);
    file = getUrlFromId(link);
    // console.log(file);
    setUrl(file);
  }
  // console.log(url);
  // setUrl(portfolio[0].portfolio.asset._ref);
  // let ref = daata?.[0].portfolio.asset._ref;
  // let file = getUrlFromId(url);
  // console.log(portfolio);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Harsimran</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Blockchain Web</p>
            <p className="p-text">Developer</p>
          </div>
          <div className="res-cmp app__flex">
            {/* <button 
          href = "src/assets/portfolio.docs"
          target = "_blank"
          className="p-text">Resume</button> */}
            <a href={url} download={url} target="_blank">
              <button className="p-text">Resume</button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.logooo} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.solidity, images.javascript, images.Python].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
