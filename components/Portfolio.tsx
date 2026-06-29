const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description: 'ระบบร้านค้าออนไลน์ขนาดใหญ่ที่รองรับสินค้ากว่า 10,000 รายการ',
    image: '🛍️',
    link: 'https://6a4118e252fddc88a192423b--reliable-sable-25d034.netlify.app/'
  },
  {
    title: 'Web Management',
    category: 'Management',
    description: 'ระบบจัดการเว็บไซต์และข้อมูลหลังบ้านสำหรับองค์กร',
    image: '🖥️',
    link: 'https://lunithicmanagement.vercel.app/'
  },
  {
    title: 'CRM Dashboard',
    category: 'CRM System',
    description: 'ระบบบริหารจัดการลูกค้าสำหรับบริษัทขนาดกลาง',
    image: '📈'
  },
  {
    title: 'Booking System',
    category: 'Custom Solution',
    description: 'ระบบจองคิวออนไลน์สำหรับธุรกิจบริการ',
    image: '📅'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#5C3A54] to-[#3D2438]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#EAE8E1] mb-4 tracking-tight">
            ผลงานของเรา
          </h2>
          <p className="text-xl text-[#EAE8E1]/70 max-w-2xl mx-auto">
            ตัวอย่างโปรเจกต์ที่เราได้พัฒนาให้กับลูกค้า
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                <div className="bg-gradient-to-br from-[#7A4E6F] to-[#5C3A54] h-48 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#D4A5A5] font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#EAE8E1] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#EAE8E1]/70 mb-4">
                    {project.description}
                  </p>
                </div>
              </>
            );

            const className = "group bg-[#EAE8E1]/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-[#EAE8E1]/20 transition-all duration-300 border border-[#EAE8E1]/20 hover:scale-105 transform block cursor-pointer";

            if (project.link) {
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={project.title} className={className.replace(" cursor-pointer", "")}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
