'use client';

import { useEffect, useRef } from 'react';
import {
  HiPaintBrush,
  HiCodeBracket,
  HiComputerDesktop,
  HiChartBar,
  HiShoppingCart,
  HiCog8Tooth,
} from 'react-icons/hi2';

const services = [
  {
    title: 'UX/UI Design',
    description: 'ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย เพิ่ม Conversion Rate ให้ธุรกิจของคุณ',
    tech: ['Figma', 'Adobe XD', 'Prototyping'],
    features: ['User Research', 'Wireframing', 'Design System', 'Usability Testing'],
    icon: <HiPaintBrush className="w-12 h-12 text-[#F472B6] group-hover:text-[#22D3EE] transition-colors duration-300" />,
  },
  {
    title: 'Web Development',
    description: 'พัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยี Next.js และ React ที่โหลดเร็ว ปลอดภัย และ SEO-friendly',
    tech: ['Next.js', 'React', 'TypeScript'],
    features: ['API Integration', 'Performance Optimized', 'SEO Built-in'],
    icon: <HiCodeBracket className="w-12 h-12 text-[#818CF8] group-hover:text-[#22D3EE] transition-colors duration-300" />,
  },
  {
    title: 'Landing Page',
    description: 'ออกแบบและพัฒนา Landing Page ที่ดึงดูดลูกค้า เพิ่มยอดขาย และสร้างความน่าเชื่อถือให้แบรนด์',
    tech: ['Next.js', 'Tailwind CSS', 'Responsive'],
    features: ['Mobile-First Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused'],
    icon: <HiComputerDesktop className="w-12 h-12 text-[#34D399] group-hover:text-[#22D3EE] transition-colors duration-300" />,
  },
  {
    title: 'CRM System',
    description: 'ระบบบริหารจัดการลูกค้าที่ช่วยเพิ่มประสิทธิภาพทีมขาย ติดตามลูกค้าได้ครบทุกราย',
    tech: ['Node.js', 'MongoDB', 'REST API'],
    features: ['Customer Management', 'Sales Pipeline', 'Analytics Dashboard', 'Automation'],
    icon: <HiChartBar className="w-12 h-12 text-[#FBBF24] group-hover:text-[#22D3EE] transition-colors duration-300" />,
  },
  {
    title: 'E-Commerce',
    description: 'สร้างร้านค้าออนไลน์ครบครัน รองรับระบบชำระเงินและจัดการสินค้าอัตโนมัติ',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Friendly'],
    icon: <HiShoppingCart className="w-12 h-12 text-[#FB923C] group-hover:text-[#22D3EE] transition-colors duration-300" />,
  },
  {
    title: 'Custom Solutions',
    description: 'พัฒนาระบบตามความต้องการเฉพาะของธุรกิจ ตอบโจทย์ทุกปัญหาด้วยเทคโนโลยีที่เหมาะสม',
    tech: ['Full Stack', 'Cloud', 'DevOps'],
    features: ['Tailored Solutions', 'System Integration', '24/7 Support', 'Scalable Architecture'],
    icon: <HiCog8Tooth className="w-12 h-12 text-[#38BDF8] group-hover:text-[#22D3EE] transition-colors duration-300" />,
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
              className="group bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-[#6366F1]/50 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]"
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
