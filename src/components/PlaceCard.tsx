"use client";

import { MapPin, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface PlaceCardProps {
    id?: string;
    title: string;
    tags: string;
    location: string;
    image?: string;
    price?: string;
    rating?: number;
    isGuestFavorite?: boolean;
    variant?: 'default' | 'compact';
}

export function PlaceCard({
    id = "demo",
    title,
    tags,
    location,
    image,
    price,
    rating = 4.8,
    isGuestFavorite = false,
    variant = 'default'
}: PlaceCardProps) {
    const { language, t } = useLanguage();

    // Helper to translate tags from mock data
    const translateTag = (tag: string) => {
        const tagMap: Record<string, string> = {
            "Pet Friendly": t.common.tags.pet_friendly,
            "Club de Padel": t.common.tags.padel_club,
            "Restaurante": t.common.tags.restaurant,
            "Heladería": t.common.tags.ice_cream,
            "Gimnasio": t.common.tags.gym,
            "Sauna": t.common.tags.sauna,
            "Discoteca": t.common.tags.disco,
            "Barra Libre": t.common.tags.open_bar,
            "Administración": t.common.tags.admin,
            "Techno": t.common.tags.techno,
            "Club": t.common.tags.club,
            "Padel": t.common.tags.padel_club
        };
        return tagMap[tag] || tag;
    };

    const tagList = tags.split(' · ');

    return (
        <Link href={`/place/${id}`} className="group cursor-pointer flex flex-col gap-3 transition-all duration-500 active:scale-[0.98]">
            {/* Image Container with Title Overlay */}
            <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-black shadow-md transition-all duration-700 group-hover:shadow-tikipal-orange/30 group-hover:shadow-xl">
                {/* Image Component */}
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-85 group-hover:opacity-100"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-900 animate-pulse" />
                )}

                {/* Overlays */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 z-20 rounded-[32px]" />

                {/* Title and Internal Tag Overlay - Stays inside the card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-black text-white leading-tight tracking-tight drop-shadow-lg line-clamp-2">
                            {title}
                        </h3>
                        <div className="flex flex-col gap-2 mt-1">

                            {/* Internal Price Display */}
                            {(() => {
                                const numericPart = price?.replace(/[^0-9]+/g, "");
                                const isNumeric = price && numericPart && numericPart.length > 0 && !isNaN(Number(numericPart)) && price.match(/\d/);
                                return (
                                    <div className="flex flex-col">
                                        <p className="text-[7px] font-black text-white/60 uppercase tracking-[0.2em] leading-none mb-0.5">
                                            {isNumeric ? (language === 'es' ? 'Desde' : 'From') : (language === 'es' ? 'Tarifa' : 'Rate')}
                                        </p>
                                        <p className="text-base font-black text-white leading-none tracking-tighter drop-shadow-md">
                                            {price && (price === '0' || price.toLowerCase() === 'gratis' || price.toLowerCase() === 'free')
                                                ? t.common.free.toUpperCase()
                                                : isNumeric
                                                    ? `$${price.includes('$') ? price.replace('$', '') : price}`
                                                    : price}
                                        </p>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>

                {/* Star Rating - Floating Badge */}
                <div className="absolute top-4 right-4 z-30">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1.5 flex items-center gap-1.5 shadow-xl">
                        <Star className="fill-yellow-400 text-yellow-400" size={12} />
                        <span className="text-[11px] font-black text-white">{rating}</span>
                    </div>
                </div>

                {/* Business Type Tag - Floating Badge (Top Left) */}
                <div className="absolute top-3 left-3 z-30">
                    <span className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-sm text-[8px] font-bold text-white/90 uppercase tracking-widest">
                        {translateTag(tagList[0])}
                    </span>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full" />
            </div>

            {/* Info Section - Outside the card */}
            <div className="px-2 pt-1.5 space-y-2">
                <div className="flex flex-wrap items-center gap-1.5">
                    {/* Location Tag */}
                    <div className="flex items-center gap-1 py-0.5 px-1.5 rounded-md bg-gray-50 border border-gray-100 group-hover:bg-tikipal-orange/5 group-hover:border-tikipal-orange/20 transition-all">
                        <MapPin className="text-gray-400 group-hover:text-tikipal-orange transition-colors" size={9} />
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tight truncate max-w-[100px]">
                            {location}
                        </span>
                    </div>

                    {/* Secondary Tags - Dynamic Rendering */}
                    {tagList.slice(1).map((tag, index) => (
                        <div key={index} className="py-0.5 px-1.5 rounded-md bg-gray-50 border border-gray-100 group-hover:bg-tikipal-orange/10 group-hover:border-tikipal-orange/20 transition-all">
                            <span className="text-[9px] font-bold text-gray-500 group-hover:text-tikipal-orange uppercase tracking-tight">
                                {translateTag(tag)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}
