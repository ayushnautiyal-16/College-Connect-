"use client";

import React from "react";
import Link from "next/link";
import { Phone, Info, MessageCircle } from "lucide-react";

export default function FloatingActions() {
    const phoneNumber = "917302985700"; // Based on footer info

    return (
        <>
            {/* 1️⃣ LEFT SIDE: Vertical Enquire Button */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
                <Link
                    href="/contact"
                    className="flex items-center justify-center bg-blue-600 text-white font-semibold py-6 px-3 rounded-r-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:translate-x-1 hover:shadow-blue-500/25"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    <span className="rotate-180 tracking-widest text-sm whitespace-nowrap">
                        ENQUIRE NOW
                    </span>
                </Link>
            </div>

            {/* 2️⃣ RIGHT SIDE: Floating Action Buttons */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">

                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300 hover:bg-green-600 group"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                </a>

                {/* Info Button */}
                <Link
                    href="/about"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:scale-110 transition-all duration-300 hover:text-blue-600 hover:border-blue-100 group"
                    aria-label="More Information"
                >
                    <Info className="w-6 h-6 md:w-7 md:h-7 group-hover:stroke-blue-600 transition-colors" />
                </Link>

                {/* Phone Call Button */}
                <a
                    href={`tel:+${phoneNumber}`}
                    className="w-12 h-12 md:w-14 md:h-14 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:scale-110 transition-all duration-300 hover:text-blue-600 hover:border-blue-100 group"
                    aria-label="Call Us"
                >
                    <Phone className="w-6 h-6 md:w-7 md:h-7 group-hover:stroke-blue-600 transition-colors" />
                </a>

            </div>
        </>
    );
}
