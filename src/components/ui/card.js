'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }) {
    return (
        <div
            className={cn(
                'rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-sm',
                className
            )}
            {...props}
        />
    );
}

function CardHeader({ className, ...props }) {
    return (
        <div
            className={cn('flex flex-col space-y-1.5 p-6', className)}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }) {
    return (
        <h3
            className={cn(
                'font-semibold leading-none tracking-tight text-lg',
                className
            )}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }) {
    return (
        <p
            className={cn('text-sm text-slate-600', className)}
            {...props}
        />
    );
}

function CardContent({ className, ...props }) {
    return (
        <div className={cn('p-6 pt-0', className)} {...props} />
    );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };


