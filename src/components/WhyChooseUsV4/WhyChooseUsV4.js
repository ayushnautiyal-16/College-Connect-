// components/WhyChooseUsV4.js

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getAssetUrl } from "@/utils/assets";

/* ── SVG Badge Icons ── */
const TargetIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
    <path d="M1 21h22" />
    <path d="M9 7h1m-1 4h1m4-4h1m-1 4h1" />
    <path d="M9 21v-5a1 1 0 011-1h4a1 1 0 011 1v5" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const cards = [
  {
    stat: "1500+",
    label: "Students Placed Successfully",
    icon: TargetIcon,
    image: getAssetUrl("convocation.jpg"),
  },
  {
    stat: "25+",
    label: "Tie-ups with Top Private Colleges",
    icon: BuildingIcon,
    image: getAssetUrl("Dehradun Top Colleges.png"),
  },
  {
    stat: "98%",
    label: "Admission Success Rate",
    icon: ChartIcon,
    image: getAssetUrl("imageschool.jpg"),
  },
  {
    stat: "Provides",
    label: "End-to-End Guidance",
    icon: HandshakeIcon,
    image: getAssetUrl("guidence.jpg"),
  },
];

export default function WhyChooseUsV4() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative z-10 overflow-hidden" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 30%, #c7d2fe 70%, #e0e7ff 100%)' }}>
      {/* ── SVG Background Decorations ── */}

      {/* Top Wave Separator */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: '80px' }}>
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z" fill="#f0f5ff" />
      </svg>

      {/* Bottom Wave Separator */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: '80px' }}>
        <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,60 1440,40 L1440,80 L0,80 Z" fill="#f0f5ff" />
      </svg>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-300/40 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-blue-300/40 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-200/20 to-indigo-200/20 rounded-full blur-3xl" />

      {/* Dot Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="whyChooseDots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#4f46e5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#whyChooseDots)" />
      </svg>

      {/* Decorative Geometric SVGs */}
      {/* Top-left circle ring */}
      <svg className="absolute -top-8 -left-8 w-40 h-40 opacity-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" strokeWidth="2" strokeDasharray="8 6" />
        <circle cx="100" cy="100" r="50" strokeWidth="1.5" strokeDasharray="4 8" />
      </svg>

      {/* Bottom-right hexagon */}
      <svg className="absolute -bottom-6 -right-6 w-48 h-48 opacity-[0.06] text-purple-600" fill="currentColor" viewBox="0 0 200 200">
        <polygon points="100,10 180,50 180,130 100,170 20,130 20,50" />
      </svg>

      {/* Floating diamond - right side */}
      <svg className="absolute top-20 right-16 w-12 h-12 opacity-10 text-indigo-500 animate-bounce" style={{ animationDuration: '4s' }} viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" />
      </svg>

      {/* Small floating cross - left side */}
      <svg className="absolute bottom-32 left-20 w-8 h-8 opacity-10 text-blue-500 animate-spin" style={{ animationDuration: '20s' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
      <div className="max-w-6xl mx-auto">

        {/* Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase border border-indigo-200">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
          Why Students Trust Us for{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Dehradun Admissions</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-14">
          We simplify the complex admission process into a smooth journey. With
          deep connections in top private colleges and universities in Dehradun,
          we help students secure the right seat based on their career goals,
          budget, and eligibility.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <div
                key={i}
                className={`
                  relative rounded-2xl overflow-hidden h-72 md:h-80 group cursor-pointer
                  transition-all duration-700
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* ── Background Image ── */}
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* ── Dark gradient overlay ── */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/30 to-transparent" />

                {/* ── Card Content (bottom) ── */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  {/* Stat + Label */}
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-white leading-none mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {card.stat}
                    </p>
                    <p className="text-sm text-gray-300 leading-snug max-w-[160px]">
                      {card.label}
                    </p>
                  </div>

                  {/* Rose Badge with SVG Icon */}
                  <div className="bg-indigo-600 rounded-full w-9 h-9 flex items-center justify-center shadow-lg shadow-indigo-600/30 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
