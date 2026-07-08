'use client';

import Link from 'next/link';

export default function CTABanner() {
  return (
    <section
      aria-label="เรียกร้องให้ดำเนินการ"
      className="relative overflow-hidden bg-[#0B1026]"
    >
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(15px) translateX(-15px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(-8px);
          }
        }
        @keyframes gradientBtn {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .orb-1 {
          animation: float1 6s ease-in-out infinite;
        }
        .orb-2 {
          animation: float2 8s ease-in-out infinite;
        }
        .orb-3 {
          animation: float3 7s ease-in-out infinite;
        }
        .cta-btn {
          background: linear-gradient(135deg, #6366f1, #22d3ee, #6366f1);
          background-size: 200% 200%;
          animation: gradientBtn 4s ease infinite;
        }
      `}</style>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        {/* Soft radial glow behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[350px] bg-[#6366F1]/10 rounded-full blur-[100px]" />
        </div>

        {/* Floating decorative orbs — muted to match dark theme */}
        <div className="orb-1 absolute top-8 left-[10%] w-32 h-32 bg-[#6366F1]/8 rounded-full blur-2xl pointer-events-none" />
        <div className="orb-2 absolute bottom-8 right-[15%] w-40 h-40 bg-[#22D3EE]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="orb-3 absolute top-1/2 left-[60%] -translate-y-1/2 w-24 h-24 bg-[#6366F1]/8 rounded-full blur-2xl pointer-events-none" />

        {/* Card container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E8E6F0] mb-4 leading-tight">
              พร้อมเริ่มต้นโปรเจกต์ของคุณ<span className="gradient-text"> หรือยัง?</span>
            </h2>
            <p className="text-[#8B8DA3] text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              ปรึกษาฟรี ไม่มีค่าใช้จ่าย พูดคุยกับทีมผู้เชี่ยวชาญของเราวันนี้
            </p>
            <Link
              href="#contact"
              className="cta-btn inline-block text-white font-bold text-base px-8 py-3 rounded-full shadow-lg shadow-[#6366F1]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6366F1]/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6366F1]"
              aria-label="เริ่มต้นโปรเจกต์กับ Lunithic"
            >
              เริ่มต้นโปรเจกต์
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

