'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'UX/UI Design',
    description: 'ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย เพิ่ม Conversion Rate ให้ธุรกิจของคุณ',
    tech: ['Figma', 'Adobe XD', 'Prototyping'],
    features: ['User Research', 'Wireframing', 'Design System', 'Usability Testing'],
    icon: (
      <svg className="w-12 h-12 stroke-[#6366F1] group-hover:stroke-[#22D3EE] transition-colors duration-300" fill="none" viewBox="0 0 48 48" strokeWidth={1.5}>
        <circle cx="24" cy="14" r="6" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
        <path d="M36 20l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14h8M8 20h6M8 26h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Web Development',
    description: 'พัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยี Next.js และ React ที่โหลดเร็ว ปลอดภัย และ SEO-friendly',
    tech: ['Next.js', 'React', 'TypeScript'],
    features: ['Server-Side Rendering', 'API Integration', 'Performance Optimized', 'SEO Built-in'],
    icon: (
      <svg className="w-12 h-12 stroke-[#6366F1] group-hover:stroke-[#22D3EE] transition-colors duration-300" fill="none" viewBox="0 0 48 48" strokeWidth={1.5}>
        <path d="M16 18l-8 6 8 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 18l8 6-8 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 12l-8 24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Landing Page',
    description: 'ออกแบบและพัฒนา Landing Page ที่ดึงดูดลูกค้า เพิ่มยอดขาย และสร้างความน่าเชื่อถือให้แบรนด์',
    tech: ['Next.js', 'Tailwind CSS', 'Responsive'],
    features: ['Mobile-First Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused'],
    icon: (
      <svg className="w-12 h-12 stroke-[#6366F1] group-hover:stroke-[#22D3EE] transition-colors duration-300" fill="none" viewBox="0 0 48 48" strokeWidth={1.5}>
        <rect x="6" y="6" width="36" height="36" rx="4" />
        <path d="M6 16h36" />
        <rect x="10" y="20" width="16" height="8" rx="1" />
        <path d="M10 34h12M10 38h8" strokeLinecap="round" />
        <rect x="30" y="20" width="8" height="18" rx="1" />
      </svg>
    ),
  },
  {
    title: 'CRM System',
    description: 'ระบบบริหารจัดการลูกค้าที่ช่วยเพิ่มประสิทธิภาพทีมขาย ติดตามลูกค้าได้ครบทุกราย',
    tech: ['Node.js', 'MongoDB', 'REST API'],
    features: ['Customer Management', 'Sales Pipeline', 'Analytics Dashboard', 'Automation'],
    icon: (
      <svg className="w-12 h-12 stroke-[#6366F1] group-hover:stroke-[#22D3EE] transition-colors duration-300" fill="none" viewBox="0 0 48 48" strokeWidth={1.5}>
        <rect x="6" y="6" width="36" height="36" rx="4" />
        <path d="M14 34V24M22 34V18M30 34V22M38 34V14" strokeLinecap="round" />
        <circle cx="14" cy="24" r="2" />
        <circle cx="22" cy="18" r="2" />
        <circle cx="30" cy="22" r="2" />
        <circle cx="38" cy="14" r="2" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    description: 'สร้างร้านค้าออนไลน์ครบครัน รองรับระบบชำระเงินและจัดการสินค้าอัตโนมัติ',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Friendly'],
    icon: (
      <svg className="w-12 h-12 stroke-[#6366F1] group-hover:stroke-[#22D3EE] transition-colors duration-300" fill="none" viewBox="0 0 48 48" strokeWidth={1.5}>
        <path d="M8 10h4l4 20h20l4-14H16" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="38" r="3" />
        <circle cx="34" cy="38" r="3" />
      </svg>
    ),
  },
  {
    title: 'Custom Solutions',
    description: 'พัฒนาระบบตามความต้องการเฉพาะของธุรกิจ ตอบโจทย์ทุกปัญหาด้วยเทคโนโลยีที่เหมาะสม',
    tech: ['Full Stack', 'Cloud', 'DevOps'],
    features: ['Tailored Solutions', 'System Integration', '24/7 Support', 'Scalable Architecture'],
    icon: (
      <svg className="w-12 h-12 stroke-[#6366F1] group-hover:stroke-[#22D3EE] transition-colors duration-300" fill="none" viewBox="0 0 48 48" strokeWidth={1.5}>
        <path d="M24 30a6 6 0 100-12 6 6 0 000 12z" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4M11.27 11.27l2.83 2.83M33.9 33.9l2.83 2.83M11.27 36.73l2.83-2.83M33.9 14.1l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
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
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1026]"
      aria-label="บริการของเรา"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#E8E6F0] mb-4 tracking-tight">
            บริการของเรา
          </h2>
          <p className="text-lg text-[#8B8DA3] max-w-2xl mx-auto leading-relaxed">
            เราให้บริการพัฒนาเว็บไซต์และระบบดิจิทัลครบวงจร ด้วยเทคโนโลยีระดับโลก
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-8 transition-all duration-500 hover:border-[#6366F1]/50 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]"
            >
              {/* Icon */}
              <div className="mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#E8E6F0] mb-3 group-hover:text-[#22D3EE] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#8B8DA3] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#6366F1]/20 text-[#22D3EE] text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-[#8B8DA3] group-hover:text-[#E8E6F0]/80 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#6366F1] group-hover:text-[#22D3EE] mr-2 shrink-0 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
