import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function FeatureCard({ icon, title, description, index = 0 }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`card p-6 md:p-8 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
            style={{
                transitionDelay: `${index * 150}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

export default FeatureCard;
