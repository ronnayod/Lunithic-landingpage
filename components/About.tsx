const stats = [
  { number: '50+', label: 'โปรเจกต์สำเร็จ' },
  { number: '30+', label: 'ลูกค้าพึงพอใจ' },
  { number: '5+', label: 'ปีประสบการณ์' },
  { number: '100%', label: 'ความมุ่งมั่น' }
];

const team = [
  { role: 'UX/UI Designer', description: 'ออกแบบประสบการณ์ที่น่าประทับใจ' },
  { role: 'Frontend Developer', description: 'สร้างส่วนติดต่อที่สวยงามและใช้งานง่าย' },
  { role: 'Backend Developer', description: 'พัฒนาระบบที่มั่นคงและปลอดภัย' },
  { role: 'Project Manager', description: 'บริหารโปรเจกต์ให้สำเร็จตรงเวลา' }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EAE8E1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#5C3A54] mb-4 tracking-tight">
            เกี่ยวกับเรา
          </h2>
          <p className="text-xl text-[#5C3A54]/70 max-w-2xl mx-auto">
            เราคือทีมผู้เชี่ยวชาญที่พร้อมสร้างสรรค์ผลงานดิจิทัลที่ยอดเยี่ยม
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl font-bold text-[#5C3A54] mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-[#5C3A54]/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5C3A54] to-[#7A4E6F] p-6 rounded-2xl text-center hover:scale-105 transition-transform shadow-lg"
            >
              <div className="text-4xl mb-3">👨‍💻</div>
              <h3 className="text-lg font-bold text-[#EAE8E1] mb-2">
                {member.role}
              </h3>
              <p className="text-sm text-[#EAE8E1]/80">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
