"use client";

import { Search } from "lucide-react";

interface ZoneInfoProps {
    title: string;
    eventCount: number;
    description: string;
    tags?: string[];
}

export function ZoneInfo({
    title,
    eventCount,
    description,
    tags = ["Bares", "Discotecas", "Restaurantes"]
}: ZoneInfoProps) {
    return (
        <div className="space-y-5">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                <span className="text-tikipal-orange">{title.split(' ')[0]}</span>
                {title.includes(' ') && (
                    <span className="text-gray-900"> {title.split(' ').slice(1).join(' ')}</span>
                )}
            </h1>

            {/* Event Count */}
            <p className="text-[16px] font-bold text-gray-900">
                {eventCount} eventos
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-[575px]">
                {description}
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
                {tags.map((tag, idx) => (
                    <button
                        key={idx}
                        className={`px-4 py-1.5 rounded-lg text-[14px] font-semibold transition-all shadow-sm backdrop-blur-md border ${tag === "Bares"
                            ? "bg-white/50 text-orange-700 border-orange-200/50 hover:bg-orange-50/50"
                            : tag === "Discotecas"
                                ? "bg-white/50 text-purple-700 border-purple-200/50 hover:bg-purple-50/50"
                                : "bg-white/50 text-amber-700 border-amber-200/50 hover:bg-amber-50/50"
                            } hover:scale-105`}
                    >
                        {tag}
                    </button>
                ))}
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-orange-400/50 text-orange-600 text-[14px] font-semibold hover:bg-orange-50/80 transition-all bg-white/60 backdrop-blur-md shadow-sm">
                    <Search size={14} className="text-orange-600" />
                    <span className="text-orange-600">Busca tu lugar favorito</span>
                </button>
            </div>
        </div>
    );
}
