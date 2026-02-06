"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/Footer";
import { CategorySection } from "@/components/CategorySection";
import { TrendingSection } from "@/components/home/TrendingSection";
import { CallToActionBento } from "@/components/home/CallToActionBento";
import { FeaturedGroupsSection } from "@/components/home/FeaturedGroupsSection";
import { Dumbbell, Utensils, Heart, Home, Music, Ticket, Coffee, Film, ShoppingBag, Trees, Calendar, ChevronRight, Grid } from "lucide-react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useLanguage } from "@/context/LanguageContext";

export default function BogotaPage() {
    const { t, language } = useLanguage();

    const MOCK_ITEMS = [
        { id: "locos-por-el-padel", title: language === 'es' ? "Locos por el Padel" : "Crazy for Padel", tags: "Club de Padel · Pet Friendly", location: "Calle 170", price: "40.000", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80", rating: 4.9, isGuestFavorite: true },
        { id: "crepes-and-waffles", title: "Crepes & Waffles", tags: "Restaurante · Heladería", location: "Zona T", price: "35.000", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80", rating: 4.8, isGuestFavorite: false },
        { id: "bodytech", title: "Bodytech", tags: "Gimnasio · Sauna", location: "Chapinero", price: "80.000", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80", rating: 4.7, isGuestFavorite: true },
        { id: "theatron", title: "Theatron", tags: "Discoteca · Barra Libre", location: "Chapinero", price: "50.000", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80", rating: 4.9, isGuestFavorite: false },
        { id: "conjunto-el-nogal", title: language === 'es' ? "Conjunto El Nogal" : "The Walnut Complex", tags: "Admin · 24/7", location: "Norte", price: language === 'es' ? "Tarifa Fija" : "Fixed Rate", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80", rating: 5.0, isGuestFavorite: true },
        { id: "video-club", title: "Video Club", tags: "Club · Techno", location: "Chapinero", price: "30.000", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80", rating: 4.8, isGuestFavorite: false }
    ];

    const CITY_ZONES = [
        { title: language === 'es' ? "En Tendencia" : "Trending Now", subtitle: t.home.categories.more, image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop", slug: "en-tendencia" },
        { title: "Zona T", subtitle: language === 'es' ? "Gastronomía, moda y entretenimiento" : "Gastronomy, fashion and entertainment", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60", slug: "zona-t" },
        { title: "Zona Galerias", subtitle: language === 'es' ? "Tradición y ambiente cultural" : "Tradition and cultural vibe", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=60", slug: "zona-galerias" },
        { title: "Zona Cedritos", subtitle: language === 'es' ? "Residencial con amplia oferta comercial" : "Residential with wide commercial offer", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60", slug: "zona-cedritos" },
        { title: "Calle 93", subtitle: language === 'es' ? "Centro financiero y parques icónicos" : "Financial center and iconic parks", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60", slug: "calle-93" },
    ];

    const SLIDER_CATEGORIES = [
        { name: t.home.categories.sports, icon: <Dumbbell size={32} />, color: "text-blue-500", bg: "bg-blue-500/10" },
        { name: t.home.categories.restaurants, icon: <Utensils size={32} />, color: "text-orange-500", bg: "bg-orange-500/10" },
        { name: t.home.categories.wellness, icon: <Heart size={32} />, color: "text-rose-500", bg: "bg-rose-500/10" },
        { name: t.home.categories.residential, icon: <Home size={32} />, color: "text-purple-500", bg: "bg-purple-500/10" },
        { name: t.home.categories.nightlife, icon: <Music size={32} />, color: "text-indigo-500", bg: "bg-indigo-500/10" },
        { name: t.home.categories.concerts, icon: <Ticket size={32} />, color: "text-pink-500", bg: "bg-pink-500/10" },
        { name: t.home.categories.cafes, icon: <Coffee size={32} />, color: "text-amber-700", bg: "bg-amber-700/10" },
        { name: t.home.categories.cinema, icon: <Film size={32} />, color: "text-cyan-600", bg: "bg-cyan-600/10" },
        { name: t.home.categories.events, icon: <Calendar size={32} />, color: "text-red-500", bg: "bg-red-500/10" },
        { name: t.home.categories.shopping, icon: <ShoppingBag size={32} />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { name: t.home.categories.parks, icon: <Trees size={32} />, color: "text-green-600", bg: "bg-green-600/10" },
        { name: t.home.categories.more, icon: <Grid size={32} />, color: "text-gray-400", bg: "bg-gray-100" }
    ];

    return (
        <div className="min-h-screen selection:bg-tikipal-orange/20">
            <Header />

            <main className="pt-0 pb-6">
                <Hero />

                <div className="max-w-[1200px] mx-auto px-6 space-y-4">
                    {/* Categories Glass Icons Slider */}
                    <section className="mb-8">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={'auto'}
                            className="!pb-4 !px-1"
                        >
                            {SLIDER_CATEGORIES.map((cat, i) => (
                                <SwiperSlide key={i} style={{ width: '84px' }}>
                                    <div className="group cursor-pointer flex flex-col items-center gap-2">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cat.bg} backdrop-blur-xl border border-white/20 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                                            <div className={`${cat.color} drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                                                {cat.icon}
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-bold text-gray-500 tracking-tight group-hover:text-gray-900 transition-colors text-center">
                                            {cat.name}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>

                <div className="max-w-[1200px] mx-auto px-6 space-y-4">
                    {/* Descubre Bogotá Section */}
                    <section className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                <span className="text-tikipal-orange">{t.home.discover_bogota.split(' ')[0]}</span> {t.home.discover_bogota.split(' ').slice(1).join(' ')}
                            </h2>
                            <Link
                                href="/explore"
                                className="flex items-center gap-1 text-[13px] font-bold text-tikipal-orange hover:text-orange-600 transition-colors group"
                            >
                                {t.home.view_all}
                                <ChevronRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        <Swiper
                            spaceBetween={16}
                            slidesPerView={'auto'}
                            className="!pb-6"
                        >
                            {CITY_ZONES.map((zone, idx) => (
                                <SwiperSlide key={idx} style={{ width: '260px' }}>
                                    <Link href={`/zone/${zone.slug}`}>
                                        <div className="relative h-[140px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-tikipal-orange/20 transition-all duration-500">
                                            <img
                                                src={zone.image}
                                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                alt={zone.title}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                                <h3 className="text-xl font-black text-white leading-none mb-1 drop-shadow-md">{zone.title}</h3>
                                                <p className="text-[11px] font-bold text-white/80 uppercase tracking-wider drop-shadow-sm">{zone.subtitle}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                            {/* Banana Travel Slide */}
                            <SwiperSlide style={{ width: '120px' }}>
                                <div className="h-[140px] flex flex-col items-center justify-center gap-2 group cursor-pointer">
                                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">🍌</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Banana</p>
                                        <p className="text-[11px] font-black text-gray-900 uppercase">Travel</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    {/* Trending / News Section */}
                    <TrendingSection />

                    {/* Content Sections */}
                    <CategorySection title={t.home.new_sites} items={MOCK_ITEMS} />
                    <CategorySection title="Calle 85" items={MOCK_ITEMS} />

                    <CategorySection title={t.home.explore_more} items={MOCK_ITEMS} variant="compact" />

                    {/* Featured Groups / Clients */}
                    <FeaturedGroupsSection />

                    <CategorySection title="Chapinero" items={MOCK_ITEMS} />

                    {/* CTA Bento Section */}
                    <CallToActionBento />
                </div>
            </main>

            <Footer />
        </div>
    );
}
