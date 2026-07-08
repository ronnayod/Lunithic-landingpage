'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Lunithic รับทำเว็บไซต์ราคาเท่าไหร่?',
    answer:
      'ราคาขึ้นอยู่กับประเภทและขอบเขตของโปรเจกต์ Landing Page เริ่มต้นที่ 15,000-50,000 บาท, ระบบ E-Commerce เริ่มต้นที่ 50,000-200,000 บาท, ระบบ CRM เริ่มต้นที่ 80,000-300,000 บาท เราให้คำปรึกษาฟรีเพื่อประเมินราคาที่เหมาะสมกับความต้องการของคุณ',
  },
  {
    question: 'ใช้เวลาพัฒนาเว็บไซต์นานแค่ไหน?',
    answer:
      'ระยะเวลาขึ้นอยู่กับความซับซ้อนของโปรเจกต์ Landing Page ใช้เวลาประมาณ 2-4 สัปดาห์ เว็บไซต์ E-Commerce ใช้เวลา 6-12 สัปดาห์ ระบบ CRM หรือ Custom Solution ใช้เวลา 8-16 สัปดาห์ ทุกโปรเจกต์มีการอัพเดทความคืบหน้าให้ลูกค้าทราบเป็นระยะ',
  },
  {
    question: 'Lunithic ใช้เทคโนโลยีอะไรในการพัฒนา?',
    answer:
      'เราใช้เทคโนโลยีทันสมัยที่เป็นมาตรฐานอุตสาหกรรม ได้แก่ Nuxt.js, Vue, Next.js, React, TypeScript สำหรับ Frontend และ Node.js, MongoDB, สำหรับ Backend รวมถึง Figma สำหรับการออกแบบ UX/UI ทำให้เว็บไซต์โหลดเร็ว ปลอดภัย และรองรับการขยายตัวในอนาคต',
  },
  {
    question: 'รวม SEO ในการทำเว็บไซต์ด้วยไหม?',
    answer:
      'ทุกเว็บไซต์ที่เราพัฒนาจะรวม SEO พื้นฐานให้ทุกโปรเจกต์ ได้แก่ การตั้งค่า meta tags, sitemap,  structured data (JSON-LD), page speed optimization และ mobile-first responsive design สำหรับ SEO ขั้นสูง เช่น content strategy และ link building สามารถเลือกเพิ่มเติมได้',
  },
  {
    question: 'มีบริการดูแลเว็บไซต์หลังเสร็จไหม?',
    answer:
      'มีครับ เราให้บริการดูแลรักษาเว็บไซต์หลัง launch ได้แก่ แก้ไข bug, อัพเดทระบบ, สำรองข้อมูล, ดูแลความปลอดภัย และให้คำปรึกษาตลอดระยะสัญญา แพ็กเกจดูแลรักษาเริ่มต้นที่ 3,000 บาท/เดือน',
  },
  {
    question: 'ต้องเตรียมอะไรบ้างก่อนเริ่มโปรเจกต์?',
    answer:
      'สิ่งที่ควรเตรียม ได้แก่ 1) ข้อมูลธุรกิจและบริการ 2) โลโก้และ branding guideline (ถ้ามี) 3) ตัวอย่างเว็บไซต์ที่ชอบ 4) เนื้อหาและรูปภาพที่ต้องการใส่ 5) งบประมาณและระยะเวลาที่คาดหวัง หากยังไม่พร้อม เราสามารถช่วยเตรียมข้อมูลเหล่านี้ในขั้นตอน Discovery ได้',
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#6366F1]/30"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
      >
        <h3
          itemProp="name"
          className="text-[#E8E6F0] font-semibold text-base lg:text-lg pr-4 group-hover:text-[#22D3EE] transition-colors duration-300"
        >
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#6366F1]/30 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-[#6366F1] border-transparent'
              : 'group-hover:border-[#6366F1]/60'
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isOpen ? 'rotate-45 text-white' : 'text-[#6366F1]'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v14m7-7H5" />
          </svg>
        </span>
      </button>

      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p
            itemProp="text"
            className="px-6 pb-6 text-[#8B8DA3] text-sm lg:text-base leading-relaxed"
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="คำถามที่พบบ่อย"
      className="relative bg-[#0B1026] py-20 md:py-28 overflow-hidden"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6366F1]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8E6F0] mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-[#8B8DA3] text-lg max-w-xl mx-auto">
            คำตอบสำหรับทุกข้อสงสัยเกี่ยวกับบริการของเรา
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
