import React, { useEffect, useState, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const imageDetails = {
  width: 524,
  height: 640,
};
const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export default function AboutMe() {
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);


  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  

  console.log(windowWidth);

  return (
    <div className="maincon">
      <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className="single"
        initial="initial"
        animate="animate"
        exit="exit"
        ref={scrollRef}
      >
        <div className="container fluid">
          <div className="row center top-row">
            <div className="top">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="details"
              >
                <div className="location">
                  <span>6.5244° N</span>
                  <span>-3.3792° E</span>
                </div>
              </motion.div>
              <motion.div className="model">
                <motion.span className="first" variants={firstName}>
                  <motion.span variants={letter}>K</motion.span>
                  <motion.span variants={letter}>o</motion.span>
                  <motion.span variants={letter}>l</motion.span>
                  <motion.span variants={letter}>a</motion.span>
                  <motion.span variants={letter}>d</motion.span>
                  <motion.span variants={letter}>e</motion.span>
                </motion.span>
                <motion.span className="last" variants={lastName}>
                  <motion.span variants={letter}>B</motion.span>
                  <motion.span variants={letter}>a</motion.span>
                  <motion.span variants={letter}>l</motion.span>
                  <motion.span variants={letter}>o</motion.span>
                  <motion.span variants={letter}>g</motion.span>
                  <motion.span variants={letter}>u</motion.span>
                  <motion.span variants={letter}>n</motion.span>
                </motion.span>
              </motion.div>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="bottom">
              <motion.div className="image-container-single">
                <motion.div
                  initial={{
                    y: "-50%",
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}
                  animate={{
                    y: 0,
                    width: "100%",
                    height: windowWidth > 1440 ? 800 : 400,
                    transition: { delay: 0.2, ...transition },
                  }}
                  className="thumbnail-single"
                >
                  <motion.div
                    className="frame-single"
                    whileHover="hover"
                    transition={transition}
                  >
                    <motion.img
                      src="/IMG6.JPG"
                      alt="an image"
                      style={{ scale: scale }}
                      initial={{ scale: 1.0 }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        y: windowWidth > 1440 ? -1200 : -600,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            {/* <ScrollForMore /> */}
          </div>
        </div>
        <div className="detailed-information">
          <div className="container">
            <div className="text">
              <p>
              I am a detail-oriented and innovative frontend developer with a keen eye for design. I strive to deliver cutting-edge, accessible, and seamless web experiences that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
