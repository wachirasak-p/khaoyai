"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const Section2Component = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const clip1 = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const clip2 = useTransform(scrollYProgress, [0, 1], [75, 100]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div ref={ref} className="h-[175vh]">
      <div className="sticky top-0 h-screen bg-black">
        <motion.h1
          style={{ opacity: textOpacity }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[4vw] font-bold uppercase text-white"
        >
          Get lost in nature
        </motion.h1>
        <motion.img
          className="top-0 h-full w-screen overflow-hidden object-cover"
          style={{ clipPath }}
          src="images/Nathapong_Thailandnature7.jpg"
          alt="view1"
        />
      </div>
    </motion.div>
  );
};

export default Section2Component;
