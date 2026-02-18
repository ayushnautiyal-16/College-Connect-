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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1b2b] border-b border-white/10 px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center" style={{ minHeight: '150px' }}>
                    <img
                        src="/logo.png"
                        alt="College Connect Logo"
                        style={{ height: '140px', width: 'auto', maxWidth: '450px', objectFit: 'contain', display: 'block' }}
                        className="drop-shadow-2xl"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 lg:gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 outline-none
                                ${isActive(link.path)
                                    ? 'text-white ring-2 ring-blue-500 bg-white/5'
                                    : 'text-gray-400 hover:text-white hover:ring-2 hover:ring-blue-500 hover:ring-offset-0 hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Subscribe Button */}
                    <button
                        onClick={() => router.push('/apply')}
                        className="ml-4 px-5 py-2 rounded-lg text-sm font-medium text-white bg-white/5 ring-2 ring-blue-500 hover:ring-blue-400 hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse-slow"
                    >
                        Apply Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
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
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 bg-[#0b1b2b] ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}
            >
                <div className="flex flex-col space-y-2 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 mx-2
                                ${isActive(link.path)
                                    ? 'text-white ring-2 ring-blue-500 bg-white/5'
                                    : 'text-gray-400 hover:text-white hover:ring-2 hover:ring-blue-500 hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="px-2 pt-2">
                        <button
                            onClick={() => { router.push('/apply'); setIsMobileMenuOpen(false); }}
                            className="w-full px-4 py-3 rounded-lg text-sm font-medium text-white bg-white/5 ring-2 ring-blue-500 hover:ring-blue-400 hover:bg-white/10 transition-all duration-300 text-center"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
