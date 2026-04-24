'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ────────────────────── step data ────────────────────── */
const steps = [
    {
        label: 'Start Application',
        description: 'Fill out a quick form with your basic details, preferred course, and budget. It takes less than 2 minutes.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        ),
        active: true,
    },
    {
        label: 'Counsellor Reach Out',
        description: 'Our expert counsellor calls you within 24 hours to understand your goals, budget, and career aspirations.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        ),
        active: true,
    },
    {
        label: 'Choose Best College',
        description: 'Compare handpicked colleges based on fees, placements, rankings, and courses — all tailored just for you.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        ),
        active: true,
    },
    {
        label: 'Start Your Dream College Journey',
        description: 'We handle the paperwork, documents, and enrollment process — you just show up on day one!',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        ),
        active: true,
    },
];

/* ────────── gradient color stops matching indigo→violet→teal ────────── */
const gradientStops = [
    { offset: '0%', color: '#818cf8' },    // indigo-400
    { offset: '25%', color: '#6366f1' },   // indigo-500
    { offset: '50%', color: '#8b5cf6' },   // violet-500
    { offset: '75%', color: '#6d28d9' },   // violet-700
    { offset: '100%', color: '#14b8a6' },  // teal-500
];

/* ────────── node positions (x) on a 960-wide canvas ────────── */
const NODE_Y_BASE = 100;
const SVG_W = 960;
const SVG_H = 220;
const NODE_RADIUS = 28;

/* node color at position */
const nodeColors = ['#818cf8', '#6366f1', '#8b5cf6', '#14b8a6'];

function getNodeX(i) {
    const padding = 60;
    const usable = SVG_W - padding * 2;
    return padding + (usable / (steps.length - 1)) * i;
}

function getNodeY(i) {
    return NODE_Y_BASE + Math.sin((i / (steps.length - 1)) * Math.PI * 2) * 28;
}

