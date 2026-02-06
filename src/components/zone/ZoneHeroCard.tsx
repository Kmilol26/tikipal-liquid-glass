"use client";

import { Monitor } from "lucide-react";

interface ZoneHeroCardProps {
    title: string;
    image: string;
    categories?: string[];
    overlayText?: string;
}

export function ZoneHeroCard({
    title,
    image,
    categories = ["STARTUPS", "HACKATHON", "BOOTCAMP", "AR/VR", "PRODUCT", "DESIGN"],
    overlayText = "¡La mejor zona para salir!"
}: ZoneHeroCardProps) {
    return (
        <div className="relative bg-gray-100/80 rounded-3xl overflow-hidden shadow-lg border border-gray-200/50 backdrop-blur-sm">
            {/* Icon in top-left corner */}
            <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-amber-200/50 shadow-sm">
                <Monitor size={24} className="text-amber-600" />
            </div>

            {/* Category labels - vertical on the right */}
            <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1">
                {categories.slice(0, 6).map((cat, idx) => (
                    <span
                        key={idx}
                        className="text-[9px] font-bold text-white/70 uppercase tracking-wider drop-shadow-lg"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                        {cat}
                    </span>
                ))}
            </div>

            {/* Full image container */}
            <div className="relative w-full aspect-[4/3]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

                {/* Centered overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-6 drop-shadow-2xl">
                        {overlayText}
                    </h2>
                </div>
            </div>

            {/* Bottom labels */}
            <div className="flex justify-between items-center px-6 py-4 bg-white/90">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Discover
                </span>
                <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-tikipal-orange uppercase tracking-wider">
                        Tech
                    </span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Events
                    </span>
                </div>
            </div>
        </div>
    );
}
