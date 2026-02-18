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
            className="flex items-center gap-3 hover:opacity-100 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-100 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={getAssetUrl("Colleges logos/Gemini_Generated_Image_pq2so7pq2so7pq2s-removebg-preview.png")}
                alt="College Connect Logo"
                className="relative h-14 md:h-16 w-auto object-contain transform scale-110 origin-left group-hover:scale-120 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:flex items-center space-x-1.5 leading-none">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                Creating
              </span>
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
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
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95
                         bg-white text-blue-600 ring-2 ring-blue-600 shadow-md 
                         hover:bg-blue-600 hover:text-white hover:ring-blue-500 hover:shadow-blue-500/30"
            >
              Apply Now
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
                className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-95
                           bg-white text-blue-600 ring-2 ring-blue-600 
                           hover:bg-blue-600 hover:text-white hover:shadow-blue-500/20"
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