/* build a smooth bezier curve connecting all nodes */
function buildCurvePath() {
    const pts = steps.map((_, i) => ({ x: getNodeX(i), y: getNodeY(i) }));
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const cpx1 = pts[i].x + (pts[i + 1].x - pts[i].x) * 0.45;
        const cpy1 = pts[i].y;
        const cpx2 = pts[i + 1].x - (pts[i + 1].x - pts[i].x) * 0.45;
        const cpy2 = pts[i + 1].y;
        d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${pts[i + 1].x} ${pts[i + 1].y}`;
    }
    return d;
}

/* ══════════════════════ COMPONENT ══════════════════════ */
export default function ApplyJourneyIllustration() {
    const [visible, setVisible] = useState(false);
    const [hoveredStep, setHoveredStep] = useState(null);
    const ref = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    /* Convert SVG coordinates to percentage positions for HTML overlay */
    const getNodePercent = useCallback((i) => {
        const cx = getNodeX(i);
        const cy = getNodeY(i);
        return {
            left: `${(cx / SVG_W) * 100}%`,
            top: `${(cy / SVG_H) * 100}%`,
        };
    }, []);

    const curvePath = buildCurvePath();

    return (
        <div
            ref={ref}
            className={`w-full max-w-5xl mx-auto px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Wrapper for SVG + HTML overlay */}
            <div ref={containerRef} className="relative">
                <svg
                    viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        {/* main gradient */}
                        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            {gradientStops.map((s) => (
                                <stop key={s.offset} offset={s.offset} stopColor={s.color} />
                            ))}
                        </linearGradient>

                        {/* glow filter */}
                        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* subtle drop shadow for active nodes */}
                        <filter id="dropShadow" x="-30%" y="-30%" width="160%" height="160%">
                            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#6366f1" floodOpacity="0.25" />
                        </filter>
                    </defs>

                    {/* ── decorative dots along the path ── */}
                    {Array.from({ length: 18 }).map((_, i) => {
                        const t = (i + 1) / 19;
                        const x = 60 + t * (SVG_W - 120);
                        const y = NODE_Y_BASE + Math.sin(t * Math.PI * 2) * 28;
                        return (
                            <circle
                                key={`dec-${i}`}
                                cx={x}
                                cy={y + (i % 2 === 0 ? -8 : 8)}
                                r={1.2 + (i % 3) * 0.4}
                                fill="url(#pathGrad)"
                                opacity={0.2 + (i % 4) * 0.05}
                            />
                        );
                    })}

                    {/* ── motion dashes ── */}
                    {[0.12, 0.35, 0.58, 0.82].map((t, i) => {
                        const x = 60 + t * (SVG_W - 120);
                        const y = NODE_Y_BASE + Math.sin(t * Math.PI * 2) * 28;
                        const angle = Math.cos(t * Math.PI * 2) * 28;
                        return (
                            <g key={`motion-${i}`} opacity="0.15">
                                <line
                                    x1={x - 6} y1={y + angle * 0.3 - 14}
                                    x2={x + 6} y2={y + angle * 0.3 - 14}
                                    stroke="url(#pathGrad)" strokeWidth="1.5" strokeLinecap="round"
                                />
                                <line
                                    x1={x - 4} y1={y + angle * 0.3 - 18}
                                    x2={x + 4} y2={y + angle * 0.3 - 18}
                                    stroke="url(#pathGrad)" strokeWidth="1" strokeLinecap="round"
                                />
                            </g>
                        );
                    })}

                    {/* ── main curve path (background/track) ── */}
                    <path
                        d={curvePath}
                        stroke="rgba(99,102,241,0.15)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* ── main curve path (gradient dashed overlay) ── */}
                    <path
                        d={curvePath}
                        stroke="url(#pathGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="8 5"
                        fill="none"
                        className={visible ? 'animate-dash' : ''}
                        style={{
                            strokeDashoffset: visible ? 0 : 800,
                            transition: 'stroke-dashoffset 2s ease-out',
                        }}
                    />

                    {/* ── nodes ── */}
                    {steps.map((step, i) => {
                        const cx = getNodeX(i);
                        const cy = getNodeY(i);
                        const isActive = step.active;
                        const delay = `${300 + i * 200}ms`;
                        const nodeColor = nodeColors[i];
                        const isHovered = hoveredStep === i;

                        return (
                            <g
                                key={i}
                                className={`transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: delay, cursor: 'pointer' }}
                                onMouseEnter={() => setHoveredStep(i)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* glow ring */}
                                {isActive && (
                                    <circle
                                        cx={cx} cy={cy} r={NODE_RADIUS + 8}
                                        fill="none"
                                        stroke={nodeColor}
                                        strokeWidth={isHovered ? '2.5' : '1.5'}
                                        opacity={isHovered ? '0.5' : '0.2'}
                                        strokeDasharray="3 3"
                                        style={{ transition: 'all 0.3s ease' }}
                                    >
                                        <animate
                                            attributeName="r"
                                            values={`${NODE_RADIUS + 6};${NODE_RADIUS + 10};${NODE_RADIUS + 6}`}
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0.25;0.1;0.25"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )}

                                {/* invisible larger hit area for better hover */}
                                <circle
                                    cx={cx} cy={cy} r={NODE_RADIUS + 20}
                                    fill="transparent"
                                    stroke="none"
                                />

                                {/* outer ring */}
                                <circle
                                    cx={cx} cy={cy} r={NODE_RADIUS}
                                    fill={isActive ? nodeColor : 'white'}
                                    stroke={isActive ? nodeColor : '#cbd5e1'}
                                    strokeWidth={isActive ? '0' : '2'}
                                    filter={isActive ? 'url(#dropShadow)' : 'none'}
                                    strokeDasharray={isActive ? 'none' : '4 3'}
                                    style={{
                                        transform: isHovered ? `scale(1.15)` : 'scale(1)',
                                        transformOrigin: `${cx}px ${cy}px`,
                                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                />

                                {/* icon */}
                                <svg
                                    x={cx - 14} y={cy - 14}
                                    width="28" height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={isActive ? 'white' : '#94a3b8'}
                                    strokeWidth="2"
                                    style={{
                                        transform: isHovered ? `scale(1.15)` : 'scale(1)',
                                        transformOrigin: `${cx}px ${cy}px`,
                                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                >
                                    {step.icon}
                                </svg>

                                {/* label */}
                                <text
                                    x={cx}
                                    y={cy + NODE_RADIUS + 22}
                                    textAnchor="middle"
                                    fill={isHovered ? nodeColor : (isActive ? '#e2e8f0' : '#64748b')}
                                    fontSize="14"
                                    fontWeight={isActive ? '700' : '500'}
                                    fontFamily="Inter, system-ui, sans-serif"
                                    style={{ transition: 'fill 0.3s ease' }}
                                >
                                    {step.label}
                                </text>

                                {/* small step number */}
                                {isActive && (
                                    <text
                                        x={cx}
                                        y={cy + NODE_RADIUS + 38}
                                        textAnchor="middle"
                                        fill={nodeColor}
                                        fontSize="11"
                                        fontWeight="600"
                                        fontFamily="Inter, system-ui, sans-serif"
                                        opacity="0.6"
                                    >
                                        Step {i + 1}
                                    </text>
                                )}
                            </g>
                        );
                    })}
                </svg>

                {/* ── HTML hover cards overlay ── */}
                {steps.map((step, i) => {
                    const pos = getNodePercent(i);
                    const isHovered = hoveredStep === i;
                    const nodeColor = nodeColors[i];
                    // Alternate: even index (0,2) → card to the RIGHT, odd index (1,3) → card to the LEFT
                    const showRight = i % 2 === 0;

                    return (
                        <div
                            key={`card-${i}`}
                            className="absolute pointer-events-none"
                            style={{
                                left: pos.left,
                                top: pos.top,
                                zIndex: isHovered ? 50 : 10,
                            }}
                        >
                            <div
                                className="relative"
                                style={{
                                    /* Position at top-right or top-left corner of the node */
                                    transform: showRight
                                        ? 'translate(12px, -100%)'
                                        : 'translate(calc(-100% - 12px), -100%)',
                                    marginTop: '-8px',
                                }}
                            >
                                <div
                                    style={{
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered
                                            ? 'translateY(0) scale(1)'
                                            : `translateY(8px) scale(0.85)`,
                                        transformOrigin: showRight ? 'bottom left' : 'bottom right',
                                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                >
                                    {/* Card */}
                                    <div
                                        className="bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 w-52"
                                        style={{
                                            boxShadow: `0 8px 30px -4px ${nodeColor}25, 0 4px 12px -2px rgba(0,0,0,0.08)`,
                                        }}
                                    >
                                        {/* Colored top bar */}
                                        <div
                                            className="h-1 w-10 rounded-full mb-2"
                                            style={{ background: nodeColor }}
                                        />
                                        <p className="text-xs font-bold text-gray-800 mb-1">
                                            {step.label}
                                        </p>
                                        <p className="text-[11px] leading-relaxed text-gray-500">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Arrow pointing to the node */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '-5px',
                                            [showRight ? 'left' : 'right']: '14px',
                                        }}
                                    >
                                        <div
                                            className="w-3 h-3 rotate-45 bg-white border-r border-b border-gray-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
