import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      className="relative h-[500px] bg-[#256936] md:h-[300px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto">
        <div className="fixed bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 p-10 text-white md:h-[300px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div>
                <p>อุทยานแห่งชาติเขาใหญ่</p>
                <p>
                  ที่อยู่ : ตู้ ปณ. 9 ปท.ปากช่อง ตำบลหมูสี อำเภอปากช่อง
                  จังหวัดนครราชสีมา 30130
                </p>
                <p>อีเมล : khaoyai.np@gmail.com</p>
              </div>
              <div>
                <p>สอบถามข้อมูล/ติดต่อราชการ เวลา 08.30-16.30 น.</p>
                <p>ที่ทำการอุทยานแห่งชาติเขาใหญ่ โทร : 086-092-6527</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p>เวลาเปิดอุทยาน: 06:00 - 18:00 น.</p>
                <p>สอบถามข้อมูลท่องเที่ยว: 08.30-16.30 น.</p>
                <p>ศูนย์บริการนักท่องเที่ยว โทร : 086-092-6529</p>
              </div>
              <div>
                <p>แจ้งเหตุฉุกเฉิน (24 ชม.)</p>
                <ol>
                  <li>1. ศูนย์บริการนักท่องเที่ยว โทร : 086-092-6529</li>
                  <li>2. ที่ทำกาารอุทยาแห่งชาติเขาใหญ่ โทร : 086-092-6527</li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>© 2021 อุทยานแห่งชาติเขาใหญ่</p>
              <p>
                โปรเจคนี้จัดทำขึ้นเพื่อวัตถุประสงค์ทางการศึกษาและเป็นตัวอย่างเท่านั้น
                และมิได้มีเจตนาเพื่อการใช้งานเชิงพาณิชย์
              </p>
              <p>
                ข้อมูลทั้งหมดนำมาจาก{" "}
                <Link
                  href="https://www.khaoyainationalpark.com/"
                  target="_blank"
                  className="underline"
                >
                  เว็บเขาใหญ่
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
