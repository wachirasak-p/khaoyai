import { motion } from "motion/react";
import React from "react";

const partners = [
  {
    icon: "/images/partner/1.png",
  },
  {
    icon: "/images/partner/2.png",
  },
  {
    icon: "/images/partner/3.png",
  },
  {
    icon: "/images/partner/4.png",
  },
  {
    icon: "/images/partner/5.png",
  },
  {
    icon: "/images/partner/6.png",
  },
];

const PartnerComponent = () => {
  const variants = {
    hover: {
      scale: 1.3,
      transition: { duration: 0.3 },
    },
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="relative pb-10 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex w-44 justify-center">
              <motion.img
                className="cursor-pointer"
                src={partner.icon}
                alt={partner.icon}
                variants={variants}
                whileHover="hover"
                whileInView="whileInView"
                initial="initial"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;
