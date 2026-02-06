"use client";

import { motion } from "framer-motion";
import React from "react";

export const LiquidBackground = React.memo(function LiquidBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-gray-50/50 pointer-events-none">
            {/* Orb 1: Tikipal Orange (Subtle) */}
            <motion.div
                style={{ willChange: "transform", transform: "translateZ(0)" }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-tikipal-orange/10 rounded-full blur-[120px] backface-hidden"
            />

            {/* Orb 2: Cool Silver/Blue */}
            <motion.div
                style={{ willChange: "transform", transform: "translateZ(0)" }}
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/20 rounded-full blur-[100px] backface-hidden"
            />

            {/* Top Vertical Gradient - Enhanced from top to bottom */}
            <motion.div
                style={{ willChange: "opacity, height", transform: "translateZ(0)" }}
                animate={{
                    opacity: [0.95, 1, 0.95],
                    height: ["60vh", "70vh", "60vh"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500/18 via-orange-400/5 to-transparent blur-[140px] backface-hidden"
            />

            {/* Sub-layer for depth: Top Silver/Cool Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-gray-200/20 via-transparent to-transparent blur-[100px]" />


            {/* Texture Overlay (Noise) for "Frosted" feel */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        </div>
    );
});
