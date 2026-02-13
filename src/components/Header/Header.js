'use client';

import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '@/utils/assets';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/campuses', label: 'Colleges' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-100 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-100 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={getAssetUrl("Colleges logos/Gemini_Generated_Image_pq2so7pq2so7pq2s-removebg-preview.png")}
                alt="College Connect Logo"
                className="relative h-10 md:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:flex flex-col justify-center leading-none -ml-1">
              <span className="text-[8px] font-semibold text-gray-500 tracking-[0.1em] uppercase">
                Creating
              </span>
              <span className="text-[10px] font-extrabold text-primary-600 tracking-wide">
                Future Paths
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            <nav className="flex items-center gap-x-6 lg:gap-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative group py-2 text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-full h-[3px] rounded-full bg-primary-600 transform transition-all duration-300 ease-out ${isActive(link.path) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                  />
                </Link>
              ))}
            </nav>
            <button
              onClick={() => router.push('/apply')}
              className="group relative px-6 py-2.5 rounded-full bg-primary-600 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
              <div className="relative flex items-center gap-2">
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Apply Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors duration-200 px-4 py-3 rounded-lg flex items-center ${isActive(link.path)
                  ? 'text-primary-600 bg-primary-50 font-semibold'
                  : 'text-gray-700 font-medium hover:text-primary-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 mt-2">
              <button
                onClick={() => { router.push('/apply'); setIsMobileMenuOpen(false); }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Apply Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
