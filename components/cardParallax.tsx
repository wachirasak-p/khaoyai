import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, MotionValue, useTransform } from "motion/react";

const CardParallax = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    src: string;
    color: string;
  }[];
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main className="my-10" ref={container}>
      {data.map((item, i) => {
        const targetScale = 1 - (data.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...item}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

const Card = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}: {
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      ref={container}
    >
      <motion.div
        className="relative flex h-[75vh] w-full max-w-5xl origin-top flex-col rounded-3xl p-12"
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
          scale: cardScale,
        }}
      >
        <h2 className="m-0 text-center text-2xl">{title}</h2>

        <div className="mt-12 flex h-full flex-col gap-4">
          <div className="relative">
            <p className="text-base">{description}</p>
          </div>

          <div className="relative h-full overflow-hidden rounded-3xl">
            <motion.div className="h-full" style={{ scale: imageScale }}>
              <Image fill src={`${src}`} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardParallax;
