import Link from 'next/link';

const serviceLinks = [
  { label: 'Landing Page', href: '#services' },
  { label: 'CRM System', href: '#services' },
  { label: 'E-Commerce', href: '#services' },
  { label: 'UX/UI Design', href: '#services' },
  { label: 'Web Development', href: '#services' },
  { label: 'Custom Solutions', href: '#services' },
];

const companyLinks = [
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'ผลงาน', href: '#portfolio' },
  { label: 'ขั้นตอนการทำงาน', href: '#process' },
  { label: 'คำถามที่พบบ่อย', href: '#faq' },
  { label: 'ติดต่อเรา', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1026] border-t border-[#6366F1]/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8" aria-label="ส่วนท้ายเว็บไซต์">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent mb-4">
              LUNITHIC
            </h3>
            <p className="text-[#8B8DA3] leading-relaxed text-sm">
              สร้างสรรค์เว็บไซต์และระบบดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ ด้วยเทคโนโลยีระดับโลกและทีมผู้เชี่ยวชาญ
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#22D3EE] font-semibold mb-4">บริการ</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8B8DA3] hover:text-[#E8E6F0] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#22D3EE] font-semibold mb-4">บริษัท</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8B8DA3] hover:text-[#E8E6F0] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#22D3EE] font-semibold mb-4">ติดต่อ</h4>
            <ul className="space-y-2.5 text-[#8B8DA3] text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6366F1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                lunithic@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6366F1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                09-8285-6421
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#6366F1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                กรุงเทพมหานคร
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Copyright */}
        <div className="text-center text-[#8B8DA3]/60 text-sm">
          <p>&copy; 2025 Lunithic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
