'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const statsData = [
  { target: 50, suffix: '+', label: 'โปรเจกต์สำเร็จ' },
  { target: 30, suffix: '+', label: 'ลูกค้าพึงพอใจ' },
  { target: 5, suffix: '+', label: 'ปีประสบการณ์' },
  { target: 100, suffix: '%', label: 'ความมุ่งมั่น' },
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB',
  'PostgreSQL', 'Tailwind CSS', 'Figma', 'Vercel', 'Git',
];

const teamRoles = [
  { role: 'UX/UI Designer', description: 'ออกแบบประสบการณ์ผู้ใช้ที่น่าประทับใจและใช้งานง่าย', icon: '🎨' },
  { role: 'Frontend Developer', description: 'สร้างส่วนติดต่อที่สวยงาม โหลดเร็ว และตอบสนองทุกหน้าจอ', icon: '💻' },
  { role: 'Backend Developer', description: 'พัฒนาระบบหลังบ้านที่มั่นคง ปลอดภัย และรองรับการขยายตัว', icon: '⚙️' },
  { role: 'Project Manager', description: 'บริหารโปรเจกต์ให้สำเร็จตรงเวลาและตรงตามเป้าหมาย', icon: '📋' },
];

function AnimatedCounter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (entry.target.id === 'stats-section') {
          setCounterStarted(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    });

    const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-children, #stats-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1026]"
      aria-label="เกี่ยวกับเรา"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#E8E6F0] mb-4 tracking-tight">
            ทำไมต้องเลือก <span className="gradient-text">Lunithic</span>
          </h2>
          <p className="text-lg text-[#8B8DA3] max-w-2xl mx-auto leading-relaxed">
            เราคือทีมผู้เชี่ยวชาญที่พร้อมสร้างสรรค์ผลงานดิจิทัลที่ยอดเยี่ยมให้ธุรกิจของคุณ
          </p>
        </div>

        {/* Part 1: Stats with animated counters */}
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 reveal">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 text-center group hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]"
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} started={counterStarted} />
              </div>
              <div className="text-[#8B8DA3] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: About text */}
        <div className="max-w-4xl mx-auto mb-20 reveal">
          <div className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-8 sm:p-10">
            <p className="text-[#E8E6F0]/90 text-base sm:text-lg leading-relaxed">
              Lunithic คือบริษัทพัฒนาเว็บไซต์และระบบดิจิทัลที่ก่อตั้งขึ้นด้วยความมุ่งมั่นในการสร้างผลงานคุณภาพสูง
              เราเชื่อว่าเว็บไซต์ที่ดีไม่ใช่แค่สวย แต่ต้อง<span className="text-[#22D3EE] font-semibold">สร้างผลลัพธ์ทางธุรกิจได้จริง</span> ทีมของเราประกอบด้วยนักออกแบบ
              นักพัฒนา และนักวางกลยุทธ์ที่ทำงานร่วมกันเพื่อส่งมอบผลงานที่เหนือความคาดหมาย
            </p>
          </div>
        </div>

        {/* Part 3: Tech Stack */}
        <div className="mb-20 reveal">
          <h3 className="text-2xl font-bold text-[#E8E6F0] text-center mb-8">
            เทคโนโลยีที่เราใช้
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-xl px-5 py-3 text-[#E8E6F0] text-sm font-medium hover:scale-105 hover:border-[#6366F1]/50 transition-all duration-300 cursor-default hover:shadow-[0_4px_16px_rgba(99,102,241,0.15)]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Part 4: Team roles */}
        <div>
          <h3 className="text-2xl font-bold text-[#E8E6F0] text-center mb-8 reveal">
            ทีมงานของเรา
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {teamRoles.map((member, index) => (
              <div
                key={index}
                className="bg-[#1A1F3D]/60 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl overflow-hidden hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] group"
              >
                {/* Gradient top border */}
                <div className="h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">{member.icon}</div>
                  <h4 className="text-lg font-bold text-[#E8E6F0] mb-2 group-hover:text-[#22D3EE] transition-colors duration-300">
                    {member.role}
                  </h4>
                  <p className="text-[#8B8DA3] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
