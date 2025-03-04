"use client";

import HeroComponent from "@/components/hero";
import Section1Component from "@/components/section-1";
import Section2Component from "@/components/section-2";
import Section3Component from "@/components/section-3";
import Section4Component from "@/components/section-4";
import AboutComponent from "@/components/about";
import Lenis from "lenis";
import { useEffect } from "react";
import Footer from "@/components/footer";
import PartnerComponent from "@/components/partner";
import CardParallax from "@/components/cardParallax";
import { animals, plants } from "@/lib/data";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      {/* <div className="h-[500vh] relative"> */}
      <HeroComponent />
      <Section1Component />
      <Section2Component />
      {/* </div> */}
      <Section3Component />
      <AboutComponent />
      <Section4Component
        title="สัตว์ป่าแห่งเขาใหญ่"
        description="อุทยานแห่งชาติเขาใหญ่เป็นพื้นที่อนุรักษ์ที่มีสัตว์ป่าชุกชุมมากที่สุดแห่งหนึ่งของประเทศไทย เนื่องจากเป็นแหล่งอาหารที่เหมาะสมกับสัตว์ป่าหลายชนิดสัตว์ที่พบเห็นได้บ่อยและเป็นที่ดึงดูดใจผู้มาเยือน ได้แก่ ช้างป่า กระทิง หมาใน เก้ง กวางป่า ชะนี นกเงือก และลิงกัง"
        image="/images/Panus_Kitsuwanrat10.jpg"
      />
      <CardParallax data={animals} />
      <Section4Component
        title="พรรณไม้แห่งขุนเขา"
        description="อุทยานแห่งชาติเขาใหญ่เป็นผืนป่าขนาดใหญ่ที่อุดมไปด้วยสังคมพืชหลากหลายประเภท ส่งผลให้มีความหลากหลายทางชีวภาพของพืชพันธุ์สูงตามไปด้วย พันธุ์ไม้หลายชนิดมีความโดดเด่นน่าสนใจเหมาะกับการเรียนรู้ อาทิ หวาย ไม้ตระกูลยาง กล้วยไม้"
        image="/images/011.jpeg"
      />
      <CardParallax data={plants} />
      <PartnerComponent />
      <Footer />
      {/* <div className="h-[100vh]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div> */}
    </div>
  );
}
