'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#EAE8E1]/95 backdrop-blur-md z-50 border-b border-[#5C3A54]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#5C3A54] tracking-wider">
              LUNITHIC
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#services" className="text-[#5C3A54] hover:text-[#7A4E6F] transition font-medium">
                บริการของเรา
              </Link>
              <Link href="#portfolio" className="text-[#5C3A54] hover:text-[#7A4E6F] transition font-medium">
                ผลงาน
              </Link>
              <Link href="#about" className="text-[#5C3A54] hover:text-[#7A4E6F] transition font-medium">
                เกี่ยวกับเรา
              </Link>
              <Link href="#contact" className="bg-[#5C3A54] text-[#EAE8E1] px-6 py-2 rounded-full hover:bg-[#7A4E6F] transition shadow-lg">
                ติดต่อเรา
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5C3A54] hover:text-[#7A4E6F]"
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#EAE8E1]">
            <Link href="#services" className="block px-3 py-2 text-[#5C3A54] hover:text-[#7A4E6F]">
              บริการของเรา
            </Link>
            <Link href="#portfolio" className="block px-3 py-2 text-[#5C3A54] hover:text-[#7A4E6F]">
              ผลงาน
            </Link>
            <Link href="#about" className="block px-3 py-2 text-[#5C3A54] hover:text-[#7A4E6F]">
              เกี่ยวกับเรา
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-[#5C3A54] font-semibold">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
