"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowUpRight, Layers } from "lucide-react";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function FeaturedGroupsSection() {
    const { t, language } = useLanguage();

    const GROUPS = [
        { name: "Grupo El Fabuloso", slug: "el-fabuloso", places: language === 'es' ? "3 Sitios" : "3 Sites", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop" },
        { name: "Grupo Andrés DC", slug: "andres-dc", places: language === 'es' ? "5 Sitios" : "5 Sites", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
        { name: "Grupo La Candelaria", slug: "la-candelaria", places: language === 'es' ? "4 Sitios" : "4 Sites", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop" },
        { name: "Grupo Padel Bogotá", slug: "padel-bogota", places: language === 'es' ? "6 Sitios" : "6 Sites", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop" },
        { name: "Grupo Click Clack", slug: "click-clack", places: language === 'es' ? "2 Hoteles" : "2 Hotels", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop" }
    ];

    return (
        <section className="mb-10">
            <div className="flex items-center gap-2 mb-6 px-1">
                <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
                    <Layers size={18} fill="currentColor" className="opacity-20" strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">{t.home.groups}</h2>
            </div>

            <Swiper
                spaceBetween={12}
                slidesPerView={'auto'}
                className="!pb-4 !px-1"
            >
                {GROUPS.map((group, idx) => (
                    <SwiperSlide key={idx} style={{ width: '280px' }}>
                        <Link href={`/group/${group.slug}`}>
                            <div className="group relative h-[160px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 border border-transparent hover:border-white/20">
                                {/* Background Image */}
                                <img
                                    src={group.image}
                                    alt={group.name}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:via-black/50" />

                                {/* Content */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-end items-start border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500">
                                    {/* Top Badge */}
                                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="text-white" size={14} />
                                    </div>

                                    <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-500/80 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-wider mb-2 border border-white/10">
                                        {group.places}
                                    </span>

                                    <h3 className="text-lg font-black text-white leading-tight drop-shadow-lg group-hover:text-indigo-200 transition-colors">
                                        {group.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
