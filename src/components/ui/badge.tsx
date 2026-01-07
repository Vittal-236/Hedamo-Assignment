import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "secondary" | "outline" | "published" | "submitted" | "draft";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-stone-900 text-stone-50 hover:bg-stone-900/80",
        secondary: "bg-stone-100 text-stone-900 hover:bg-stone-100/80",
        outline: "text-stone-950 border border-stone-200",
        published: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        submitted: "bg-amber-50 text-amber-700 border border-amber-200",
        draft: "bg-stone-100 text-stone-600 border border-stone-200",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
