import Image from "next/image";
import Background from "/images/2.jpg";
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

  return (
    <div
      ref={container}
      className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-black lg:h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-20 text-white">
        <p className="w-[50vw] self-end text-[2vw] uppercase">{description}</p>
        <div>
          <p className="text-[5vw] uppercase">{title}</p>
          <InteractiveHoverButton className="border-none bg-green-700">
            อ่านเพิ่มเติม
          </InteractiveHoverButton>
        </div>
      </div>
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image src={image} fill alt="image" className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
