export default function TrustBar() {
  const companies = [
    "TechVision",
    "BangkokRetail",
    "SiamDigital",
    "ThaiCommerce",
    "NextGen Solutions",
    "CloudFirst",
  ];

  return (
    <section
      aria-label="ธุรกิจที่ไว้วางใจเรา"
      className="relative bg-[#0B1026] border-t border-b border-[#6366F1]/10 py-8 overflow-hidden"
    >

      <p className="text-center text-sm text-[#8B8DA3] mb-6 tracking-wide">
        ได้รับความไว้วางใจจาก 30+ ธุรกิจทั่วประเทศ
      </p>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1026] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1026] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex w-max items-center gap-16">
          {/* First set */}
          {companies.map((company, i) => (
            <span
              key={`a-${i}`}
              className="text-[#8B8DA3]/70 text-lg font-semibold tracking-wider whitespace-nowrap select-none transition-colors duration-300 hover:text-[#E8E6F0]"
            >
              {company}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, i) => (
            <span
              key={`b-${i}`}
              className="text-[#8B8DA3]/70 text-lg font-semibold tracking-wider whitespace-nowrap select-none transition-colors duration-300 hover:text-[#E8E6F0]"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
