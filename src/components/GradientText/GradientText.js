"use client";

export default function GradientText({ children, className = "" }) {
    return (
        <span
            className={`inline-block bg-clip-text text-transparent animate-gradient-flow ${className}`}
            style={{
                backgroundImage:
                    "linear-gradient(90deg, #a855f6, #6366f1, #ec4899, #06b6d4, #a855f6)",
                backgroundSize: "300% 100%",
            }}
        >
            {children}
        </span>
    );
}
