import React from 'react';

/**
 * DarkPatternedSection - Premium dark section with gradient background
 * Use for: College overview header, CTAs, "Ready to Apply", "Why Choose", Journey blocks
 * DO NOT USE for: Tables, long forms, dense content
 * 
 * @param {ReactNode} children - Content to display in the section
 * @param {string} className - Additional CSS classes
 * @param {boolean} withVignette - Add soft vignette effect (default: true)
 */
function DarkPatternedSection({ children, className = '', withVignette = true }) {
    return (
        <section className={`relative py-16 md:py-20 overflow-hidden ${className}`}>
            {/* Premium Gradient Background - Indigo to Navy */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-primary to-dark-secondary">

                {/* Subtle Plus/Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="plus-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 20 40 M 0 20 L 40 20" stroke="#4F46E5" strokeWidth="0.5" opacity="0.5" />
                            <circle cx="20" cy="20" r="1" fill="#6366F1" opacity="0.6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#plus-pattern)" />
                </svg>

                {/* Dotted Grid Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#4F46E5" />
                            <circle cx="15" cy="15" r="0.8" fill="#6366F1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-grid)" />
                </svg>

                {/* Soft Gradient Orbs for Depth */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-primary/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-secondary/12 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/8 to-purple-600/8 rounded-full blur-3xl"></div>

                {/* Diagonal Light Rays (Subtle) */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diagonal-rays" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="#4F46E5" strokeWidth="0.3" />
                            <line x1="50" y1="0" x2="100" y2="50" stroke="#6366F1" strokeWidth="0.2" />
                            <line x1="0" y1="50" x2="50" y2="100" stroke="#6366F1" strokeWidth="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonal-rays)" />
                </svg>

                {/* Vignette Effect for Elegance */}
                {withVignette && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                )}

                {/* Top Subtle Glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
            </div>

            {/* Content - Always use white/light text */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}

export default DarkPatternedSection;
