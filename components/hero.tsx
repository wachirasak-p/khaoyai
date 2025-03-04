"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TypingAnimation } from "./magicui/typing-animation";
import Image from "next/image";

const HeroComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  return (
    <motion.div ref={ref}>
      <div className="relative top-0 h-[150vh] overflow-clip">
        <motion.img
          style={{ scale }}
          src="/images/slide_.jpg"
          alt="logo"
          // fill
          className="sticky left-0 top-0 size-full h-screen object-cover"
        />
      </div>
      <motion.h1 style={{ opacity }} className="absolute bottom-10 p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </motion.div>
        <TypingAnimation className="text-[8vw] font-bold uppercase text-white">
          อุทยานแห่งชาติเขาใหญ่
        </TypingAnimation>
      </motion.h1>
    </motion.div>
  );
};

export default HeroComponent;
