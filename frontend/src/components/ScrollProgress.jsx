import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed dark:bg-white top-0 left-0 right-0 h-1.5 bg-blue-950 origin-left z-100 shadow-sm"
    />
  );
};

export default ScrollProgress;
