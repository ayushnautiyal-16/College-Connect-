'use client';

import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: 'Is counselling really free?',
    answer:
      'Yes, initial counselling is 100% free. Our expert counsellors will help you understand your options, compare colleges, and plan your admission journey — without any upfront cost.',
  },
  {
    question: 'Do you guarantee admission?',
    answer:
      'We guide you to colleges where your chances are highest based on your profile, budget, and eligibility. With a 98% success rate, we ensure the best possible outcome for every student.',
  },
  {
    question: 'Are there any hidden charges?',
    answer:
      'No. Full transparency is our policy. Every fee is communicated upfront before you make any commitment. What you see is exactly what you pay — zero surprises.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`
        group relative rounded-2xl border transition-all duration-500 overflow-hidden
        ${isOpen
          ? 'bg-white border-indigo-200 shadow-lg shadow-indigo-100/50'
          : 'bg-white/60 border-gray-200/60 hover:bg-white hover:border-gray-300 hover:shadow-md'
        }
      `}
    >
      {/* Accent bar on left when open */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500"
        style={{
          background: isOpen
            ? 'linear-gradient(to bottom, #6366f1, #8b5cf6)'
            : 'transparent',
        }}
      />

      {/* Question button */}
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          {/* Number badge */}
          <span
            className={`
              flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-500
              ${isOpen
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-gray-100 text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-500'
              }
            `}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
              isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
            }`}
          >
            {faq.question}
          </span>
        </div>

        {/* Toggle icon */}
        <div
          className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
            ${isOpen
              ? 'bg-indigo-100 rotate-180'
              : 'bg-gray-100 group-hover:bg-indigo-50'
            }
          `}
        >
          <svg
            className={`w-4 h-4 transition-colors duration-300 ${
              isOpen ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="px-6 pb-5">
          <div className="pl-12">
            <p className="text-sm text-gray-500 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
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
    <section ref={sectionRef} className="py-16 md:py-20 relative z-10">
      <div className="max-w-2xl mx-auto px-4 md:px-8">

        {/* Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase border border-indigo-200">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
          Got{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Questions?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
          Everything you need to know about our admission counselling process.
        </p>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <FAQItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-10 text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-gray-500 text-sm mb-3">
            Still have questions?
          </p>
          <a
            href="tel:+917302985700"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors group relative overflow-hidden"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="relative flex items-center h-5 overflow-hidden">
               {/* Default Text */}
               <span className="transition-transform duration-300 transform group-hover:-translate-y-full group-active:-translate-y-full flex items-center absolute inset-0">
                 Talk to our counsellor
               </span>
               {/* Phone Number on Hover */}
               <span className="transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 flex items-center absolute inset-0 font-bold tracking-wide">
                 +91 7302985700
               </span>
               {/* Invisible spacer to set width dynamically based on longest text */}
               <span className="opacity-0 pointer-events-none invisible whitespace-nowrap">Talk to our counsellor</span>
            </span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
