'use client';

import React, { useState, useEffect } from 'react';

const CountUpAnimation = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const startValue = 0;
        // Parse target to handle "5000+" or "8+"
        const numericTarget = parseInt(target.toString().replace(/\D/g, ''), 10);
        const suffix = target.toString().replace(/[0-9]/g, '');

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const currentCount = Math.floor(progress * (numericTarget - startValue) + startValue);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration]);

    // Extract suffix from original target to append it back (e.g. "+")
    const suffix = target.toString().replace(/[0-9]/g, '');

    return <span>{count}{suffix}</span>;
};

export default CountUpAnimation;
