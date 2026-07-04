export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lunithic',
    url: 'https://lunithic.com',
    logo: 'https://lunithic.com/icon.png',
    description:
      'บริษัทพัฒนาเว็บไซต์และระบบดิจิทัลครบวงจร ให้บริการออกแบบ UX/UI, Web Development, E-Commerce, CRM และ Custom Solutions ด้วยเทคโนโลยี Next.js, React, Node.js',
    email: 'lunithic@gmail.com',
    telephone: '09-8285-6421',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'กรุงเทพมหานคร',
      addressCountry: 'TH',
    },
    sameAs: [],
  };

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lunithic - Web Development Agency',
    description:
      'บริการพัฒนาเว็บไซต์ครบวงจร Landing Page, CRM, E-Commerce, UX/UI Design ในกรุงเทพมหานคร',
    url: 'https://lunithic.com',
    telephone: '09-8285-6421',
    email: 'lunithic@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'กรุงเทพมหานคร',
      addressCountry: 'TH',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '฿฿',
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lunithic',
    url: 'https://lunithic.com',
    description: 'บริการพัฒนาเว็บไซต์และระบบดิจิทัลครบวงจร',
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Lunithic รับทำเว็บไซต์ราคาเท่าไหร่?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ราคาขึ้นอยู่กับประเภทและขอบเขตของโปรเจกต์ Landing Page เริ่มต้นที่ 15,000-50,000 บาท, ระบบ E-Commerce เริ่มต้นที่ 50,000-200,000 บาท, ระบบ CRM เริ่มต้นที่ 80,000-300,000 บาท เราให้คำปรึกษาฟรีเพื่อประเมินราคาที่เหมาะสมกับความต้องการของคุณ',
        },
      },
      {
        '@type': 'Question',
        name: 'ใช้เวลาพัฒนาเว็บไซต์นานแค่ไหน?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ระยะเวลาขึ้นอยู่กับความซับซ้อนของโปรเจกต์ Landing Page ใช้เวลาประมาณ 2-4 สัปดาห์ เว็บไซต์ E-Commerce ใช้เวลา 6-12 สัปดาห์ ระบบ CRM หรือ Custom Solution ใช้เวลา 8-16 สัปดาห์ ทุกโปรเจกต์มีการอัพเดทความคืบหน้าให้ลูกค้าทราบเป็นระยะ',
        },
      },
      {
        '@type': 'Question',
        name: 'Lunithic ใช้เทคโนโลยีอะไรในการพัฒนา?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'เราใช้เทคโนโลยีทันสมัยที่เป็นมาตรฐานอุตสาหกรรม ได้แก่ Next.js, React, TypeScript สำหรับ Frontend และ Node.js, MongoDB, PostgreSQL สำหรับ Backend รวมถึง Figma สำหรับการออกแบบ UX/UI ทำให้เว็บไซต์โหลดเร็ว ปลอดภัย และรองรับการขยายตัวในอนาคต',
        },
      },
      {
        '@type': 'Question',
        name: 'รวม SEO ในการทำเว็บไซต์ด้วยไหม?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ทุกเว็บไซต์ที่เราพัฒนาจะรวม SEO พื้นฐานให้ทุกโปรเจกต์ ได้แก่ การตั้งค่า meta tags, sitemap, robots.txt, structured data (JSON-LD), page speed optimization และ mobile-first responsive design สำหรับ SEO ขั้นสูง เช่น content strategy และ link building สามารถเลือกเพิ่มเติมได้',
        },
      },
      {
        '@type': 'Question',
        name: 'มีบริการดูแลเว็บไซต์หลังเสร็จไหม?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'มีครับ เราให้บริการดูแลรักษาเว็บไซต์หลัง launch ได้แก่ แก้ไข bug, อัพเดทระบบ, สำรองข้อมูล, ดูแลความปลอดภัย และให้คำปรึกษาตลอดระยะสัญญา แพ็กเกจดูแลรักษาเริ่มต้นที่ 3,000 บาท/เดือน',
        },
      },
      {
        '@type': 'Question',
        name: 'ต้องเตรียมอะไรบ้างก่อนเริ่มโปรเจกต์?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'สิ่งที่ควรเตรียม ได้แก่ 1) ข้อมูลธุรกิจและบริการ 2) โลโก้และ branding guideline (ถ้ามี) 3) ตัวอย่างเว็บไซต์ที่ชอบ 4) เนื้อหาและรูปภาพที่ต้องการใส่ 5) งบประมาณและระยะเวลาที่คาดหวัง หากยังไม่พร้อม เราสามารถช่วยเตรียมข้อมูลเหล่านี้ในขั้นตอน Discovery ได้',
        },
      },
    ],
  };

  const services = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'บริการของ Lunithic',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'UX/UI Design',
        description:
          'บริการออกแบบ UX/UI Design สำหรับเว็บไซต์และแอปพลิเคชัน',
        provider: { '@type': 'Organization', name: 'Lunithic' },
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Web Development',
        description:
          'บริการพัฒนาเว็บไซต์ด้วย Next.js, React และเทคโนโลยีทันสมัย',
        provider: { '@type': 'Organization', name: 'Lunithic' },
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Landing Page',
        description:
          'บริการออกแบบและพัฒนา Landing Page ที่เน้น conversion',
        provider: { '@type': 'Organization', name: 'Lunithic' },
      },
      {
        '@type': 'Service',
        position: 4,
        name: 'CRM System',
        description:
          'บริการพัฒนาระบบ CRM สำหรับจัดการลูกค้าและทีมขาย',
        provider: { '@type': 'Organization', name: 'Lunithic' },
      },
      {
        '@type': 'Service',
        position: 5,
        name: 'E-Commerce',
        description:
          'บริการพัฒนาระบบ E-Commerce ร้านค้าออนไลน์ครบวงจร',
        provider: { '@type': 'Organization', name: 'Lunithic' },
      },
      {
        '@type': 'Service',
        position: 6,
        name: 'Custom Solutions',
        description:
          'บริการพัฒนาระบบ custom ตามความต้องการเฉพาะของธุรกิจ',
        provider: { '@type': 'Organization', name: 'Lunithic' },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSite, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(services, null, 2),
        }}
      />
    </>
  );
}
