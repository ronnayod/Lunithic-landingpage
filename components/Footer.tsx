export default function Footer() {
  return (
    <footer className="bg-[#3D2438] text-[#EAE8E1] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#5C3A54]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wider">LUNITHIC</h3>
            <p className="text-[#EAE8E1]/70">
              สร้างสรรค์เว็บไซต์และระบบดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4A5A5]">บริการ</h4>
            <ul className="space-y-2 text-[#EAE8E1]/70">
              <li><a href="#services" className="hover:text-[#EAE8E1] transition">Landing Page</a></li>
              <li><a href="#services" className="hover:text-[#EAE8E1] transition">CRM System</a></li>
              <li><a href="#services" className="hover:text-[#EAE8E1] transition">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-[#EAE8E1] transition">UX/UI Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4A5A5]">บริษัท</h4>
            <ul className="space-y-2 text-[#EAE8E1]/70">
              <li><a href="#about" className="hover:text-[#EAE8E1] transition">เกี่ยวกับเรา</a></li>
              <li><a href="#portfolio" className="hover:text-[#EAE8E1] transition">ผลงาน</a></li>
              <li><a href="#contact" className="hover:text-[#EAE8E1] transition">ติดต่อเรา</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4A5A5]">ติดต่อ</h4>
            <ul className="space-y-2 text-[#EAE8E1]/70">
              <li>Email: lunithic@gmail.com</li>
              <li>Tel: 09-8285-6421</li>
              <li>กรุงเทพมหานคร</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5C3A54] pt-8 text-center text-[#EAE8E1]/60">
          <p>&copy; 2024 Lunithic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
