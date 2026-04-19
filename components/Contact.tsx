'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('ขอบคุณที่ติดต่อเรา! เราจะติดต่อกลับโดยเร็วที่สุด');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5C3A54] to-[#3D2438]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#EAE8E1] mb-4 tracking-tight">
            ติดต่อเรา
          </h2>
          <p className="text-xl text-[#EAE8E1]/70 max-w-2xl mx-auto">
            พร้อมเริ่มต้นโปรเจกต์ของคุณแล้วหรือยัง? ติดต่อเราวันนี้
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#EAE8E1] mb-2">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE8E1]/30 bg-[#EAE8E1]/10 text-[#EAE8E1] placeholder-[#EAE8E1]/50 focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#EAE8E1] mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE8E1]/30 bg-[#EAE8E1]/10 text-[#EAE8E1] placeholder-[#EAE8E1]/50 focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#EAE8E1] mb-2">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE8E1]/30 bg-[#EAE8E1]/10 text-[#EAE8E1] placeholder-[#EAE8E1]/50 focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#EAE8E1] mb-2">
                  บริการที่สนใจ
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE8E1]/30 bg-[#EAE8E1]/10 text-[#EAE8E1] focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent backdrop-blur-sm"
                >
                  <option value="" className="bg-[#5C3A54]">เลือกบริการ</option>
                  <option value="landing" className="bg-[#5C3A54]">Landing Page</option>
                  <option value="crm" className="bg-[#5C3A54]">CRM System</option>
                  <option value="ecommerce" className="bg-[#5C3A54]">E-Commerce</option>
                  <option value="uxui" className="bg-[#5C3A54]">UX/UI Design</option>
                  <option value="development" className="bg-[#5C3A54]">Web Development</option>
                  <option value="custom" className="bg-[#5C3A54]">Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#EAE8E1] mb-2">
                  รายละเอียดโปรเจกต์
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE8E1]/30 bg-[#EAE8E1]/10 text-[#EAE8E1] placeholder-[#EAE8E1]/50 focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent backdrop-blur-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EAE8E1] text-[#5C3A54] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white transition shadow-xl hover:scale-105 transform"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[#EAE8E1]/10 backdrop-blur-sm p-8 rounded-3xl border border-[#EAE8E1]/20">
              <h3 className="text-2xl font-bold text-[#EAE8E1] mb-6">
                ข้อมูลติดต่อ
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <div className="font-semibold text-[#EAE8E1]">Email</div>
                    <div className="text-[#EAE8E1]/70">lunithic@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📱</div>
                  <div>
                    <div className="font-semibold text-[#EAE8E1]">โทรศัพท์</div>
                    <div className="text-[#EAE8E1]/70">09-8285-6421</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <div className="font-semibold text-[#EAE8E1]">ที่อยู่</div>
                    <div className="text-[#EAE8E1]/70">กรุงเทพมหานคร ประเทศไทย</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">⏰</div>
                  <div>
                    <div className="font-semibold text-[#EAE8E1]">เวลาทำการ</div>
                    <div className="text-[#EAE8E1]/70">จันทร์-ศุกร์ 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EAE8E1]/10 backdrop-blur-sm p-8 rounded-3xl border border-[#EAE8E1]/20">
              <h3 className="text-xl font-bold text-[#EAE8E1] mb-4">
                ติดตามเราได้ที่
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-[#EAE8E1] text-[#5C3A54] rounded-full flex items-center justify-center hover:bg-white transition font-bold">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-[#EAE8E1] text-[#5C3A54] rounded-full flex items-center justify-center hover:bg-white transition font-bold">
                  t
                </a>
                <a href="#" className="w-12 h-12 bg-[#EAE8E1] text-[#5C3A54] rounded-full flex items-center justify-center hover:bg-white transition font-bold">
                  ig
                </a>
                <a href="#" className="w-12 h-12 bg-[#EAE8E1] text-[#5C3A54] rounded-full flex items-center justify-center hover:bg-white transition font-bold">
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
