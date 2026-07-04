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
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-[#E8E6F0] mb-2">
                  ชื่อ
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="กรอกชื่อของคุณ"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#6366F1]/20 bg-[#1A1F3D]/60 text-[#E8E6F0] placeholder-[#8B8DA3]/50 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                  aria-label="ชื่อของคุณ"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-[#E8E6F0] mb-2">
                  อีเมล
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#6366F1]/20 bg-[#1A1F3D]/60 text-[#E8E6F0] placeholder-[#8B8DA3]/50 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                  aria-label="อีเมลของคุณ"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="contact-service" className="block text-sm font-semibold text-[#E8E6F0] mb-2">
                  บริการที่สนใจ
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-[#6366F1]/20 bg-[#1A1F3D]/60 text-[#E8E6F0] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30 focus:outline-none transition-all duration-300 backdrop-blur-xl appearance-none"
                  aria-label="เลือกบริการที่สนใจ"
                >
                  <option value="" className="bg-[#1A1F3D]">เลือกบริการ</option>
                  <option value="landing" className="bg-[#1A1F3D]">Landing Page</option>
                  <option value="crm" className="bg-[#1A1F3D]">CRM System</option>
                  <option value="ecommerce" className="bg-[#1A1F3D]">E-Commerce</option>
                  <option value="uxui" className="bg-[#1A1F3D]">UX/UI Design</option>
                  <option value="development" className="bg-[#1A1F3D]">Web Development</option>
                  <option value="custom" className="bg-[#1A1F3D]">Custom Solution</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(99,102,241,0.5)] hover:scale-105"
                aria-label="จองคิวปรึกษาฟรี"
              >
                จองคิวปรึกษาฟรี
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-8">
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
                    <div className="text-[#8B8DA3]">lunithic@gmail.com</div>
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
                    <div className="text-[#8B8DA3]">09-8285-6421</div>
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
                    <div className="text-[#8B8DA3]">กรุงเทพมหานคร ประเทศไทย</div>
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
                    <div className="text-[#8B8DA3]">จันทร์-ศุกร์ 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#E8E6F0] mb-4">
                ติดตามเราได้ที่
              </h3>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', letter: 'f' },
                  { label: 'Twitter', letter: 't' },
                  { label: 'Instagram', letter: 'ig' },
                  { label: 'LinkedIn', letter: 'in' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
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
