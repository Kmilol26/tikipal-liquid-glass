"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
    Dumbbell, Utensils, Heart, Home, Music, Ticket, Coffee,
    Film, ShoppingBag, Beer, Trees, Calendar, Landmark,
    MapPin, ChevronRight, Search, Sparkles
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExplorePage() {
    const { t, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const CATEGORIES = [
        { id: "all", name: t.explore.categories.all, icon: <Sparkles size={20} />, color: "text-amber-500", bg: "bg-amber-500/10" },
        { id: "restaurantes", name: t.explore.categories.restaurants, icon: <Utensils size={20} />, color: "text-orange-500", bg: "bg-orange-500/10" },
        { id: "nightlife", name: t.explore.categories.nightlife, icon: <Music size={20} />, color: "text-indigo-500", bg: "bg-indigo-500/10" },
        { id: "deportes", name: t.explore.categories.sports, icon: <Dumbbell size={20} />, color: "text-blue-500", bg: "bg-blue-500/10" },
        { id: "wellness", name: t.explore.categories.wellness, icon: <Heart size={20} />, color: "text-rose-500", bg: "bg-rose-500/10" },
        { id: "cafes", name: t.explore.categories.cafes, icon: <Coffee size={20} />, color: "text-amber-700", bg: "bg-amber-700/10" },
        { id: "shopping", name: t.explore.categories.shopping, icon: <ShoppingBag size={20} />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { id: "cultura", name: t.explore.categories.culture, icon: <Landmark size={20} />, color: "text-sky-600", bg: "bg-sky-600/10" },
    ];

    const ZONES = [
        {
            id: "zona-t",
            name: t.explore.zones.zona_t.name,
            description: t.explore.zones.zona_t.desc,
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
            count: 124,
            tags: ["Premium", "Shopping", "Gastro"]
        },
        {
            id: "chapinero",
            name: t.explore.zones.chapinero.name,
            description: t.explore.zones.chapinero.desc,
            image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
            count: 215,
            tags: ["Alternative", "Cultura", "Rumba"]
        },
        {
            id: "usaquen",
            name: t.explore.zones.usaquen.name,
            description: t.explore.zones.usaquen.desc,
            image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=60",
            count: 98,
            tags: ["Colonial", "Mercados", "Tranquilo"]
        },
        {
            id: "cedritos",
            name: t.explore.zones.cedritos.name,
            description: t.explore.zones.cedritos.desc,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
            count: 85,
            tags: ["Residencial", "Parques", "Familiar"]
        },
        {
            id: "calle-93",
            name: t.explore.zones.calle_93.name,
            description: t.explore.zones.calle_93.desc,
            image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
            count: 142,
            tags: ["Business", "Parques", "Exclusive"]
        },
        {
            id: "galerias",
            name: t.explore.zones.galerias.name,
            description: t.explore.zones.galerias.desc,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
            count: 67,
            tags: ["Tradicional", "Bohemio", "Live Music"]
        },
    ];

    return (
        <div className="min-h-screen selection:bg-tikipal-orange/20">
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-6 sm:py-12 pt-4 sm:pt-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 mb-6 sm:mb-12 text-[13px] font-bold text-gray-400">
                    <Link href="/explore" className="hover:text-tikipal-orange transition-colors">
                        {t.header.bogota}
                    </Link>
                    <ChevronRight size={14} className="text-gray-300" />
                    <span className="text-gray-900">{t.explore.breadcrumb}</span>
                </nav>

                {/* Hero Header */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3 sm:mb-4">
                        {t.explore.hero_title} <span className="text-tikipal-orange">{t.explore.hero_span}</span>
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                        {t.explore.hero_desc}
                    </p>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 items-start md:items-center justify-between">
                    {/* Category Selector - Horizontal Scroll on Mobile */}
                    <div className="flex overflow-x-auto pb-4 -mx-6 px-6 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
                        <div className="flex flex-nowrap md:flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`whitespace-nowrap px-5 py-2.5 rounded-2xl text-[14px] font-bold transition-all duration-300 flex items-center gap-2 border ${activeCategory === cat.id
                                        ? "bg-white text-gray-900 border-tikipal-orange shadow-lg shadow-tikipal-orange/5 ring-1 ring-tikipal-orange/20"
                                        : "bg-white text-gray-500 border-gray-100 hover:border-gray-200 shadow-sm"
                                        }`}
                                >
                                    <div className={activeCategory === cat.id ? cat.color : "text-gray-400"}>
                                        {cat.icon}
                                    </div>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80 group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-tikipal-orange transition-colors">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder={t.explore.search}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-tikipal-orange/20 focus:border-tikipal-orange transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ZONES.filter(zone =>
                        zone.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((zone, idx) => (
                        <Link
                            key={idx}
                            href={`/zone/${zone.id}`}
                            className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-[240px] overflow-hidden">
                                <img
                                    src={zone.image}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    alt={zone.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                {/* Zone Badge */}
                                <div className="absolute top-5 right-5">
                                    <div className="bg-white/20 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                                        <p className="text-[11px] font-black text-white uppercase tracking-widest leading-none">
                                            {zone.count} {t.explore.stats.sites}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin size={16} className="text-tikipal-orange" />
                                    <span className="text-[10px] font-black text-tikipal-orange uppercase tracking-[0.2em]">{t.header.bogota}, Colombia</span>
                                </div>

                                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                                    {zone.name}
                                </h3>

                                <p className="text-gray-500 text-[14px] leading-relaxed font-medium mb-6 line-clamp-2">
                                    {zone.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {zone.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-3 py-1 bg-gray-50 text-gray-400 rounded-lg text-[10px] font-black uppercase tracking-wider border border-gray-100/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer / Link Indicator */}
                            <div className="px-8 pb-8 mt-auto flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                                                <img src={`https://i.pravatar.cc/100?u=${zone.id}${i}`} className="w-full h-full object-cover grayscale opacity-80" alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[11px] font-bold text-gray-400">{t.explore.stats.attendance}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-tikipal-orange group-hover:text-white transition-all duration-300">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {ZONES.filter(zone =>
                    zone.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).length === 0 && (
                        <div className="py-20 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                <Search size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.explore.empty_state.title}</h3>
                            <p className="text-gray-500">{t.explore.empty_state.desc}</p>
                        </div>
                    )}
            </main>

            <Footer />
        </div>
    );
}
