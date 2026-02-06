"use client";

import { MapPin, Play } from "lucide-react";
import Link from "next/link";

interface SiteCardProps {
    id?: string;
    title: string;
    genres: string[];
    address: string;
    price: string;
    image: string;
}

export function SiteCard({ id = "demo", title, genres, address, price, image }: SiteCardProps) {
    return (
        <Link href={`/place/${id}`} className="group block">
            <div className="flex flex-col gap-2 p-2.5 rounded-[32px] bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.05)] hover:bg-white/50 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-square w-full rounded-[24px] overflow-hidden bg-white/20 border border-white/30">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info Section */}
                <div className="px-2 pb-1 space-y-1">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-[15px] font-bold text-gray-900 leading-tight group-hover:text-tikipal-orange transition-colors">
                            {title}
                        </h3>
                        <p className="text-[11px] font-medium text-gray-500/80 line-clamp-1 uppercase tracking-wider">
                            {genres.slice(0, 2).join(" • ")}
                        </p>
                    </div>

                    <div className="flex items-center justify-between items-end pt-1">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Desde</span>
                            <span className="text-[15px] font-black text-gray-900 tracking-tight">${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
