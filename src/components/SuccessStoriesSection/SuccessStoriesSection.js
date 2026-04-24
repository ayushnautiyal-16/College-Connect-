'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import GradientText from '@/components/GradientText/GradientText';

/* ───────────────────────── testimonial data ───────────────────────── */
const testimonials = [
    {
        name: 'Aarav Sharma',
        role: 'B.Tech CSE · Graphic Era University, 2023',
        quote:
            'With average 12th marks and no clear college roadmap, I used College Connect\'s counselling to shortlist realistic options. I joined Graphic Era for CSE and secured a role as a software engineer at a leading product company.',
        highlight: 'Placed at a top product company',
    },
    {
        name: 'Simran Kaur',
        role: 'BBA · DIT University, 2022',
        quote:
            'I wanted to move from Science to Management but was confused about fees and reputation. College Connect helped me compare colleges on placements and campus life. Today I work in a reputed finance firm in NCR.',
        highlight: 'Stream switch with confidence',
    },
    {
        name: 'Rahul Verma',
        role: 'LLB (Hons.) · Uttaranchal University, 2021',
        quote:
            'As a first-generation learner with a limited budget, I had a strong interest in law. Through detailed counselling and college shortlisting, I joined Uttaranchal University and now practice at a well-known law firm.',
        highlight: 'First-gen lawyer in the family',
    },
    {
        name: 'Priya Negi',
        role: 'MBA · UPES Dehradun, 2023',
        quote:
            'College Connect guided me from selecting the right MBA specialization to preparing for interviews. Their step-by-step support made the entire journey stress-free and I landed a great role right after campus placements.',
        highlight: 'Landed dream MBA placement',
    },
];

/* ───────────────────────── card color themes ──────────────────────── */
const cardThemes = [
    {
        // amber / golden
        bg: 'rgba(255,243,224,0.55)',
        border: '#e8c170',
        dotFill: '#fef3c7',
        dotStroke: '#d4a24e',
        dotText: '#92610a',
        connectorStroke: '#d4a24e',
        starFill: '#d4a24e',
    },
    {
        // teal / mint
        bg: 'rgba(224,247,243,0.55)',
        border: '#5cb8a5',
        dotFill: '#ccfbf1',
        dotStroke: '#3fa48f',
        dotText: '#1a5c50',
        connectorStroke: '#3fa48f',
        starFill: '#3fa48f',
    },
    {
        // soft violet
        bg: 'rgba(238,232,255,0.55)',
        border: '#a78bdb',
        dotFill: '#ede9fe',
        dotStroke: '#8b6ec0',
        dotText: '#4e2f8c',
        connectorStroke: '#8b6ec0',
        starFill: '#8b6ec0',
    },
    {
        // rose / pink
        bg: 'rgba(255,230,235,0.55)',
        border: '#e07a8f',
        dotFill: '#ffe4e6',
        dotStroke: '#d0566e',
        dotText: '#8c2640',
        connectorStroke: '#d0566e',
        starFill: '#d0566e',
    },
];

/* ───────────── SVG geometry helpers (sine wave thread) ─────────── */
const SVG_W = 1200;
const SVG_H = 620;
const THREAD_Y_CENTER = SVG_H / 2;        // 310
const AMPLITUDE = 120;                     // how far peaks/valleys go
const WAVE_SEGMENTS = testimonials.length; // one crest/trough per testimonial
const SEGMENT_W = SVG_W / WAVE_SEGMENTS;

/**
 * Build a hand-drawn-style sine-wave path string.
 * `jitter` adds organic imperfection; `yShift` offsets vertically for
 * the parallel-thread look.
 */
