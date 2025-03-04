"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const cards = [
  {
    url: "images/7.jpeg",
    title: "บ้านของนกกว่า 280 ชนิด",
    id: 1,
  },
  {
    url: "images/biw_chaiwat3.jpeg",
    title: "ส่องสัตว์ยามค่ำคืน",
    id: 2,
  },
  {
    url: "images/ky17.jpeg",
    title: "ค้างคืนในป่าใหญ่",
    id: 3,
  },
  {
    url: "images/10.jpeg",
    title: "สตูดิโอธรรมชาติ",
    id: 4,
  },
  {
    url: "images/Hiking.jpeg",
    title: "7 เส้นทางสำรวจธรรมชาติ",
    id: 5,
  },
];

const Section3Component = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="flex flex-col gap-4">
            <span className="w-screen text-center text-[6vw] font-bold uppercase text-white xl:text-[2vw] 2xl:text-[1.5vw]">
              กิจกรรมในอุทยาน
            </span>

            <motion.div style={{ x }} className="ml-[25vw] flex gap-4">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({
  card,
}: {
  card: { id: number; url: string; title: string };
}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden rounded-2xl bg-neutral-200 md:h-[600px] md:w-[600px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="rounded-xl bg-gradient-to-br from-white/20 to-white/0 p-8 text-[6vw] font-black uppercase text-white backdrop-blur-lg xl:text-[2vw] 2xl:text-[1.5vw]">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Section3Component;
