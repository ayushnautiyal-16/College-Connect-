"use client";

export default function GradientText({ children, className = "", colorTheme = "indigo" }) {
    const gradients = {
        indigo: "linear-gradient(90deg, #a855f6, #6366f1, #ec4899, #06b6d4, #a855f6)",
        orange: "linear-gradient(90deg, #ea580c, #f43f5e, #f97316, #ea580c)"
    };

    return (
        <span
            className={`inline-block bg-clip-text text-transparent animate-gradient-flow ${className}`}
            style={{
                backgroundImage: gradients[colorTheme] || gradients.indigo,
                backgroundSize: "300% 100%",
            }}
        >
            {children}
        </span>
    );
}
