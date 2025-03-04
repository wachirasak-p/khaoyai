"use client";
import React from "react";
import { NumberTicker } from "./magicui/number-ticker";

const Section1Component = () => {
  return (
    <div className="relative w-full bg-neutral-900 px-8 py-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-green-600">
            &quot;ธรรมชาติ&quot; และ &quot;อากาศบริสุทธิ์&quot;
            ไม่ไกลจากเมืองหลวง ที่หลายคนฝันถึงและอยากจะมาสัมผัสสักครั้ง
            อุทยานที่เป็นผืนป่ามรดกโลก ดินแดนสวรรค์แห่งนักท่องไพร
            และบ้านหลังใหญ่ของสัตว์ป่า
          </h2>
          <h4 className="text-lg">
            อุทยานแห่งชาติเขาใหญ่ มีความสำคัญในระดับโลกและระดับภูมิภาคอาเซียน
            คือ เป็นหนึ่งในพื้นที่มรดกโลกทางธรรมชาติ (World Heritage Site)
            และอุทยานมรดกแห่งอาเซียน (ASEAN Heritage Park) ครอบคลุม 4 จังหวัด
            ประกอบด้วย สระบุรี นครราชสีมา ปราจีนบุรี และนครนายก
          </h4>
          <h4 className="text-lg">
            พื้นที่เกือบ 2,206
            ตารางกิโลเมตรของอุทยานแห่งชาติจึงเป็นแหล่งกำเนิดต้นน้ำลำธารที่สำคัญหลายสาย
            ที่มีความหลากหลายทางชีวภาพ และเป็นบ้านหลังใหญ่ของสิ่งมีชีวิตที่สำคัญ
            หายาก และใกล้สูญพันธุ์หลายชนิด รวมถึงนกมากกว่า 280 ชนิด
            จึงทำให้เป็นที่นิยมของนักดูนกจากทั่วโลก
          </h4>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 border-t border-neutral-700 py-4 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg">ครอบคลุม</p>
            <NumberTicker
              value={4}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-green-600"
            />
            <p className="text-lg">จังหวัด</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg">พื้นที่</p>
            <NumberTicker
              value={2206}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-green-600"
            />
            <p className="text-lg">ตารางกิโลเมตร</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg">นก</p>
            <NumberTicker
              value={280}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-green-600"
            />
            <p className="text-lg">ชนิด</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1Component;
