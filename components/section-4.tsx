import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function Section4Component({
  title,
  description,
  image,
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const transition = {
    duration: 0.4,
    easeInOut: [0.65, 0.05, 0.36, 1],
  };

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      ref={container}
      className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-black lg:h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 text-white">
        <motion.p
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          transition={transition}
          className="w-[50vw] self-end text-[3vw] uppercase xl:text-[2vw] 2xl:text-[1.5vw]"
        >
          {description}
        </motion.p>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          transition={transition}
        >
          <p className="text-[6vw] uppercase xl:text-[5vw] 2xl:text-[4vw]">
            {title}
          </p>
          <InteractiveHoverButton className="border-none bg-green-700">
            อ่านเพิ่มเติม
          </InteractiveHoverButton>
        </motion.div>
      </div>
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image src={image} fill alt="image" className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
