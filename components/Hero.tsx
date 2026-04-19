export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5C3A54] via-[#7A4E6F] to-[#3D2438]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EAE8E1] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A5A5] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#EAE8E1] mb-6 tracking-tight">
            สร้างสรรค์เว็บไซต์
            <br />
            <span className="bg-gradient-to-r from-[#EAE8E1] to-[#D4A5A5] bg-clip-text text-transparent">
              ยุคดิจิทัลอนาคต
            </span>
          </h1>
          <p className="text-xl text-[#EAE8E1]/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            เราเป็นทีมผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์ ออกแบบ UX/UI และพัฒนาระบบที่ช่วยให้ธุรกิจของคุณก้าวสู่อนาคต
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#EAE8E1] text-[#5C3A54] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition shadow-2xl hover:scale-105 transform"
            >
              เริ่มต้นโปรเจกต์
            </a>
            <a
              href="#portfolio"
              className="bg-transparent text-[#EAE8E1] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#EAE8E1]/10 transition border-2 border-[#EAE8E1]"
            >
              ดูผลงาน
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
