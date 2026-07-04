'use client';

import Link from 'next/link';

export default function CTABanner() {
  return (
    <section
      aria-label="เรียกร้องให้ดำเนินการ"
      className="relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes gradientShift {
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
        .animated-gradient {
          background: linear-gradient(
            135deg,
            #6366f1 0%,
            #22d3ee 25%,
            #6366f1 50%,
            #22d3ee 75%,
            #6366f1 100%
          );
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
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
        .orb-1 {
          animation: float1 6s ease-in-out infinite;
        }
        .orb-2 {
          animation: float2 8s ease-in-out infinite;
        }
        .orb-3 {
          animation: float3 7s ease-in-out infinite;
        }
      `}</style>

      <div className="animated-gradient relative py-20 md:py-24">
        {/* Floating decorative orbs */}
        <div className="orb-1 absolute top-8 left-[10%] w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="orb-2 absolute bottom-8 right-[15%] w-40 h-40 bg-white/8 rounded-full blur-3xl pointer-events-none" />
        <div className="orb-3 absolute top-1/2 left-[60%] -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="orb-1 absolute bottom-4 left-[30%] w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            พร้อมเริ่มต้นโปรเจกต์ของคุณหรือยัง?
          </h2>
          <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย พูดคุยกับทีมผู้เชี่ยวชาญของเราวันนี้
          </p>
          <Link
            href="#contact"
            className="inline-block bg-white text-[#6366F1] font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="จองคิวปรึกษาฟรีกับ Lunithic"
          >
            จองคิวปรึกษาฟรี
          </Link>
        </div>
      </div>
    </section>
  );
}
