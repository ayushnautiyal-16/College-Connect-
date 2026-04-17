"use client";

import { useEffect, useRef, useState } from "react";
import {
    Users,
    Building2,
    BadgeCheck,
    GraduationCap,
    Briefcase,
    Globe,
} from "lucide-react";
import GradientText from "@/components/GradientText/GradientText";

const features = [
    {
        icon: Users,
        title: "Personalized Guidance",
        description:
            "Get expert help to choose the right college based on your goals, marks, and interests.",
        color: "text-purple-400",
    },
    {
        icon: Building2,
        title: "Explore Top Colleges",
        description:
            "We help you discover trusted colleges in Dehradun and across India - all in one place.",
        color: "text-cyan-400",
    },
    {
        icon: BadgeCheck,
        title: "Compare Before You Decide",
        description:
            "Easily compare colleges, courses, fees, and placements to make the right choice.",
        color: "text-green-400",
    },
    {
        icon: GraduationCap,
        title: "Course Selection Made Easy",
        description:
            "Confused between B.Tech, BBA, MBA or others? We help you pick the right course for your future.",
        color: "text-amber-400",
    },
    {
        icon: Briefcase,
        title: "Verified & Trusted Information",
        description:
            "We provide accurate and updated details so you don't rely on random sources.",
        color: "text-rose-400",
    },
    {
        icon: Globe,
        title: "Complete Admission Support",
        description:
            "From choosing a college to final admission - we guide you at every step.",
        color: "text-teal-400",
    },
];

function FeatureCard({
    icon: Icon,
    title,
    description,
    color,
    className = "",
    isVisible = false,
    index = 0,
}) {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--x", `${x}px`);
        e.currentTarget.style.setProperty("--y", `${y}px`);
    };

    const burstOffsets = [
        { x: -180, y: -95, r: -24 },
        { x: -120, y: -150, r: -16 },
        { x: 30, y: -165, r: -8 },
        { x: 170, y: -95, r: 18 },
        { x: -145, y: 120, r: -14 },
        { x: 140, y: 130, r: 20 },
    ];
    const offset = burstOffsets[index % burstOffsets.length];
    const hiddenTransform = `translate(${offset.x}px, ${offset.y}px) scale(0.24) rotate(${offset.r}deg)`;
    const visibleTransform = "translate(0px, 0px) scale(1) rotate(0deg)";

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl bg-[#0f172a] border border-white/10 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/5 ${className}`}
            onMouseMove={handleMouseMove}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? visibleTransform : hiddenTransform,
                filter: isVisible ? "blur(0px)" : "blur(4px)",
                transitionProperty: "transform, opacity, filter",
                transitionDuration: "760ms, 520ms, 760ms",
                transitionTimingFunction:
                    "cubic-bezier(0.18, 0.95, 0.24, 1), ease-out, cubic-bezier(0.18, 0.95, 0.24, 1)",
                transitionDelay: `${index * 85}ms`,
                willChange: "transform, opacity, filter",
            }}
        >
            {/* Cursor Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(250px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 40%)",
                }}
            />

            {/* Subtle corner accent */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl" />

            {/* Content */}
            <div className="relative z-20">
                <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${color}`}
                >
                    <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function FeaturesSection() {
    const sectionRef = useRef(null);
    const [isSectionInView, setIsSectionInView] = useState(false);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        if (!sectionElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSectionInView(entry.isIntersecting);
            },
            { threshold: 0.22, rootMargin: "0px 0px -10% 0px" }
        );

        observer.observe(sectionElement);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-[#060b18] py-12 md:py-20 text-center sm:text-left">
            {/* Background radial glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-cyan-600/10 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-purple-400">
                        Why College Connect
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white sm:text-4xl text-center">
                        Everything You Need to Choose{" "}
                        <br className="block sm:hidden" />
                        <GradientText>the Right College</GradientText>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        We don&apos;t just list colleges - we guide you step by step to the
                        best decision.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            isVisible={isSectionInView}
                            index={index}
                            className={
                                index === 4
                                    ? "lg:col-start-2"
                                    : index === 5
                                      ? "lg:col-start-3"
                                      : ""
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
