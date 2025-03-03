"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

type Props = {};

const Section1Component = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const SECTION_HEIGHT = 1500;

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  // const backgroundSize = useTransform(scrollY, [0, 1], ["20%", "100%"]);

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 1]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1500 ? "relative" : "sticky"
  );

  return (
    <div ref={ref} className="  w-full">
      {/* <motion.div style={{ position }}> */}
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          // position,
          // backgroundImage:
          //   "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundImage: "url(/images/view1.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* </motion.div> */}
    </div>
  );
};

export default Section1Component;
