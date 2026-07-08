'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description: 'ระบบร้านค้าออนไลน์รองรับ 10,000+ สินค้า',
    result: 'เพิ่มยอดขายออนไลน์ 280%',
    emoji: '🛍️',
    image: '/img/img_E-Commerce.png',
    link: 'https://6a4118e252fddc88a192423b--reliable-sable-25d034.netlify.app/',
  },
  {
    title: 'Web Management',
    category: 'Management',
    description: 'ระบบจัดการเว็บไซต์หลังบ้าน',
    result: 'ลดเวลาทำงาน 60%',
    emoji: '🖥️',
    image: '/img/img_Management.png',
    link: 'https://lunithicmanagement.vercel.app/',
  },
  // {
  //   title: 'CRM Dashboard',
  //   category: 'CRM System',
  //   description: 'ระบบบริหารลูกค้าสำหรับบริษัทขนาดกลาง',
  //   result: 'เพิ่มประสิทธิภาพทีมขาย 3 เท่า',
  //   emoji: '📈',
  // },
  // {
  //   title: 'Booking System',
  //   category: 'Custom Solution',
  //   description: 'ระบบจองคิวออนไลน์',
  //   result: 'ลดอัตราการยกเลิก 45%',
  //   emoji: '📅',
  // },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-children');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1026] to-[#1A1F3D]"
      aria-label="ผลงานของเรา"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#E8E6F0] mb-4 tracking-tight">
            ผลงานของเรา
          </h2>
          <p className="text-lg text-[#8B8DA3] max-w-2xl mx-auto leading-relaxed">
            ตัวอย่างโปรเจกต์ที่เราพัฒนาให้กับลูกค้า พร้อมผลลัพธ์ที่วัดได้
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {projects.map((project) => {
            const card = (
              <>
                {/* Image or gradient icon area */}
                <div className="relative h-56 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-[#6366F1] to-[#22D3EE] h-full flex items-center justify-center text-7xl sm:text-8xl transition-transform duration-500 group-hover:scale-105 relative">
                      <div className="absolute inset-0 bg-[#0B1026]/20" />
                      <span className="relative z-10">{project.emoji}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Category badge */}
                  <div className="text-xs text-[#22D3EE] font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#E8E6F0] mb-2 group-hover:text-[#22D3EE] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#8B8DA3] mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Result metric */}
                  <p className="text-[#F2E8C9] font-semibold text-sm mb-4">
                    📊 {project.result}
                  </p>

                  {/* Link or badge */}
                  {project.link ? (
                    <span className="inline-flex items-center text-[#22D3EE] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      ดูผลงาน
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#6366F1]/20 text-[#8B8DA3] text-xs font-medium">
                      กำลังพัฒนา
                    </span>
                  )}
                </div>
              </>
            );

            const cardClassName =
              'group bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#6366F1]/50 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]';

            if (project.link) {
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClassName} block cursor-pointer`}
                  aria-label={`ดูโปรเจกต์ ${project.title}`}
                >
                  {card}
                </a>
              );
            }

            return (
              <div key={project.title} className={cardClassName} aria-label={`โปรเจกต์ ${project.title}`}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
