'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 shadow-sm',
    {
        variants: {
            variant: {
                default:
                    'bg-brand-primary text-white hover:bg-brand-secondary focus-visible:ring-brand-primary/70 focus-visible:ring-offset-slate-900/5',
                outline:
                    'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-200',
                ghost: 'bg-transparent hover:bg-slate-100 text-slate-900',
                secondary:
                    'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-100',
            },
            size: {
                default: 'h-10 px-5 py-2',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-11 px-6 text-base',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

const Button = React.forwardRef(function Button(
    { className, variant, size, ...props },
    ref
) {
    return (
        <button
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
});

export { Button, buttonVariants };


