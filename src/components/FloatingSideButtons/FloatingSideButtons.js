"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FloatingSideButtons() {
    const phoneNumber = "917302985700";
    const displayPhone = "+91 73029 85700";
    const emailAddress = "collegeconnect47@gmail.com";

    // Tooltip base classes with gap bridge
    const tooltipClasses = "absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap text-sm font-medium after:content-[''] after:absolute after:top-0 after:-right-4 after:w-4 after:h-full";

    return (
        <>
            {/* RIGHT SIDE: Small Floating Circular Buttons */}
            <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 items-end">

                {/* WhatsApp Button (Green Filled) */}
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-11 h-11 rounded-full flex items-center justify-center bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 transform group"
                    aria-label="Chat on WhatsApp"
                >
                    {/* Tooltip */}
                    <span className={`${tooltipClasses} bg-white text-green-600 border border-green-100 hover:bg-green-50`}>
                        Chat on WhatsApp
                    </span>
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                </a>

                {/* Mail Button (Red Filled - Replaces Info) */}
                <a
                    href={`mailto:${emailAddress}`}
                    className="relative w-11 h-11 rounded-full flex items-center justify-center bg-red-500 text-white shadow-lg shadow-red-500/30 hover:scale-110 hover:shadow-red-500/50 transition-all duration-300 transform group"
                    aria-label="Email Us"
                >
                    {/* Tooltip */}
                    <span className={`${tooltipClasses} bg-white text-red-600 border border-red-100 hover:bg-red-50`}>
                        {emailAddress}
                    </span>
                    <Mail className="w-5 h-5" />
                </a>

                {/* Phone Call Button (Blue Filled with Glow) */}
                <a
                    href={`tel:+${phoneNumber}`}
                    className="relative w-11 h-11 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-lg shadow-blue-600/40 hover:scale-110 hover:shadow-blue-600/60 transition-all duration-300 transform group animate-pulse-slow"
                    aria-label="Call Us"
                >
                    {/* Tooltip */}
                    <span className={`${tooltipClasses} bg-white text-blue-600 border border-blue-100 hover:bg-blue-50`}>
                        {displayPhone}
                    </span>
                    <Phone className="w-5 h-5 fill-white/20" />
                </a>

            </div>

            <style jsx>{`
                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.95; transform: scale(1.05); }
                }
            `}</style>
        </>
    );
}
