import React from 'react';
import { motion } from 'framer-motion';

// --- Components for Standardization ---

export const StandardSlideTitle: React.FC<{ children: React.ReactNode; className?: string; align?: 'left' | 'center' | 'right' }> = ({
    children,
    className = "",
    align = 'center'
}) => {
    return (
        <h2 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-[#FF6B26] pb-2 leading-[1.1] ${className} text-${align}`}>
            {children}
        </h2>
    );
};

export const StandardSlideSubtitle: React.FC<{ children: React.ReactNode; className?: string; align?: 'left' | 'center' | 'right' }> = ({
    children,
    className = "",
    align = 'center'
}) => {
    return (
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-500 font-medium mt-4 leading-relaxed ${className} text-${align}`}>
            {children}
        </p>
    );
};

interface StandardSlideLayoutProps {
    children: React.ReactNode;
    className?: string;
    // Optional: Pass title/subtitle to let layout handle the header automatically (centered)
    title?: string;
    subtitle?: string;
}

export const StandardSlideLayout: React.FC<StandardSlideLayoutProps> = ({
    children,
    className = "",
    title,
    subtitle
}) => {
    return (
        <div className={`relative w-full h-full overflow-hidden bg-white ${className}`}>
            {/* Standard Background - Liquid Glass Orbs (Subtle & Premium) */}
            <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-red-500/5 to-orange-500/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-orange-500/5 to-purple-500/5 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />

            {/* Minimal Grid Texture Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col px-6 py-8 sm:px-12 sm:py-10 max-w-[1600px] mx-auto">
                {/* Optional: Layout-managed Header */}
                {title && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center mb-10 shrink-0"
                    >
                        <StandardSlideTitle>{title}</StandardSlideTitle>
                        {subtitle && <StandardSlideSubtitle className="max-w-4xl mx-auto">{subtitle}</StandardSlideSubtitle>}
                    </motion.div>
                )}

                {/* Main Content Area */}
                <div className="flex-1 min-h-0 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};
