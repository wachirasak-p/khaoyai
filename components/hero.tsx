"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { TypingAnimation } from "./magicui/typing-animation";

type Props = {};

const HeroComponent = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "absolute" : "fixed",
  );

  return (
    <motion.div ref={ref}>
      <div className="relative top-0 h-[150vh] overflow-x-clip">
        {/* <motion.video
          src="/videos/waterfall.mp4"
          className="sticky left-0 top-0 size-full h-screen object-cover"
          autoPlay
          muted
          loop
          style={{}}
        /> */}
        <motion.img
          style={{ scale }}
          src="/images/slide_.jpg"
          alt="logo"
          // fill
          className="sticky left-0 top-0 size-full h-screen object-cover"
        />
      </div>
      <motion.h1 style={{ opacity }} className="absolute bottom-10 p-10">
        <TypingAnimation className="text-[8vw] font-bold uppercase text-white">
          อุทยานแห่งชาติเขาใหญ่
        </TypingAnimation>
      </motion.h1>
    </motion.div>
  );
};

export default HeroComponent;
