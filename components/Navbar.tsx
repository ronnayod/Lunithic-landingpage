'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'บริการของเรา', href: '#services' },
  { label: 'ผลงาน', href: '#portfolio' },
  { label: 'ขั้นตอน', href: '#process' },
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'คำถาม', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="เมนูหลัก"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1026]/95 backdrop-blur-xl border-b border-[#6366F1]/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent"
              aria-label="Lunithic หน้าแรก"
            >
              LUNITHIC
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[#E8E6F0]/80 hover:text-[#22D3EE] transition-colors duration-300 font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#6366F1] after:to-[#22D3EE] after:transition-all after:duration-300 hover:after:w-full"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-[#4992F0] to-[#4992F0] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.5)] hover:scale-105"
              aria-label="ติดต่อเรา"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E8E6F0] hover:text-[#22D3EE] transition-colors duration-300 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#1A1F3D]/90 backdrop-blur-xl border-t border-[#6366F1]/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-[#E8E6F0]/80 hover:text-[#22D3EE] hover:bg-[#6366F1]/10 rounded-xl transition-all duration-300 font-medium"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-3 text-center bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.5)]"
            aria-label="ติดต่อเรา"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </nav>
  );
}
