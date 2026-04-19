const services = [
  {
    title: 'Landing Page',
    description: 'ออกแบบและพัฒนาหน้าเว็บที่ดึงดูดลูกค้า เพิ่มยอดขาย และสร้างความน่าเชื่อถือให้แบรนด์',
    icon: '🎨',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused']
  },
  {
    title: 'CRM System',
    description: 'ระบบบริหารจัดการลูกค้าสัมพันธ์ที่ช่วยเพิ่มประสิทธิภาพการทำงานและติดตามลูกค้า',
    icon: '📊',
    features: ['Customer Management', 'Sales Pipeline', 'Analytics', 'Automation']
  },
  {
    title: 'E-Commerce',
    description: 'สร้างร้านค้าออนไลน์ที่ครบครัน พร้อมระบบชำระเงินและจัดการสินค้าที่ง่ายดาย',
    icon: '🛒',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Friendly']
  },
  {
    title: 'UX/UI Design',
    description: 'ออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อที่สวยงาม ใช้งานง่าย และตอบโจทย์ผู้ใช้',
    icon: '✨',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design System']
  },
  {
    title: 'Web Development',
    description: 'พัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีทันสมัย รองรับการขยายตัวของธุรกิจ',
    icon: '💻',
    features: ['Modern Stack', 'Scalable', 'Secure', 'Maintainable']
  },
  {
    title: 'Custom Solutions',
    description: 'พัฒนาระบบตามความต้องการเฉพาะของธุรกิจ ตอบโจทย์ทุกความต้องการ',
    icon: '🔧',
    features: ['Tailored Solutions', 'Integration', 'Support', 'Training']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EAE8E1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#5C3A54] mb-4 tracking-tight">
            บริการของเรา
          </h2>
          <p className="text-xl text-[#5C3A54]/70 max-w-2xl mx-auto">
            เราให้บริการครบวงจรด้านการพัฒนาเว็บไซต์และระบบดิจิทัล
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-sm p-8 rounded-3xl hover:bg-[#5C3A54] transition-all duration-300 border border-[#5C3A54]/20 hover:border-[#5C3A54] hover:shadow-2xl hover:scale-105 transform"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#5C3A54] group-hover:text-[#EAE8E1] mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#5C3A54]/70 group-hover:text-[#EAE8E1]/80 mb-4 transition-colors">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#5C3A54] group-hover:text-[#EAE8E1] transition-colors">
                    <svg className="w-4 h-4 text-[#7A4E6F] group-hover:text-[#D4A5A5] mr-2 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
