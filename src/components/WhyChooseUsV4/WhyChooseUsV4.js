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
    <section ref={sectionRef} className="py-20 px-6 relative z-10" style={{ background: '#B3E8FF' }}>
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
