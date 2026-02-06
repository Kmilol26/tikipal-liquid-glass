"use client";

import Link from "next/link";
import { Flame, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NewsItem {
    id: string;
    slug: string;
    category: string;
    title: string;
    time: string;
    image: string;
}

export function TrendingSection() {
    const { t, language } = useLanguage();

    const MOCK_NEWS: NewsItem[] = [
        {
            id: "1",
            slug: "adidas-originals-retro-2026",
            category: language === 'es' ? "LANZAMIENTO" : "LAUNCH",
            title: language === 'es' ? "Adidas Originals: Nueva Colección Retro 2026" : "Adidas Originals: New Retro 2026 Collection",
            time: t.home.time.hour_ago,
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1600&auto=format&fit=crop", // Adidas / Sneakers
        },
        {
            id: "2",
            slug: "mejores-brunch-bogota",
            category: language === 'es' ? "TENDENCIA" : "TRENDING",
            title: language === 'es' ? "Los 5 mejores Brunch para este fin de semana" : "Top 5 Brunch spots for this weekend",
            time: t.home.time.hours_ago,
            image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop", // Food
        },
        {
            id: "3",
            slug: "estereo-picnic-lineup-2026",
            category: language === 'es' ? "EVENTO" : "EVENT",
            title: language === 'es' ? "Festival Estéreo Picnic anuncia Lineup por días" : "Estéreo Picnic Festival announces daily Lineup",
            time: t.home.time.yesterday,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", // Concert
        },
    ];

    return (
        <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 px-1">
                <div className="p-1.5 rounded-full bg-red-100 text-red-600">
                    <Flame size={18} fill="currentColor" />
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">{t.home.trending}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
                {MOCK_NEWS.map((item, index) => (
                    <Link
                        key={item.id}
                        href={`/article/${item.slug}`}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ${index === 0
                            ? "col-span-2 md:col-span-2 md:row-span-2 h-[280px] md:h-auto"
                            : "col-span-1 h-full"
                            }`}
                    >
                        {/* Image Background */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-[10px] font-black uppercase tracking-widest text-white/90 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-sm border border-white/10`}>
                                    {item.category}
                                </span>
                            </div>
                            <h3 className={`font-bold text-white leading-tight mb-2 ${index === 0 ? "text-2xl md:text-3xl" : "text-lg line-clamp-2"}`}>
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-1.5 text-white/60 text-xs">
                                <TrendingUp size={12} />
                                <span>{item.time}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
