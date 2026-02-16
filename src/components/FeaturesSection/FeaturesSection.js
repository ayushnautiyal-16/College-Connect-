"use client";

import {
    GraduationCap,
    Building2,
    Users,
    BadgeCheck,
    Briefcase,
    BookOpen,
    Globe,
    Lightbulb,
} from "lucide-react";
import GradientText from "@/components/GradientText/GradientText";

const features = [
    {
        icon: GraduationCap,
        title: "Top-Ranked Programs",
        description:
            "Explore NAAC-accredited courses across Engineering, Management, Medical & more with nationally recognized curricula.",
        color: "text-purple-400",
    },
    {
        icon: Building2,
        title: "World-Class Infrastructure",
        description:
            "State-of-the-art labs, smart classrooms, sprawling campuses & modern hostels designed for an immersive learning experience.",
        color: "text-cyan-400",
    },
    {
        icon: Users,
        title: "Expert Faculty",
        description:
            "Learn from industry veterans, PhD scholars & research-active professors committed to nurturing future leaders.",
        color: "text-green-400",
    },
    {
        icon: BadgeCheck,
        title: "Verified Accreditations",
        description:
            "Every college is vetted for NAAC, NBA, UGC, AICTE & other national accreditation standards you can trust.",
        color: "text-amber-400",
    },
    {
        icon: Briefcase,
        title: "Placement Excellence",
        description:
            "Discover colleges with 90%+ placement records, packages up to ₹54 LPA & partnerships with Fortune 500 recruiters.",
        color: "text-rose-400",
    },
    {
        icon: BookOpen,
        title: "Diverse Course Catalog",
        description:
            "From B.Tech & MBA to MBBS, Law, Agriculture & Design — find the perfect program tailored to your career goals.",
        color: "text-indigo-400",
    },
    {
        icon: Globe,
        title: "Global Exposure",
        description:
            "International collaborations, student exchange programs & MoUs with 200+ global universities for a world-ready education.",
        color: "text-teal-400",
    },
    {
        icon: Lightbulb,
        title: "Innovation & Research",
        description:
            "Cutting-edge incubation centers, patent-filing support & dedicated R&D labs powering the next wave of breakthroughs.",
        color: "text-orange-400",
    },
];

function FeatureCard({ icon: Icon, title, description, color }) {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--x", `${x}px`);
        e.currentTarget.style.setProperty("--y", `${y}px`);
    };

    return (
        <div
            className="group relative overflow-hidden rounded-2xl bg-[#0f172a] border border-white/10 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/5"
            onMouseMove={handleMouseMove}
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
    return (
        <section className="relative overflow-hidden bg-[#060b18] py-20">
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
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Everything You Need to Choose{" "}
                        <GradientText>the Right College</GradientText>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Comprehensive insights, verified data & expert guidance — all in one
                        place to make your college decision stress-free.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
