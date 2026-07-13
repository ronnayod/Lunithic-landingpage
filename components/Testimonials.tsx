'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'สมชาย วิทยาการ',
    role: '',
    initials: 'สว',
    quote:
      'Lunithic ช่วยพัฒนาเว็บไซต์ E-Commerce ให้เรา ผลลัพธ์เกินคาด ยอดขายออนไลน์เพิ่มขึ้น 280% ภายใน 6 เดือนแรก ทีมงานมืออาชีพมากครับ',
    rating: 5,
  },
  {
    name: 'นิภา รัตนกุล',
    role: '',
    initials: 'นร',
    quote:
      'ระบบ CRM ที่ Lunithic พัฒนาให้ ช่วยให้ทีมขายทำงานได้เร็วขึ้น 3 เท่า ติดตามลูกค้าได้ครบถ้วน ไม่หลุดแม้แต่รายเดียว',
    rating: 5,
  },
  {
    name: 'ธนพล ศิริชัย',
    role: '',
    initials: 'ธศ',
    quote:
      'Landing page ที่ทำให้สวยมาก โหลดเร็ว SEO ดี ลูกค้าใหม่ติดต่อเข้ามาเพิ่มขึ้นเรื่อยๆ ประทับใจบริการหลังขายมาก',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} จาก 5 ดาว`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? 'text-[#F2E8C9]' : 'text-[#8B8DA3]/30'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-label="เสียงจากลูกค้า"
      className="relative bg-gradient-to-b from-[#0B1026] to-[#1A1F3D] py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-[#6366F1]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#22D3EE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8E6F0] mb-4">
            เสียงจากลูกค้าของเรา
          </h2>
          <p className="text-[#8B8DA3] text-lg max-w-xl mx-auto">
            ความไว้วางใจที่ลูกค้ามอบให้
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className={`group bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-500 hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/5 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <blockquote className="mt-5 mb-6 flex-1">
                <p className="text-[#E8E6F0]/90 italic leading-relaxed text-sm lg:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#6366F1]/10">
                {/* Avatar Initials */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#6366F1]/20">
                  <span className="text-white text-sm font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[#E8E6F0] font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#8B8DA3] text-xs">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
