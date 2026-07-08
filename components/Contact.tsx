'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('ขอบคุณที่ติดต่อเรา! เราจะติดต่อกลับโดยเร็วที่สุด');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B1026] to-[#1A1F3D]"
      aria-label="ติดต่อเรา"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#E8E6F0] mb-4 tracking-tight">
            ติดต่อเรา
          </h2>
          <p className="text-lg text-[#8B8DA3] max-w-2xl mx-auto leading-relaxed">
            พร้อมเริ่มต้นโปรเจกต์ของคุณแล้วหรือยัง? ปรึกษาฟรีไม่มีค่าใช้จ่าย
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
   

          {/* Contact info */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-5 sm:p-8">
              <h3 className="text-xl font-bold text-[#E8E6F0] mb-6">
                ข้อมูลติดต่อ
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#E8E6F0] text-sm">Email</div>
                    <div className="text-[#8B8DA3] text-sm sm:text-base">lunithic@gmail.com</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#E8E6F0] text-sm">โทรศัพท์</div>
                    <div className="text-[#8B8DA3] text-sm sm:text-base">09-8285-6421, 09-2658-4645</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#E8E6F0] text-sm">ที่อยู่</div>
                    <div className="text-[#8B8DA3] text-sm sm:text-base">ปราจีนบุรี ประเทศไทย</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#E8E6F0] text-sm">เวลาทำการ</div>
                    <div className="text-[#8B8DA3] text-sm sm:text-base">จันทร์-ศุกร์ 12:00-20:00</div>
                    <div className="text-[#8B8DA3] text-sm sm:text-base">เสาร์-อาทิตย์ 14:00-22:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="space-y-6">
            {/* Social links */}
            <div className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-5 sm:p-8">
              <h3 className="text-lg font-bold text-[#E8E6F0] mb-4">
                ติดตามเราได้ที่
              </h3>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', letter: 'f', href: 'https://www.facebook.com/profile.php?id=61578130177732&locale=th_TH' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 bg-[#1A1F3D] border border-[#6366F1]/20 rounded-xl flex items-center justify-center text-[#8B8DA3] font-bold text-sm hover:bg-[#6366F1] hover:text-white hover:border-[#6366F1] transition-all duration-300"
                  >
                    {social.letter}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
