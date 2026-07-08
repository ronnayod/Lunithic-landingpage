'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-label="หน้าแรก"
      className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden bg-[#0B1026]"
    >
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#22D3EE]/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.1),transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] opacity-20 blur-3xl animate-float" />
      <div className="absolute top-[40%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#6366F1] opacity-15 blur-3xl animate-float-slow hidden sm:block" />
      <div className="absolute bottom-20 left-[20%] w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE] opacity-10 blur-3xl animate-float delay-300" />
      <div className="absolute top-[60%] left-[60%] w-64 h-64 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] opacity-15 blur-3xl animate-float-slow delay-500 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#E8E6F0] mb-6 tracking-tight leading-tight">
            เว็บไซต์ที่สร้างยอดขาย
            <br />
            <span className="gradient-text">
              ให้ธุรกิจของคุณ
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#8B8DA3] mb-6 max-w-3xl mx-auto leading-relaxed">
            Lunithic คือทีมผู้เชี่ยวชาญด้านพัฒนาเว็บไซต์และระบบดิจิทัล
            ที่ช่วยให้ธุรกิจกว่า 30+ แห่งเติบโตในยุคดิจิทัล
            ด้วยเทคโนโลยี Next.js, React และ Node.js
          </p>

          {/* Trust badge */}
          <div className="flex items-center justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 text-[#F2E8C9] text-sm font-medium">
              <span className="text-[#22D3EE]">✦</span>
              ไว้วางใจโดย 30+ ธุรกิจทั่วประเทศ
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(99,102,241,0.5)] hover:scale-105 glow-indigo"
              aria-label="เริ่มต้นโปรเจกต์"
            >
              เริ่มต้นโปรเจกต์
            </a>
            <a
              href="#portfolio"
              className="border-2 border-[#6366F1] text-[#E8E6F0] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#6366F1]/20 hover:border-[#6366F1]/80"
              aria-label="ดูผลงาน"
            >
              ดูผลงาน
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#8B8DA3] text-xs tracking-widest uppercase">เลื่อนลง</span>
        <div className="animate-scroll-down">
          <svg
            className="w-6 h-6 text-[#6366F1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
