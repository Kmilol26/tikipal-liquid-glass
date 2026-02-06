"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, onClick, hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -2 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-2xl",
                "bg-white/60 backdrop-blur-2xl",
                "border border-white/40 shadow-xl",
                "transition-all duration-300 hover:shadow-2xl hover:bg-white/70",
                className
            )}
            onClick={onClick}
        >
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
