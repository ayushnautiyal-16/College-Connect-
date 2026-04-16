"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FloatingSideButtons() {
    const phoneNumber = "917302985700";
    const displayPhone = "+91 73029 85700";
    const emailAddress = "collegeconnect47@gmail.com";

    const [activeTooltip, setActiveTooltip] = useState(null);

    const handleTouch = (id) => {
        setActiveTooltip(prev => (prev === id ? null : id));
    };

    const tooltipBase = "absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap text-sm font-medium pointer-events-none transition-all duration-300 border";

    return (
        <>
            {/* RIGHT SIDE: Small Floating Circular Buttons */}
            <div className="fixed right-3 top-[40%] -translate-y-1/2 flex flex-col gap-4 z-50 items-end">

                {/* WhatsApp Button (Green Filled) */}
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-11 h-11 rounded-full flex items-center justify-center bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 transform"
                    aria-label="Chat on WhatsApp"
                    onClick={(e) => {
                        if (activeTooltip !== 'whatsapp') {
                            e.preventDefault();
                            handleTouch('whatsapp');
                        }
                    }}
                    onMouseEnter={() => setActiveTooltip('whatsapp')}
                    onMouseLeave={() => setActiveTooltip(null)}
                >
                    <span className={`${tooltipBase} bg-white text-green-600 border-green-100 ${activeTooltip === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                        Chat on WhatsApp
                    </span>
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                </a>

                {/* Mail Button (Red Filled) */}
                <a
                    href={`mailto:${emailAddress}`}
                    className="relative w-11 h-11 rounded-full flex items-center justify-center bg-red-500 text-white shadow-lg shadow-red-500/30 hover:scale-110 hover:shadow-red-500/50 transition-all duration-300 transform"
                    aria-label="Email Us"
                    onClick={(e) => {
                        if (activeTooltip !== 'email') {
                            e.preventDefault();
                            handleTouch('email');
                        }
                    }}
                    onMouseEnter={() => setActiveTooltip('email')}
                    onMouseLeave={() => setActiveTooltip(null)}
                >
                    <span className={`${tooltipBase} bg-white text-red-600 border-red-100 ${activeTooltip === 'email' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                        {emailAddress}
                    </span>
                    <Mail className="w-5 h-5" />
                </a>

                {/* Phone Call Button (Blue Filled with Glow) */}
                <a
                    href={`tel:+${phoneNumber}`}
                    className="relative w-11 h-11 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-lg shadow-blue-600/40 hover:scale-110 hover:shadow-blue-600/60 transition-all duration-300 transform animate-pulse-slow"
                    aria-label="Call Us"
                    onClick={(e) => {
                        if (activeTooltip !== 'phone') {
                            e.preventDefault();
                            handleTouch('phone');
                        }
                    }}
                    onMouseEnter={() => setActiveTooltip('phone')}
                    onMouseLeave={() => setActiveTooltip(null)}
                >
                    <span className={`${tooltipBase} bg-white text-blue-600 border-blue-100 ${activeTooltip === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
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