function buildThreadPath(jitter = 0, yShift = 0) {
    const seed = jitter * 7 + 3;
    const pts = [];
    const steps = WAVE_SEGMENTS * 20; // high resolution
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = t * SVG_W;
        const baseY =
            THREAD_Y_CENTER +
            Math.sin(t * Math.PI * WAVE_SEGMENTS) * AMPLITUDE;
        // tiny pseudo-random wobble
        const wobble =
            Math.sin(x * 0.08 + seed) * jitter +
            Math.cos(x * 0.12 + seed * 2) * jitter * 0.6;
        pts.push([x, baseY + wobble + yShift]);
    }
    // build SVG cubic bezier spline through the points
    let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 1; i < pts.length - 1; i++) {
        const cp1x = (pts[i - 1][0] + pts[i][0]) / 2;
        const cp1y = pts[i][1];
        const cp2x = (pts[i][0] + pts[i + 1][0]) / 2;
        const cp2y = pts[i][1];
        d += ` S ${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)}`;
    }
    const last = pts[pts.length - 1];
    d += ` L ${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
    return d;
}

/** Calculate (x,y) of the i-th peak or valley on the wave */
function dotPosition(index) {
    // peaks at 0.25, valleys at 0.75 within each segment
    const isTop = index % 2 === 0; // alternates
    const localT = isTop ? 0.5 : 0.5;
    const t = (index + localT) / WAVE_SEGMENTS;
    const x = t * SVG_W;
    const y =
        THREAD_Y_CENTER + Math.sin(t * Math.PI * WAVE_SEGMENTS) * AMPLITUDE;
    return { x, y, isTop };
}

/* ───────────────────────── star SVG ───────────────────────────── */
function SketchStar({ cx, cy, r, fill, stroke }) {
    const pts = [];
    for (let i = 0; i < 10; i++) {
        const angle = (Math.PI / 5) * i - Math.PI / 2;
        const radius = i % 2 === 0 ? r : r * 0.45;
        pts.push(
            `${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`
        );
    }
    return (
        <polygon
            points={pts.join(' ')}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.6"
            opacity="0.9"
        />
    );
}

/* ═══════════════════════ MAIN COMPONENT ══════════════════════════ */
export default function SuccessStoriesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    const getInitials = (name) =>
        name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase();

    /* pre-compute the three parallel thread paths */
    const threadPaths = useMemo(
        () => [
            buildThreadPath(1.5, -3),
            buildThreadPath(0, 0),
            buildThreadPath(2, 3.5),
        ],
        []
    );

    /* pre-compute dot positions */
    const dots = useMemo(
        () => testimonials.map((_, i) => dotPosition(i)),
        []
    );

    /* ──── card dimensions (% of viewBox) ──── */
    const CARD_W = 260;
    const CARD_H_APPROX = 250;
    const CONNECTOR_LEN = 50;

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-10 md:py-16 px-4"
            style={{ background: '#fffdf8' }}
        >
            {/* ── notebook ruled lines background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-0 right-0"
                        style={{
                            top: `${i * 36 + 18}px`,
                            height: '1px',
                            background:
                                'repeating-linear-gradient(90deg, transparent 0 3px, rgba(180,200,220,0.18) 3px 60px)',
                        }}
                    />
                ))}
                {/* left red margin line */}
                <div
                    className="absolute top-0 bottom-0 hidden lg:block"
                    style={{
                        left: '60px',
                        width: '1.5px',
                        background: 'rgba(220,130,130,0.13)',
                    }}
                />
            </div>

            {/* ── warm decorative blobs ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-[-8%] right-[-6%] w-[420px] h-[420px] rounded-full blur-[120px]"
                    style={{ background: 'rgba(251,191,36,0.08)' }}
                />
                <div
                    className="absolute bottom-[-6%] left-[-4%] w-[380px] h-[380px] rounded-full blur-[100px]"
                    style={{ background: 'rgba(167,139,219,0.07)' }}
                />
                <div
                    className="absolute top-[45%] left-[50%] w-[300px] h-[300px] rounded-full blur-[100px]"
                    style={{ background: 'rgba(92,184,165,0.06)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ──── Heading ──── */}
                <div
                    className={`text-center mb-3 md:mb-5 transition-all duration-1000 ${
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6'
                    }`}
                >
                    <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200/60 px-4 py-1.5 text-[11px] md:text-xs font-semibold text-amber-700 tracking-wide uppercase mb-4 font-caveat text-base md:text-lg">
                        ✦ Real Student Stories
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Success Stories from Our{' '}
                        <br className="block sm:hidden" />
                        <GradientText>Students</GradientText>
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base font-lora italic">
                        How the right counselling and college choice transformed
                        these students&apos; careers.
                    </p>
                </div>

                {/* ──────── MOBILE LAYOUT (vertical stack) ──────── */}
                <div className="block lg:hidden space-y-6">
                    {testimonials.map((t, idx) => {
                        const theme = cardThemes[idx % cardThemes.length];
                        return (
                            <div
                                key={idx}
                                className={`relative transition-all duration-700 ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: `${200 + idx * 120}ms`,
                                }}
                            >
                                {/* dot */}
                                <div className="flex justify-center mb-3">
                                    <div
                                        className="relative w-14 h-14 rounded-full flex items-center justify-center"
                                        style={{
                                            border: `2.5px dashed ${theme.dotStroke}`,
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center font-caveat text-lg font-bold"
                                            style={{
                                                background: theme.dotFill,
                                                color: theme.dotText,
                                            }}
                                        >
                                            {getInitials(t.name)}
                                        </div>
                                    </div>
                                </div>
                                {/* wobbly connector */}
                                <div className="flex justify-center mb-2">
                                    <svg
                                        width="2"
                                        height="28"
                                        viewBox="0 0 2 28"
                                    >
                                        <line
                                            x1="1"
                                            y1="0"
                                            x2="1"
                                            y2="22"
                                            stroke={theme.connectorStroke}
                                            strokeWidth="1.5"
                                            strokeDasharray="4 3"
                                            opacity="0.6"
                                        />
                                        <polygon
                                            points="1,28 -1.5,22 3.5,22"
                                            fill={theme.connectorStroke}
                                            opacity="0.5"
                                        />
                                    </svg>
                                </div>
                                {/* card */}
                                <div
                                    className="rounded-2xl p-5 relative"
                                    style={{
                                        background: theme.bg,
                                        border: `1.5px solid ${theme.border}`,
                                        backdropFilter: 'blur(6px)',
                                    }}
                                >
                                    {/* stars */}
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                            >
                                                <SketchStar
                                                    cx={8}
                                                    cy={8}
                                                    r={7}
                                                    fill={theme.starFill}
                                                    stroke={theme.dotStroke}
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="font-lora italic text-gray-700 text-[14px] leading-relaxed mb-4">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="border-t pt-3" style={{ borderColor: `${theme.border}66` }}>
                                        <p className="font-caveat text-xl font-bold text-gray-800">
                                            {t.name}
                                        </p>
                                        <p className="font-caveat text-[15px] text-gray-500">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ──────── DESKTOP LAYOUT (SVG thread + positioned cards) ──────── */}
                <div
                    className={`hidden lg:block relative transition-all duration-1000 ${
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                >
                    <div className="relative w-full" style={{ paddingBottom: `${(SVG_H / SVG_W) * 100}%` }}>
                        <svg
                            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 w-full h-full"
                            style={{ overflow: 'visible' }}
                        >
                            {/* ── thread paths ── */}
                            {threadPaths.map((d, i) => (
                                <path
                                    key={i}
                                    d={d}
                                    stroke={
                                        i === 1
                                            ? '#c8912e'
                                            : i === 0
                                            ? '#d4a24e'
                                            : '#dbb66a'
                                    }
                                    strokeWidth={i === 1 ? '2.5' : '1.5'}
                                    strokeLinecap="round"
                                    opacity={i === 1 ? '0.7' : '0.35'}
                                    fill="none"
                                    strokeDasharray={
                                        i === 1 ? 'none' : '6 4'
                                    }
                                />
                            ))}

                            {/* ── dots, connectors, cards ── */}
                            {dots.map((dot, idx) => {
                                const theme =
                                    cardThemes[idx % cardThemes.length];
                                const t = testimonials[idx];
                                const cardAbove = idx % 2 === 0;
                                const cardX = dot.x - CARD_W / 2;
                                const connStartY = cardAbove
                                    ? dot.y - 26
                                    : dot.y + 26;
                                const connEndY = cardAbove
                                    ? dot.y - 26 - CONNECTOR_LEN
                                    : dot.y + 26 + CONNECTOR_LEN;
                                const cardY = cardAbove
                                    ? connEndY - CARD_H_APPROX - 4
                                    : connEndY + 4;
                                const arrowDir = cardAbove ? 1 : -1;
                                const arrowTipY = connStartY;
                                const arrowBaseY =
                                    connStartY - arrowDir * 8;

                                return (
                                    <g key={idx}>
                                        {/* wobbly dashed connector */}
                                        <path
                                            d={`M ${dot.x} ${connStartY} C ${dot.x + 2} ${(connStartY + connEndY) / 2 - 3}, ${dot.x - 2} ${(connStartY + connEndY) / 2 + 3}, ${dot.x} ${connEndY}`}
                                            stroke={theme.connectorStroke}
                                            strokeWidth="1.5"
                                            strokeDasharray="5 4"
                                            opacity="0.55"
                                            fill="none"
                                            strokeLinecap="round"
                                        />
                                        {/* tiny arrow tip */}
                                        <polygon
                                            points={`${dot.x},${arrowTipY} ${dot.x - 4},${arrowBaseY} ${dot.x + 4},${arrowBaseY}`}
                                            fill={theme.connectorStroke}
                                            opacity="0.45"
                                        />

                                        {/* ── outer dashed ring ── */}
                                        <circle
                                            cx={dot.x}
                                            cy={dot.y}
                                            r="24"
                                            fill="none"
                                            stroke={theme.dotStroke}
                                            strokeWidth="1.5"
                                            strokeDasharray="4 3.5"
                                            opacity="0.5"
                                        />
                                        {/* ── middle ring ── */}
                                        <circle
                                            cx={dot.x}
                                            cy={dot.y}
                                            r="19"
                                            fill="white"
                                            stroke={theme.dotStroke}
                                            strokeWidth="1"
                                            opacity="0.7"
                                        />
                                        {/* ── inner pastel fill ── */}
                                        <circle
                                            cx={dot.x}
                                            cy={dot.y}
                                            r="16"
                                            fill={theme.dotFill}
                                        />
                                        {/* ── initials ── */}
                                        <text
                                            x={dot.x}
                                            y={dot.y + 1}
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            fill={theme.dotText}
                                            fontSize="12"
                                            fontWeight="700"
                                            fontFamily="Caveat, cursive"
                                        >
                                            {getInitials(t.name)}
                                        </text>

                                        {/* ───── testimonial card (foreignObject) ───── */}
                                        <foreignObject
                                            x={cardX}
                                            y={cardY}
                                            width={CARD_W}
                                            height={CARD_H_APPROX}
                                            style={{ overflow: 'visible' }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                className="rounded-xl p-4 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                                                style={{
                                                    background: theme.bg,
                                                    border: `1.5px solid ${theme.border}`,
                                                    backdropFilter:
                                                        'blur(8px)',
                                                    boxShadow: `0 2px 16px rgba(0,0,0,0.04), inset 0 0 60px rgba(255,255,255,0.25)`,
                                                }}
                                            >
                                                {/* stars */}
                                                <div>
                                                    <div className="flex gap-0.5 mb-2">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    width="14"
                                                                    height="14"
                                                                    viewBox="0 0 14 14"
                                                                >
                                                                    <SketchStar
                                                                        cx={7}
                                                                        cy={7}
                                                                        r={6}
                                                                        fill={
                                                                            theme.starFill
                                                                        }
                                                                        stroke={
                                                                            theme.dotStroke
                                                                        }
                                                                    />
                                                                </svg>
                                                            )
                                                        )}
                                                    </div>
                                                    <p
                                                        className="text-gray-700 leading-relaxed"
                                                        style={{
                                                            fontFamily:
                                                                'Lora, Georgia, serif',
                                                            fontStyle:
                                                                'italic',
                                                            fontSize: '12px',
                                                            lineHeight: '1.55',
                                                        }}
                                                    >
                                                        &ldquo;{t.quote}&rdquo;
                                                    </p>
                                                </div>

                                                {/* author */}
                                                <div
                                                    className="pt-2 mt-2"
                                                    style={{
                                                        borderTop: `1px solid ${theme.border}55`,
                                                    }}
                                                >
                                                    <p
                                                        className="text-gray-800 font-bold"
                                                        style={{
                                                            fontFamily:
                                                                'Caveat, cursive',
                                                            fontSize: '17px',
                                                        }}
                                                    >
                                                        {t.name}
                                                    </p>
                                                    <p
                                                        className="text-gray-500"
                                                        style={{
                                                            fontFamily:
                                                                'Caveat, cursive',
                                                            fontSize: '13px',
                                                        }}
                                                    >
                                                        {t.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </foreignObject>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
