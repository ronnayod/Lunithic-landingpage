'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: 1,
    icon: '🔍',
    title: 'Discovery',
    heading: 'วิเคราะห์ความต้องการ',
    description:
      'พูดคุยเพื่อทำความเข้าใจธุรกิจ เป้าหมาย และกลุ่มเป้าหมายของคุณอย่างละเอียด',
  },
  {
    number: 2,
    icon: '✏️',
    title: 'Design',
    heading: 'ออกแบบ UX/UI',
    description:
      'ออกแบบ Wireframe และ Prototype ที่ตอบโจทย์ผู้ใช้ ให้คุณรีวิวก่อนพัฒนาจริง',
  },
  {
    number: 3,
    icon: '💻',
    title: 'Develop',
    heading: 'พัฒนาระบบ',
    description:
      'พัฒนาเว็บด้วยเทคโนโลยีทันสมัย Next.js, Nuxt.js, Node.js พร้อมทดสอบทุกขั้นตอน',
  },
  {
    number: 4,
    icon: '🧪',
    title: 'Testing',
    heading: 'ทดสอบคุณภาพ',
    description:
      'ทดสอบทุกฟังก์ชัน ทุกอุปกรณ์ เพื่อให้มั่นใจว่าทำงานได้สมบูรณ์แบบ',
  },
  {
    number: 5,
    icon: '🚀',
    title: 'Handover',
    heading: 'ส่งมอบ',
    description:
      'ส่งมอบเว็บไซต์ที่สมบูรณ์พร้อมใช้งาน สิทธิ์การดูแลระบบ และคู่มือการจัดการเว็บไซต์สำหรับลูกค้า',
  },
  {
    number: 6,
    icon: '🛡️',
    title: 'Support',
    heading: 'ดูแลหลังเสร็จ',
    description:
      'ให้บริการดูแลรักษา อัพเดท และแก้ไขปัญหาหลัง launch',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      aria-label="ขั้นตอนการทำงาน"
      className="relative bg-[#0B1026] py-20 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#22D3EE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8E6F0] mb-4">
            ขั้นตอนการทำงานของเรา
          </h2>
          <p className="text-[#8B8DA3] text-lg max-w-xl mx-auto">
            กระบวนการทำงานที่โปร่งใสและมีประสิทธิภาพ
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (center on desktop, left on mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1]/40 via-[#22D3EE]/40 to-[#6366F1]/40 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.has(index);
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  data-index={index}
                  className={`relative flex items-start md:items-center transition-all duration-700 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Mobile & Desktop Layout */}
                  <div
                    className={`flex w-full items-start gap-4 sm:gap-6 md:gap-0 ${
                      isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`ml-16 sm:ml-20 flex-1 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isEven ? 'md:pl-12' : 'md:pr-12'
                      }`}
                    >
                      <article
                        className={`bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/5 ${
                          isEven ? 'md:text-left' : 'md:text-left'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl" role="img" aria-hidden="true">
                            {step.icon}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-widest text-[#22D3EE]">
                            {step.title}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#E8E6F0] mb-2">
                          {step.heading}
                        </h3>
                        <p className="text-[#8B8DA3] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </article>
                    </div>

                    {/* Center Circle (desktop) / Left Circle (mobile) */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex-shrink-0 z-10">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                          isVisible
                            ? 'bg-gradient-to-br from-[#6366F1] to-[#22D3EE] text-white shadow-lg shadow-[#6366F1]/30'
                            : 'bg-[#1A1F3D] text-[#8B8DA3] border border-[#6366F1]/20'
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Spacer for opposite side (desktop only) */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
