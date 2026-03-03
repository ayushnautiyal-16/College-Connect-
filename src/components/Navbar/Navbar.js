'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/campuses', label: 'Colleges' },
        { path: '/about', label: 'About Us' },
        { path: '/blog', label: 'Blog' },
    ];

    const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 px-4 md:px-6 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center" style={{ minHeight: '150px' }}>
                    <img
                        src="/logo.png"
                        alt="College Connect Logo"
                        style={{ height: '140px', width: 'auto', maxWidth: '450px', objectFit: 'contain', display: 'block' }}
                        className="drop-shadow-md"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 lg:gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 outline-none
                                ${isActive(link.path)
                                    ? 'text-blue-600 bg-blue-50 ring-2 ring-blue-500/30'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Apply Now Button */}
                    <button
                        onClick={() => router.push('/apply')}
                        className="ml-4 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.97]"
                    >
                        Apply Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 bg-white ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}
            >
                <div className="flex flex-col space-y-2 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 mx-2
                                ${isActive(link.path)
                                    ? 'text-blue-600 bg-blue-50 ring-2 ring-blue-500/30'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="px-2 pt-2">
                        <button
                            onClick={() => { router.push('/apply'); setIsMobileMenuOpen(false); }}
                            className="w-full px-4 py-3 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-center shadow-md"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
