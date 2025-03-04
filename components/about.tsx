"use client";

import React from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { motion } from "motion/react";
import Image from "next/image";

const data = [
  {
    title: "รู้จักเขาใหญ่",
    description:
      "อุทยานแห่งชาติเขาใหญ่เป็นอุทยานแห่งแรกของประเทศไทย ที่มีความสำคัญทั้งในระดับโลก และภูมิภาค ด้วยสภาพพื้นที่เป็นเขาสูงที่เป็นขอบของที่ราบสูงอีสาน ทำให้อุทยานเป็นแนวดักน้ำฝน ก่อเกิดเป็นแหล่งต้นน้ำลำธารหลายสาย ที่กำเนิดความหลากหลายของพันธุ์พืช และสัตว์ป่า อุทยานจึงเปรียบเหมือนบ้าน และโรงเรียนให้นักท่องเที่ยวได้เข้ามาพัก และเรียนรู้ที่จะรักษ์ และหวงแหนทรัพยากรธรรมชาติ เพื่อช่วยกันปกป้อง “บ้าน” ของพวกเราทุกคน",
    icon: "/images/icon_terrain.svg",
  },
  {
    title: "ฤดูกาล",
    description:
      "อุทยานแห่งชาติเขาใหญ่มีลักษณะเป็นป่าดิบรกทึบ และได้รับอิทธิพลจากลมมรสุม ทำให้เกิดฝนตกชุกตามฤดูกาล อากาศไม่ร้อนจัดและหนาวจัดจนเกินไป จัดอยู่ในประเภทเย็นสบายตลอดทั้งปี เหมาะแก่การท่องเที่ยวและประกอบกิจกรรมนันทนาการชนิดต่างๆ",
    icon: "/images/icon_icloud.svg",
  },
  {
    title: "ทรัพยากรป่าไม้",
    description:
      "ป่าไม้ในเขตอุทยานแห่งชาติเขาใหญ่ ครอบคลุมพื้นที่ประมาณ 2,206 ตร.กม. เป็นเขาสูงที่ตั้งอยู่ส่วนขอบของที่ราบสูงอีสาน ทำให้อุทยานแห่งชาติเขาใหญ่เป็นแนวดักน้ำฝน ทั้งลมมรสุมจากทะเลอันดามันและลมมรสุมจากทะเลจีนใต้ ทำให้มีฝนตกชุก ซึ่งพื้นที่ป่าส่วนใหญ่ในอุทยานประกอบด้วยทุ่งหญ้ากว้าง และป่าอันอุดมสมบูรณ์ ทั้งป่าดิบแล้ง ป่าเบญจพรรณ ป่าดิบเขา ป่าดิบชื้น และป่ารุ่นสอง ซึ่งเป็นแหล่งอาศัยของทั้งพันธุ์พืช และสัตว์ป่านานาชนิด",
    icon: "/images/icon_forest.svg",
  },
];

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

const AboutComponent = () => {
  return (
    <section className="relative bg-neutral-900 px-10 py-20">
      <div className="container mx-auto">
        <motion.h1
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          transition={transition}
          className="pb-10 text-center text-4xl font-bold text-white lg:text-5xl"
        >
          เกี่ยวกับเรา
        </motion.h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.map((item, index) => (
            <Card key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  index,
  icon,
}: {
  title: string;
  description: string;
  index: number;
  icon: string;
}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      transition={{ ...transition, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-neutral-200 p-8"
    >
      <Image src={icon} alt={title} width={75} height={75} />
      <h3 className="scroll-m-20 text-2xl font-semibold">{title}</h3>
      <p className="line-clamp-4 indent-4">{description}</p>

      <InteractiveHoverButton className="w-fit border-none bg-green-700 text-white">
        อ่านเพิ่มเติม
      </InteractiveHoverButton>
    </motion.div>
  );
};

export default AboutComponent;
